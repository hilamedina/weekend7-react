
import React from 'react';
import Buttons from '../Bottun/Button';
import Player from '../player/player';
import './Game.css';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          score: 0,
          currentScore:0, 
          dices: [null, null],
          pointsToWin: 20,
          winner: false,
          player: ["player1" , "player2"]
         }
    }
   
    render = () => {
      
        return (
           <div className="Game">
           <Player name="player 1" score="score 1" currentScore="current"/>
           <div className="Button-dice-div">
           <Buttons/>
           </div>
           <Player name ="player 2" score="score 2" currentScore="current"/>
           </div>
        
    
        )
    }
  }
