// import React from 'react'
// import { useState } from "react";
import SpaceShip from "./components/SpaceShip"
import Lights from "./components/Lights";


export default function App() {
    

    type PosObj = {xPos:number,yPos:number};

    let pos:PosObj={'xPos':1,'yPos':1};

  function changePosSpaceShip(value:PosObj){
    pos=value;
  }

  return (
    <div id="app"  >
      <SpaceShip updatePosition={(value:PosObj)=>changePosSpaceShip(value)}/>
      <Lights />
    </div>
  )
}
