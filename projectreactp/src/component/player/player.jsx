//Goal 1# make game and players

//playr name
//score 
//current score
//dot that reprsante who is the player 


import React from 'react';
import './Player.css';

export default class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: this.props.name,
          turn: false  
         }
    }
    render = () => {
       
        return (
        <div className="Player-div">
            <div className="PlayerStyle Player-Name">{this.state.name}</div>
            <div className="PlayerStyle Player-Score">{this.props.score}</div>
            <div className="PlayerStyle Player-Current">{this.props.currentScore}</div>
        </div>
        )
    }
}