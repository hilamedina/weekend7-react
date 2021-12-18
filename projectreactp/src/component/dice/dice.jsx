import React from 'react';
import "./dice.css";

const diceImage =  ["image1","image2","image3","image4","image5","image6"];
export default class Dice extends React.Component{ 
    constructor(props) {
        super(props);
    }
    // this.props.diceObj
    // rollDice(arr) {
    //     let res = arr[Math.floor(Math.random() * 6)];
    //     let num = parseInt(res.match(/\d+/)[0]);
    //     return {number : num, imgurl : res};  
    // }
    render(){
        return(
            <div className={"image" + this.props.diceNum}> 
        </div>
        )
    }}
    