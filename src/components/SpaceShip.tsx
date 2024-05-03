// import React from 'react'
import { useState } from "react";
import "../App.css"
import { useEffect } from "react";

// interface SpaceShipProps {
//     xPos:number;
//     yPos:number;
//     deg:number
// }
type PosObj = {xPos:number,yPos:number};

interface UpdatePositionFunction {
  (arg0: PosObj): void;
}

interface SpaceShipProps {
  // Déclare la prop pour la fonction de mise à jour de la position
  updatePosition: UpdatePositionFunction;
}


const SpaceShip: React.FC<SpaceShipProps> = ({ updatePosition }) => {
    let src:string = "../src/assets/spaceship.png";

    const [xPos,setXPos]=useState<number>(1);
    const [yPos,setYPos]=useState<number>(1);
    const [deg,setDeg]=useState<number>(0);

    useEffect(()=>{updatePosition({'xPos':xPos,'yPos':yPos})},[xPos,yPos]);


  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
          yPos > 1 ? setYPos(yPos - 1) : setYPos(1);
          setDeg(0);
          break;
        case "ArrowDown":
          yPos < 8 ? setYPos(yPos + 1) : setYPos(8);
          setDeg(180);
          break;
        case "ArrowLeft":
          xPos > 1 ? setXPos(xPos - 1) : setXPos(1);
          setDeg(270);
          break;
        case "ArrowRight":
          xPos < 8 ? setXPos(xPos + 1) : setXPos(8);
          setDeg(90);
          break;
        default:
          break;
      }
      
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [xPos, yPos]);

    const dynamicGridArea:string=`${yPos}/${xPos}`
    const dynamicRotation:string=`rotate(${deg}deg)`

    

  return (
    <>
        <img src={src} id="spaceship" style={{gridArea : dynamicGridArea,transform : dynamicRotation}}/>
    </>
  )
}

export default SpaceShip