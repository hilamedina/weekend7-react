
import React from 'react';
import './Player.css';

export default class Player extends React.Component {
    constructor(props) {
        super(props);
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