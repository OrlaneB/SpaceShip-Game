// import React from 'react'
// import { useState } from "react";
import "../App.css"

interface SpaceShipProps {
    xPos:number;
    yPos:number;
}
// type Props = {}

export default function SpaceShip({ xPos, yPos }: SpaceShipProps) {
    let src:string = "../src/assets/spaceship.png";

    const dynamicGridArea:string=`${yPos}/${xPos}`

  return (
    <>
        <img src={src} id="spaceship" style={{gridArea : dynamicGridArea}}/>
    </>
  )
}