import React, { Component } from 'react'
import Dice from "./Dice";
import ScoreCard from "./ScoreCard";

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="Game">
        <h1>Game</h1>
        <Dice />
        <ScoreCard />
      </div>
    )
  }
}