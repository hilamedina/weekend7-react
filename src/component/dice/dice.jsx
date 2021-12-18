import React from 'react';
import "./dice.css";
export default class Dice extends React.Component{ 
    
    render(){
        return(
            <div className={"image" + this.props.diceNum}> 
        </div>
        )
    }}
    