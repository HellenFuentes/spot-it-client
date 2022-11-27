import React from "react";
import "./Leaderboard.scss";

import user_icon from "../../../assets/icons/user.svg";
import crown from "../../../assets/icons/crown.svg";

function Leaderboard() {
  return (
    <div className="leaderboard">
      <article className="top_leaders">
        <div className="cardPlayer">
          <p>2</p>
          <div className="card_content">
            <img src={user_icon} alt="user" className="user_icon" />
            <p>User Name</p>
            <p>Points</p>
          </div>
        </div>
        <div className="cardPlayer">
          <img src={crown} alt="crown" className="player_crown" />
          <div className="card_content">
            <img src={user_icon} alt="user" className="user_icon" />
            <p>User Name</p>
            <p>Points</p>
          </div>
        </div>
        <div className="cardPlayer">
          <p>3</p>
          <div className="card_content">
            <img src={user_icon} alt="user" className="user_icon" />
            <p>User Name</p>
            <p>Points</p>
          </div>
        </div>
      </article>

      <article>
        <table>
          <tr>
            <th>#</th>
            <th>User Name</th>
            <th>Date</th>
            <th>Points</th>
          </tr>
          <tr>
            <td>
              <p className="player_number">4</p>
            </td>
            <td>
              <div className="player_info">
                <img src={user_icon} alt="user" className="player_icon" />
                <p className="player_name">Player 1</p>
              </div>
            </td>
            <td>20/6/2022</td>
            <td>3500pts</td>
          </tr>
          <tr>
            <td>
              <p className="player_number">5</p>
            </td>
            <td>
              <div className="player_info">
                <img src={user_icon} alt="user" className="player_icon" />
                <p className="player_name">Player 2</p>
              </div>
            </td>
            <td>xx/xx/xxxx</td>
            <td>2000pts</td>
          </tr>
          <tr>
            <td>
              <p className="player_number">6</p>
            </td>
            <td>
              <div className="player_info">
                <img src={user_icon} alt="user" className="player_icon" />
                <p className="player_name">Player 3</p>
              </div>
            </td>
            <td>xx/xx/xxxx</td>
            <td>1500pts</td>
          </tr>
          <tr>
            <td>
              <p className="player_number">7</p>
            </td>
            <td>
              <div className="player_info">
                <img src={user_icon} alt="user" className="player_icon" />
                <p className="player_name">Player 4</p>
              </div>
            </td>
            <td>xx/xx/xxxx</td>
            <td>800pts</td>
          </tr>
        </table>
      </article>
    </div>
  );
}

export default Leaderboard;
