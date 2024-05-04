// import React from 'react'
// import { useState } from "react";
import SpaceShip from "./components/SpaceShip"
import Lights from "./components/Lights";
import { useEffect } from "react";


export default function App() {

    type PosObj = {xPos:number,yPos:number};
    type LightObj = {
      id:number;
      xPos:number;
      yPos:number
  }
  

    let pos:PosObj={'xPos':1,'yPos':1};
    let listLights:LightObj[]|any = [];

    function changePosSpaceShip(value:PosObj){
      pos=value;
      checkIfSpaceShipMeetsLight()
    }

    function updateListLights(value:LightObj):void{
      listLights=value;
      console.log(listLights)
    }



    function checkIfSpaceShipMeetsLight (){
      let shipX:number = pos.xPos;
      let shipY:number = pos.yPos;

        for(let i=0;i<listLights.length;i++){
          let lightX:number = listLights[i].yPos;
          let lightY:number = listLights[i].xPos;

          // console.log(`Ship : ${shipX}/${shipY} ; Light : ${lightX}/${lightY}`);
            if(shipX===lightX && shipY===lightY){
              console.log("boom!")
            }
        }
    }

  


  return (
    <div id="app"  >
      <SpaceShip updatePosition={(value:PosObj)=>changePosSpaceShip(value)}/>
      <Lights spaceShipPos={pos} updateListCb={(value)=>updateListLights(value)}/>
    </div>
  )
}
