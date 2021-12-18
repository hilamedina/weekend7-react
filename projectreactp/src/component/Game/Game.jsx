
import React from 'react';
import Buttons from '../Bottun/Button';
import Player from '../player/player';
import './Game.css';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          player1turn: false,
          score: 0,
          currentScore:0, 
          dice1:0,
          dice2:0,
          pointsToWin: 20,
          winner: false,
          player1Name: "player1",
          player1Score: 0,
          player1Currentscore: 0,
          player2Name: "player2",
          player2Score: 0,
          player2Currentscore: 0,

         }
    }
    // stateName = "player1Name" 
    //stateValue = "hila"
    // it will work (itay amar)
    diceStatus = (stateName, stateValue) =>{
      console.log("name in the state that vwe want to update", stateName);
      console.log("value that right to name", stateValue);

      //ex : dice1 ,6
      this.setState(() =>{
        return{
          // state is obj 
          //const x = winner
          //state.x => we will get nohing 
          //state[x] => we will get winnwr value - false
          //stateName could get string - stateName could be "string"
          [stateName]: stateValue
        }
      })

    }

   
    render = () => {
      
        return (
           <div className="Game">
           <Player name={player2Name} score={player2Score} currentScore={player2Currentscore}/>
           <div className="Button-dice-div">
           <Buttons diceStatus = {this.diceStatus} state={this.state}/>
           </div>
           <Player name ={player1Name} score={player1Score} currentScore={player1Currentscore}/>
           </div>
        
    
        )
    }
  }
  //diceStatus = props name
  //thisdiceStatus = props value
