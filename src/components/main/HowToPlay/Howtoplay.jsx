import React from "react";
import "./Howtoplay.scss";

function HowToPlay() {
  return (
    <div className="howtoplay">
      <h1 className="title">How To Play</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/AlTZkmvX2Sk"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default HowToPlay;
