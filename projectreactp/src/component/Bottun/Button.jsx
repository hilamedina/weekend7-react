//onclick hold
//onclick //roll dic
//onclick newGmae
//onclick input
import React from 'react';
import Dice from '../dice/dice';
import './Button.css';


export default class Buttons extends React.Component{ 

    render= () =>{
        return(
          <div className="All">
          <button className="ButtonStyle" onClick = {() => window.location.reload()}>New Game</button>
          <button className="ButtonStyle" onClick = {() =>{console.log("click")}}>Roll Dice</button>
          <button className="ButtonStyle" onClick = {() =>{console.log("click")}}>Hold</button>
          <Dice/>
          <Dice/>
          </div>
      
       
        )
  
  }}
