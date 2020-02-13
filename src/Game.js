import React, { Component } from 'react'
import Dice from "./Dice";
import ScoreCard from "./ScoreCard";
import "./Game.css";

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
          <section className="Game-dice-section">
            <Dice />
            <div className="Game-button-wrapper">
              <button className="Game-reroll">Rolls Left</button>
            </div>
          </section>
        </header>
        <ScoreCard />
      </div>
    )
  }
}
