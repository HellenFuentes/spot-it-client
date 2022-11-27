import React, { useEffect, useState } from "react";
import backIcon from "../../../../../assets/icons/flecha-izquierda.png";
import helpIcon from "../../../../../assets/icons/help-web-button.png";
import ClipboardCopy from "../../../../../services/ClipboardCopy/ClipboardCopy";
import { socket } from "../PlayerForm/PlayerForm";
import { useNavigate } from "react-router-dom";

function Waiting() {
  const navigate = useNavigate();
  const [players, setPlayers] = useState([]);
  const [imHost, setHost] = useState(false);

  const redirectUser = (path) => {
    navigate(path);
  };

  const startPlaying = () => {
    socket.emit("startGame", players[0]?.roomId);
  };

  useEffect(() => {
    if (socket.id === players[0]?.id) {
      setHost(true);
    }
  }, [players]);

  socket.on("playerList", (data) => {
    setPlayers(data);
  });

  socket.on("redirectGame", (data) => {
    redirectUser("/game");
  });

  //TODO: no se puede iniciar el juego si hay menos de 2 jugadores o más de 8
  const renderButton = imHost ? (
    <div className="contenedor_boton">
      <div className="play-button-container">
        <button
          className="play-button"
          id="startGame"
          onClick={() => startPlaying()}
        >
          Let's play!
        </button>
      </div>
    </div>
  ) : (
    <></>
  );

  return (
    <div className="waiting_container">
      <div className="waitingHeader">
        <div className="icons">
          <img className="icon" src={backIcon} alt="Spot It Game" />
        </div>
        <div className="room-code">
          <h2>Room's code</h2>
          <ClipboardCopy copyText={players[0]?.roomId} />
          <small>
            Share this code with your friends to join the room and start
            playing!
          </small>
        </div>
        <div className="icons">
          <img className="icon" src={helpIcon} alt="Spot It Game" />
        </div>
      </div>

      <div className="playersLabel">
        {players?.map((players, key) => (
          <label id="label1" key={key}>
            {players.name}
          </label>
        ))}
      </div>
      {renderButton}
    </div>
  );
}

export default Waiting;
