import React from "react";
import Countdown from "react-countdown";
import { Navigate } from "react-router-dom";

import backIcon from "../../../../../../assets/icons/flecha-izquierda.png";
import helpIcon from "../../../../../../assets/icons/help-web-button.png";

//-------------------------------------------Start Timer-------------------------------------------
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return <>Hi</>;
    //return <Navigate to="/gameover" />;
  } else {
    // Render a countdown
    return (
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    );
  }
};
//------------------------------------------- End Timer-------------------------------------------

function Timer() {
  return (
    <>
      <div className="timer_container">
        <div className="icons">
          <img className="icon" src={backIcon} alt="Spot It Game" />
        </div>
        <div className="timer">
          <h2>
            <Countdown date={Date.now() + 30000} renderer={renderer} />
          </h2>
        </div>
        <div className="icons">
          <img className="icon" src={helpIcon} alt="Spot It Game" />
        </div>
      </div>
    </>
  );
}

export default Timer;
