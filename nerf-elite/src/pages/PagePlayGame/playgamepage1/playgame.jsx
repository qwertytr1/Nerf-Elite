import React, { useState } from "react";
import "./style.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const weapons = [
  { id: 1, image: "assets/weapon/first.png", title: "ELITE 2.0 ECHO" },
  { id: 2, image: "assets/weapon/NERF_Elite20_Volt.png", title: "ELITE 2.0 VOLT" },
  { id: 3, image: "assets/weapon/NERF_Elite20_Shockwave.png", title: "Elite 2.0 SHOCKWAVE" },
  { id: 4, image: "assets/weapon/NERF_Elite20_Commander.png", title: "Elite 2.0 Commander" },
];

const GAME_PLAY_PAGE1 = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? weapons.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === weapons.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePlay = () => {
    const selectedWeapon = weapons[currentIndex].title;
    const selectedWeaponImage = weapons[currentIndex].image;
    localStorage.setItem("selectedImage", selectedWeaponImage);
    localStorage.setItem("selectedWeapon", selectedWeapon);
    navigate("/play");
  };

  return (
    <div className="sliderContainerPlay">
      <div className="headerMiniGame">
        <div className="logoViewRange"></div>
        <div className="textSwipe">Choose your blaster then shoot the targets!</div>
      </div>

      <div className="sliderWrapper">
        <button className="arrowButton leftArrow" onClick={prevSlide}>
          <FaArrowLeft />
        </button>

        <div className="slideContent">
          <img
            src={weapons[currentIndex].image}
            alt={weapons[currentIndex].title}
            className="weaponImageMiniGame"
          />
          <div className="textContainerMiniGame">
            <div className="titleBox">
              <h2 className="titleWeaponMiniGame">{weapons[currentIndex].title}</h2>
            </div>
          </div>
        </div>

        <button className="arrowButton rightArrow" onClick={nextSlide}>
          <FaArrowRight />
        </button>
      </div>

      <div className="buttonContainer">
        <button className="navButton" onClick={() => navigate("/")}>Back</button>
        <button className="playButton" onClick={handlePlay}>Play</button>
      </div>
    </div>
  );
};

export default GAME_PLAY_PAGE1;
