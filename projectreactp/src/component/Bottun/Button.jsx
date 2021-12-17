//onclick hold
//onclick //roll dic
//onclick newGmae
//onclick input
import React from 'react';
import Dice from '../dice/dice';


export default class Buttons extends React.Component{ 

    render= () =>{
        return(
          <div>
          <button onClick = {() =>{console.log("refresh")}}>New Game</button>
          <button onClick = {() =>{console.log("click")}}>Roll Dice</button>
          <button onClick = {() =>{console.log("click")}}>Hold</button>
          <Dice/>
          </div>
        )
  
  }}
