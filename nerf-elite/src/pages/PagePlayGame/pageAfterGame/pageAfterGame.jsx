import React from "react";
import "./style.css";
import { useLocation, useNavigate } from "react-router-dom";
import VideoPlayer from "../../videoPlayer/video";

const GameOverPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const score = location.state?.score || localStorage.getItem("finalScore") || 0;
  const selectedWeapon = location.state?.selectedWeapon || localStorage.getItem("selectedWeapon") || "Unknown";
  const selectedImage = location.state?.selectedImage || localStorage.getItem("selectedImage") || "";
  const videoSrc = "assets/video/HSNF0100000H.mp4";

  return (
    <div className="sliderContainerPlay">
      <div className="headerMiniGame">
        <div className="logoViewRange"></div>
        <div className="textSwipe">Awesome! Now check out the video</div>
      </div>

      <div className="contentWrapper">
        <div className="imageScoreContainer">
          <img src={selectedImage} alt={selectedWeapon} className="weaponImageMiniGame" />
          <h2 className="scoreMiniGame">Score: <span className="scorePoint">{score}</span></h2>
        </div>

        <div className="videoContainer">
          <VideoPlayer src={videoSrc} />
        </div>
      </div>

      <div className="buttonContainer">
        <button className="navButton" onClick={() => navigate("/")}>GO Back</button>
        <button className="visitButton">
          <a href="https://nerf.by/listing">VISIT NERF</a>
        </button>
      </div>
    </div>
  );
};

export default GameOverPage;
