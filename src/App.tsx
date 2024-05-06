// import React from 'react'
import { useState } from "react";
import SpaceShip from "./components/SpaceShip"
import Lights from "./components/Lights";
// import { useEffect } from "react";


export default function App() {
  //TYPES
  //For the object with the position of SpaceShip
  type PosObj = {xPos:number,yPos:number};

  //For every light object
  type LightObj = {
    id:number;
    xPos:number;
    yPos:number
  }
  
  //For the cb function that updates the array list of lights
  type updateListCb = (arg0:LightObj[])=>void;


  //STATES
  const [listLights,setListLights] = useState<LightObj[]>();

  
  
  //FUNCTIONS
    let pos:PosObj={'xPos':1,'yPos':1};

    function changePosSpaceShip(value:PosObj){
      pos=value;
      checkIfSpaceShipMeetsLight()
    }

    const newListLight:updateListCb = function updateListLights(value:LightObj[]){
      setListLights(value);
    }



    async function checkIfSpaceShipMeetsLight (){

      let shipX:number = pos.xPos;
      let shipY:number = pos.yPos;


      for(let i = 0; i < (listLights ?? []).length; i++){
        if (listLights && listLights[i]) {
          let lightX: number = listLights[i].yPos;
          let lightY: number = listLights[i].xPos;

          if (shipX === lightX && shipY === lightY) {
              console.log("boom!",`Touched light ${i+1}`);
              spaceshipTouchesLight(i);
          }
      }
    }

    }

    function spaceshipTouchesLight(indexLight:number):void{
      //Remove the light
      if(listLights !== undefined){
        const newList = [...listLights];
        newList.splice(indexLight,1);
        setListLights(newList);
      }
      
      //Add a point
    }


  return (
    <div id="app"  >
      <SpaceShip updatePosition={(value:PosObj)=>changePosSpaceShip(value)}/>
      <Lights updateListCb={newListLight} listLights={listLights}/>
    </div>
  )
}
