import './style.css';
import { useState } from "react";
import VideoPlayer from "../videoPlayer/video";
import "../videoPlayer/video.css"; // Добавим стили для затемненного фона
import { useNavigate } from "react-router-dom";

function Page1() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate(); // Хук для перехода на другую страницу

  return (
    <>
      <header>
        <div className="logo"></div>
        <div className="textChoose">
          Choose your blaster then shoot as many <br />
          targets as you can within the time limit!
        </div>
      </header>
      <div className="weapon-container">
        <div className="firstWeapon"></div>
        <div className="secondWeapon"></div>
        <div className="thirdWeapon"></div>
        <div className="fourthWeapon"></div>
      </div>
      <div className="buttons-container">
        <button className="weapon-button">PLAY MINIGAME</button>
        <button className="weapon-button" onClick={() => setIsModalOpen(true)}>
          WATCH VIDEO
        </button>
        <button className="weapon-button" onClick={() => navigate("/viewRange")}>
          VIEW RANGE
        </button>
        <button className="weapon-button">VISIT NERF</button>
      </div>
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <VideoPlayer src="/assets/video/HSNF0100000H.mp4" poster="/" />
            <button className="close-button" onClick={() => setIsModalOpen(false)}>✖</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Page1;