import React, { Component } from 'react'
import Dice from "./Dice";
import ScoreCard from "./ScoreCard";

const numDice = 5;

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice: Array.from({ length: numDice })
    }
  }

  render() {
    return (
      <div className="Game">
        <header className="Game-header">
          <h1 className="App-title">Yahtzee</h1>
        </header>
        <ScoreCard />
      </div>
    )
  }
}
