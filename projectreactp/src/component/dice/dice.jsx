import React from 'react';
import "./dice.css";

export default class Dice extends React.Component{ 
    constructor(props) {
        super(props);
    }
    rollDice(arr) {
        let roll = arr[Math.floor(6*Math.random()) + 1];
        return roll;
    }
    render(){
        return(
            <div className={this.rollDice(diceImage)}> 
        </div>
        )
    }}
    const diceImage =  ["image1","image2","image3","image4","image5","image6"];
    