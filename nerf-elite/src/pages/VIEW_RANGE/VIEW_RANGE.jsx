  import React, { useState } from "react";
  import "./style.css";
  import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

  const weapons = [
    {
      id: 1,
      image: "assets/weapon/first.png",
      title: "ELITE 2.0 ECHO",
      overview: "Elite 2.0 Echo has removable stock and barrel, with 4 configurations in one. Fire 1 dart at a time or 10 darts rapidly. Comes with 24 Nerf Elite darts.",
    },
    {
      id: 2,
      image: "assets/weapon/NERF_Elite20_Volt.png",
      title: "ELITE 2.0 VOLT",
      overview: "Elite 2.0 Volt is equipped with 2 tactical rails and light beam targeting, reaching up to 15 feet. Includes 6 Official Nerf darts and fires darts up to 90 feet.",
    },
    {
      id: 3,
      image: "assets/weapon/NERF_Elite20_Shockwave.png",
      title: "Elite 2.0 SHOCKWAVE",
      overview: "Elite 2.0 Shockwave comes with 30 Official Nerf darts to fully load the 15-dart rotating drum. Unleash 1 dart, or slam-fire all 15 darts at once. Fires up to 90 feet.",
    },
    {
      id: 4,
      image: "assets/weapon/NERF_Elite20_Commander.png",
      title: "Elite 2.0 Commander",
      overview: "Elite 2.0 Commander has a 6-dart rotating drum, 3 tactical rails and 2 stock attachments. Fire 1 dart or launch all 6 darts, with slam-fire action. Comes with 6 Elite darts.",
    },
  ];

  const VIEW_RANGE = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? weapons.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === weapons.length - 1 ? 0 : prevIndex + 1));
    };

    return (
      <div className="sliderContainer">
        <div className="headerViewRange">
          <div className="logoViewRange"></div>
          <div className="textSwipe">Swipe left and right to view the range!</div>
        </div>

        <div className="sliderWrapper">
          <button className="arrowButton leftArrow" onClick={prevSlide}>
            <FaArrowLeft />
          </button>

          <div className="slideContent">
            <img src={weapons[currentIndex].image} alt={weapons[currentIndex].title} className="weaponImage" />
            <div className="textContainer">
              <h2 className="titleWeapon">{weapons[currentIndex].title}</h2>
              <p className="overviewWeapon">{weapons[currentIndex].overview}</p>
            </div>
          </div>

          <button className="arrowButton rightArrow" onClick={nextSlide}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    );
  };

  export default VIEW_RANGE;
