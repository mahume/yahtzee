import React, { Component } from 'react';
import RuleRow from "./RuleRow";
import "./ScoreCard.css";

export default class ScoreCard extends Component {
  render() {
    return (
      <div className="ScoreCard">
        <div className="ScoreCard-section">
          <h2>Upper</h2>
          <table>
            <tbody>
              <RuleRow />
            </tbody>
          </table>
        </div>
        <div className="ScoreCard-section ScoreCard-section-lower">
          <h2>Lower</h2>
          <table>
            <tbody>
              <RuleRow />
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
