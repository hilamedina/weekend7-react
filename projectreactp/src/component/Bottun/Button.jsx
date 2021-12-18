import React from 'react';
import Dice from '../dice/dice';
import './Button.css';


export default class Buttons extends React.Component{
  constructor(props) {
    super(props)
  }

  rollDice =(arr) => {
    let res = arr[Math.floor(Math.random() * 6)];
    let num = parseInt(res.match(/\d+/)[0]);
    return {number : num, imgUrl : res};  
  }
  diceDO = () => {
    const diceImage = ["image1","image2","image3","image4","image5","image6"];
     const dice1 = this.rollDice(diceImage);
     const dice2 = this.rollDice(diceImage);
     this.props.diceStatus("dice1", dice1.number);
     this.props.diceStatus("dice2", dice2.number);
  }

  render= () =>{
        return(
          <div className="All">
          <button className="ButtonStyle" onClick = {() => window.location.reload()}>New Game</button>
          <button className="ButtonStyle" onClick = {() =>{this.diceDO()}}>Roll Dice</button>
          <button className="ButtonStyle" onClick = {() =>{console.log("click")}}>Hold</button>
          <Dice diceNum={this.props.state.dice1}/>
          <Dice diceNum={this.props.state.dice2}/>
          </div>
      
       
        )
  
  }}
