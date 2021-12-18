import React from 'react';
import "./dice.css";

export default class Dice extends React.Component{ 
    constructor(props) {
        super(props);
    }
    rollDice(arr) {
        let res = array[Math.floor(Math.random() * 6)];
        let num = parseInt(res.match(/\d+/)[0]);
        let sum = 0;
        sum = sum + num;
        // console.log(res);
        // console.log(num);
        // console.log(sum);
        return res;
       
    }
    render(){
        return(
            <div className={this.rollDice(diceImage)}> 
        </div>
        )
    }}
    const diceImage =  ["image1","image2","image3","image4","image5","image6"];
    