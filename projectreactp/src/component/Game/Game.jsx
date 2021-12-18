
import React from 'react';
import Player from '../player/player';
import Dice from '../dice/dice';
import './Game.css';

const diceImage = ["image1","image2","image3","image4","image5","image6"];
export default class Game extends React.Component {
        state = {
          player1turn: false,
          player2turn: true,
          score: 0,
          currentScore:0, 
          dice1:0,  
          dice2:0,
          winner: false,
          player1Name: "player1",
          player1Score: 0,
          player1Currentscore: 0,
          player2Name: "player2",
          player2Score: 0,
          player2Currentscore: 0,   
         }
      
         // window.location.reload()
     rollDice = (arr) => {
      // // let num = Math.floor(Math.random() * 6);
      // let num = parseInt(res.match(/\d+/)[0]);
      // let res = arr[num];
      let res = arr[Math.floor(Math.random() * 6)];
      let num = parseInt(res.match(/\d+/)[0]); 
      return {number : num, imgUrl : res};  
    }
      diceDo = () => {
       // hold function : chaneg the player +update the current score .

       //input function .

       //css again ! .

       // winner function. 

       //reload the game.

       // change the image of dice 1.

       //if 6-6 check in the pdf.

        let rolldice1 = this.rollDice(diceImage); //obj
        let rolldice2 = this.rollDice(diceImage); //obj2
        this.setState({dice1: rolldice1.number});
        this.setState({dice2: rolldice2.number});
        this.setState({player1Currentscore: rolldice1.number + rolldice2.number})
        let sum = parseInt(this.state.player1Score + this.state.player1Currentscore)
        console.log(sum);
        this.setState({player1Score: sum}); 
      }
      render = () => {
        return (
          <>
           <div className="Game">
           <Player name={this.state.player2Name} score={this.state.player2Score} currentScore={this.state.player2Currentscore}/>
           <div className="All">
          <button className="ButtonStyle" onClick = {() => window.location.reload()}>New Game</button>
          <button className="ButtonStyle" onClick = {this.diceDo}>Roll Dice</button>
          <button className="ButtonStyle"  onClick = {() =>{console.log("click")}}>Hold</button>
           <Dice diceNum={this.state.dice1}/>
           <Dice diceNum={this.state.dice2}/> 
          <button className="ButtonStyle" onClick = {() =>{console.log("click")}}>input</button>
           </div>
           <Player name = {this.state.player1Name} score={this.state.player1Score} currentScore={this.state.player1Currentscore}/>
           </div>
           </>
           
        )
    }
  }


