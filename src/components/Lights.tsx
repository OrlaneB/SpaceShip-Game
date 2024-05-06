// import React from 'react'
// import { useState } from "react"
import { useEffect } from "react";
import "../style/Lights.css"

type LightObj = {
    id:number;
    xPos:number;
    yPos:number
}

// interface Position {
//     xPos: number;
//     yPos: number;
//   }

  type updateListCb = (arg0:LightObj[])=>void;


interface Props {
    updateListCb:updateListCb,
    listLights?:LightObj[]
}


export default function Lights({updateListCb,listLights=[] }: Props) {
    // const[step,setStep]=useState<number>(1);
    let nbLights:number = 6;


    function createLights(){
        const newLights: LightObj[] = [];
        //for loop to create the lights
        //randomly put them somewhere in the grid
        //But not somewhere a light alredy is
        // console.log("Create Lights is called");
        for(let i=1;i<=nbLights;i++){
            let xPos = Math.floor(Math.random() * 8)+1;
            let yPos = Math.floor(Math.random() * 8)+1;
            // console.log(`Light ${i} : `)
            // console.log(`current light : ${xPos},${yPos}`)
                
                for(let j=0;j<newLights.length;j++){
                    // console.log(newLights[j]);
                    // console.log(newLights[j].yPos);
                    if(newLights[j]){
                        if(newLights[j].xPos === xPos){
                            if(newLights[j].yPos===yPos){
                                // console.log(j)
                                // console.log(`Before : ${xPos},${yPos}`);
                                xPos = Math.floor(Math.random() * 8)+1;
                                yPos = Math.floor(Math.random() * 8)+1;
                                j=0;
                                // console.log(`After : ${xPos},${yPos}`);
                            }
                        }
                    }
                    
                }
          
            newLights.push({id:i,'xPos':xPos,'yPos':yPos})
            
    
        }
        return(newLights)

    //    for (let i = 0; i < listLights.length; i++) {
    //     console.log(`My light is positioned at: ${listLights[i].xPos} : ${listLights[i].yPos}`);
    // }
    }

    useEffect(()=>{
        const lights = createLights();
        updateListCb(lights);
    },[])
   
    
    
    // checkIfSpaceShipMeetsLight();
    // console.log(listLights[0].xPos,listLights[0].yPos)

  return (
    <div id="lightsDiv">
       {
       listLights.length>=1 &&(listLights.map((light)=>(
            <div key={light.id} style={{gridRowStart:light.xPos,gridColumnStart: light.yPos}} className="light">{light.id}</div>
       )))}
    </div>
  )
}

/* Each time we have a new step, we want to create new lights
The number of lights will depend of the steps (for now like 6)
Each time the spaceship goes on the same case as a light, the light disappear.
*/