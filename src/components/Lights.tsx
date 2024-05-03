// import React from 'react'
// import { useState } from "react"
import "../style/Lights.css"

type LightObj = {
    id:number;
    xPos:number;
    yPos:number
}

type Props = {}

export default function Lights({}: Props) {
    // const[step,setStep]=useState<number>(1);
    let listLights:LightObj[]=[];
    let nbLights:number = 6;

    function createLights(){
        //for loop to create the lights
        //randomly put them somewhere in the grid
        //But not somewhere a light alredy is
        for(let i=1;i<=nbLights;i++){
            let xPos = Math.floor(Math.random() * 8)+1;
            let yPos = Math.floor(Math.random() * 8)+1;

            // let uniqueLight=false;

            // while(!uniqueLight){
                
                for(let j=0;j<listLights.length;j++){
                    
                    if(listLights[j].xPos === xPos && listLights[j].yPos === yPos){
                        // console.log(j)
                        // console.log(`Before : ${xPos},${yPos}`);
                        xPos = Math.floor(Math.random() * 8)+1;
                        yPos = Math.floor(Math.random() * 8)+1;
                        j=0;
                        // console.log(`After : ${xPos},${yPos}`);
                    }
                }
            // }
            listLights.push({id:i,'xPos':xPos,'yPos':yPos})

            console.log(`My light is position : ${xPos} : ${yPos}`)
        }

        // console.log(listLights)
    }

    createLights();

  return (
    <div id="lightsDiv">
       {listLights.map((light)=>(
            <div key={light.id} style={{gridRowStart:light.xPos,gridColumnStart: light.yPos}} className="light"></div>
       ))}
    </div>
  )
}

/* Each time we have a new step, we want to create new lights
The number of lights will depend of the steps (for now like 6)
Each time the spaceship goes on the same case as a light, the light disappear.
*/