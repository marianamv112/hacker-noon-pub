import React, { useState } from "react";
import red_heart from "../assets/emojis/heart.png";
import light_emoji from "../assets/emojis/light.png";
import boat_emoji from "../assets/emojis/boat.png";
import money_emoji from "../assets/emojis/money.png";
import "./Paragraph.css";

const Paragraph = ({ item }) => {
  const [heartActive, activateHeart] = useState(0);
  const [lightActive, activateLight] = useState(0);
  const [boatActive, activateBoat] = useState(0);
  const [moneyActive, activateMoney] = useState(0);
  const [isShown, setIsShown] = useState(0);

  const heartHandle = () => {
    if (heartActive === 0) {
      activateHeart(1);
    } else {
      activateHeart(0);
    }
  };

  const lightHandle = () => {
    if (lightActive === 0) {
      activateLight(1);
    } else {
      activateLight(0);
    }
  };

  const moneyHandle = () => {
    if (moneyActive === 0) {
      activateMoney(1);
    } else {
      activateMoney(0);
    }
  };

  const boatHandle = () => {
    if (boatActive === 0) {
      activateBoat(1);
    } else {
      activateBoat(0);
    }
  };

  return (
    <div className="post-row">
      {/* <div className="side-cell"></div> */}
      <div
        className="center-cell"
        onMouseEnter={() => {
          setIsShown(1);
        }}
        onMouseLeave={() => {
          setIsShown(0);
        }}
      >
        {item}
      </div>
      <div
        className="paragraph-reactions-container"
        onMouseEnter={() => {
          setIsShown(1);
        }}
        onMouseLeave={() => {
          setIsShown(0);
        }}
      >
        <div className="bars">
          <div className="bar"></div>
        </div>
        <div className="actions"></div>
        <div className="emojis" isshown={isShown}>
          <div className="reactions-container">
            <span className="reaction-count" heartactive={heartActive}>
              1
            </span>
            <img
              alt="red-heart-emoji"
              src={red_heart}
              className="image-main"
              onClick={() => {
                heartHandle();
              }}
              heartactive={heartActive}
            />
          </div>
          <div className="reactions-container">
            <span className="reaction-count" lightactive={lightActive}>
              1
            </span>
            <img
              alt="light-emoji"
              src={light_emoji}
              className="image-main"
              onClick={() => {
                lightHandle();
              }}
              lightactive={lightActive}
            />
          </div>
          <div className="reactions-container">
            <span className="reaction-count" boatactive={boatActive}>
              1
            </span>
            <img
              alt="boat-emoji"
              src={boat_emoji}
              className="image-main"
              onClick={() => {
                boatHandle();
              }}
              boatactive={boatActive}
            />
          </div>
          <div className="reactions-container">
            <span className="reaction-count" moneyactive={moneyActive}>
              1
            </span>
            <img
              alt=""
              src={money_emoji}
              className="image-main"
              onClick={() => {
                moneyHandle();
              }}
              moneyactive={moneyActive}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paragraph;
