
import React from 'react';
import './Player.css';

export default class Player extends React.Component {
    render = () => { 
        return (
        <div className="Player-div">
            <div className="PlayerStyle Player-Name">{this.props.name}</div>
            <div className="PlayerStyle Player-Current">{this.props.currentScore}  currentScore</div>
            <div className="PlayerStyle Player-Score">{this.props.score}  Score</div>
        </div>
        )
    }
}