import React, { Component } from 'react'
import Die from "./Die";

export default class Dice extends Component {
  render() {
    return (
      <div className="Dice">
        <span>Dice</span>
        <Die />
      </div>
    )
  }
}
