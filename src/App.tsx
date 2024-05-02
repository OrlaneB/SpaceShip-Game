// import React from 'react'
import { useState } from "react";
import SpaceShip from "./components/SpaceShip"


export default function App() {
  const [xPos,setXPos]=useState<number>(1);
  const [yPos,setYPos]=useState<number>(1);

  document.addEventListener('keydown',(event)=>{
    switch(event.key){
      case "ArrowUp":
        yPos>1? setYPos(yPos-1):setYPos(1);
        break;
      case "ArrowDown":
        yPos<8? setYPos(yPos+1):setYPos(8);
        break;
      case "ArrowLeft":
        xPos>1?setXPos(xPos-1):setXPos(1);
        break;
      case "ArrowRight":
        xPos<8?setXPos(xPos+1):setXPos(8);
        break;
    }
  })

  return (
    <div id="app"  >
      <SpaceShip xPos={xPos} yPos={yPos}/>
    </div>
  )
}
