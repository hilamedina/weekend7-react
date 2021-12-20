import React from 'react';
import Player from '../player/player';
import Dice from '../dice/dice';
import Music from '../Music/music';
import './Game.css';

const diceImage = ['image1', 'image2', 'image3', 'image4', 'image5', 'image6'];
export default class Game extends React.Component {
  state = {
    player1turn: true,
    player2turn: false,
    score: 0,
    currentScore: 0,
    dice1: 0,
    dice2: 0,
    winner: false,
    player1Name: 'player1',
    player1Score: 0,
    player1Currentscore: 0,
    player2Name: 'player2',
    player2Score: 0,
    player2Currentscore: 0,
    points: 100,
  };

  rollDice = (arr) => {
    let res = arr[Math.floor(Math.random() * 6)];
    let num = parseInt(res.match(/\d+/)[0]);
    return { number: num, imgUrl: res };
  };
  functionHold = () => {
    if (this.state.player1turn) {
      this.setState({ player1turn: false });
      this.setState({ player1Currentscore: 0 });
      this.setState({ player2turn: true });
    }
    if (this.state.player2turn) {
      this.setState({ player2turn: false });
      this.setState({ player2Currentscore: 0 });
      this.setState({ player1turn: true });
    }
  };
  playerWon = () => {
    if (
      this.state.player1Score >= this.state.points ||
      this.state.player2Score >= this.state.points
    ) {
      this.setState({ winner: true });
    }
  };

  diceDo = () => {
    if (this.state.winner) {
      this.setState({ Score: 'winner' });
      return;
    }
    if (this.state.player1turn) {
      let rolldice1 = this.rollDice(diceImage);
      let rolldice2 = this.rollDice(diceImage);
      this.setState({ dice1: rolldice1.number });
      this.setState({ dice2: rolldice2.number });
      this.setState({
        player1Currentscore: rolldice1.number + rolldice2.number,
      });
      let sum = parseInt(
        this.state.player1Score + this.state.player1Currentscore
      );
      this.setState({ player1Score: sum }, () => {
        this.playerWon();
      });
      console.log(this.state.winner);
    } else {
      let rolldice1 = this.rollDice(diceImage);
      let rolldice2 = this.rollDice(diceImage);
      this.setState({ dice1: rolldice1.number });
      this.setState({ dice2: rolldice2.number });
      this.setState({
        player2Currentscore: rolldice1.number + rolldice2.number,
      });
      let sum = parseInt(
        this.state.player2Score + this.state.player2Currentscore
      );
      this.setState({ player2Score: sum }, () => {
        this.playerWon();
      });
    }
  };
  pointsValue = (e) => {
    this.setState({ points: e.target.value });
  };

  render = () => {
    return (
      <>
        <div className="Game">
          <Player
            name={this.state.player2Name}
            score={this.state.player2Score}
            currentScore={this.state.player2Currentscore}
            active={this.state.turn}
          />
          <div className="All">
            <button
              className="ButtonStyle"
              onClick={() => window.location.reload()}
            >
              New Game
            </button>
            <button className="ButtonStyle" onClick={this.diceDo}>
              Roll Dice
            </button>
            <button className="ButtonStyle" onClick={this.functionHold}>
              Hold
            </button>
            <Dice diceNum={this.state.dice1} />
            <Dice diceNum={this.state.dice2} />
            <input
              value={this.state.points}
              onChange={this.pointsValue}
              type="text"
              placeholder="Winning Score: 100pt"
            />
          </div>
          <Player
            name={this.state.player1Name}
            score={this.state.player1Score}
            currentScore={this.state.player1Currentscore}
          />
          <Music />
        </div>
      </>
    );
  };
}
