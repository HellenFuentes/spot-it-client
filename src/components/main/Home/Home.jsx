import React from "react";
import { Link } from "react-router-dom";
import gameImg from "../../../assets/images/GamePic.png";
import audio from "../../../assets/sounds/wow.mp3";
import playAudio from "./PlaySound/playSound";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Spot It Game</h1>
      <p className="home-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris.
      </p>
      {/* Imagen tomada de  https://www.spotitgame.com/*/}
      <img
        onClick={playAudio}
        className="home-img"
        src={gameImg}
        alt="Spot It Game"
      />
      <div className="play-button-container">
        <Link to="/playerform">
          <button className="play-button">Play Spot It!</button>
        </Link>
      </div>

      <audio id="audio_wow" src={audio}></audio>
    </div>
  );
}

export default Home;
