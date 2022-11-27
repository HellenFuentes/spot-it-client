import React from "react";
import { Link } from "react-router-dom";

class GameOver extends React.Component {
  render() {
    return (
      <div className="gameOver_container">
        <h1 className="gameOver_title">Game Over</h1>
        <div className="gameOver_score">
          <h2>Winner: Name / Score</h2>
        </div>
        <div>
          <h3 className="gameOver_finalScores">Final Scores</h3>
        </div>
        <div>
          <Link to="/">
            <button className="gameOver_button">Return to Home</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default GameOver;
