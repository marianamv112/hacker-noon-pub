import React, { useState } from "react";
import red_heart from "../assets/emojis/heart.png";
import light_emoji from "../assets/emojis/light.png";
import boat_emoji from "../assets/emojis/boat.png";
import money_emoji from "../assets/emojis/money.png";
import "./Reactions.css";

const Reactions = ({
  total,
  heartActive,
  lightActive,
  boatActive,
  moneyActive,
  heartHandle,
  lightHandle,
  moneyHandle,
  boatHandle,
}) => {
  const [heartAnimation, setHeartAnimation] = useState(0);
  const [lightAnimation, setLightAnimation] = useState(0);
  const [boatAnimation, setBoatAnimation] = useState(0);
  const [moneyAnimation, setMoneyAnimation] = useState(0);

  return (
    <div className="reactions">
      <label>{total}</label>
      <div className="emojis">
        <div className="emoji-container">
          <img
            alt="red-heart"
            src={red_heart}
            className="image-main"
            onClick={() => {
              setHeartAnimation(1);
              heartHandle();
              console.log(heartActive)
            }}
            heartactive={heartActive}
          />
          <img
            alt="red-heart"
            src={red_heart}
            className="image"
            onAnimationEnd={() => setHeartAnimation(0)}
            heartanimation={heartAnimation}
            style={{ left: -10, top: -10 }}
          />
          <img
            alt="red-heart"
            src={red_heart}
            className="image"
            onAnimationEnd={() => setHeartAnimation(0)}
            heartanimation={heartAnimation}
            style={{ left: 10, top: -10 }}
          />
          <img
            alt="red-heart"
            src={red_heart}
            className="image"
            onAnimationEnd={() => setHeartAnimation(0)}
            heartanimation={heartAnimation}
            style={{ left: -10, top: -25 }}
          />
        </div>
        <div className="emoji-container">
          <img
            alt="light"
            src={light_emoji}
            className="image-main"
            onClick={() => {
              setLightAnimation(1);
              lightHandle();
            }}
            lightactive={lightActive}
          />
          <img
            alt="light"
            src={light_emoji}
            className="image"
            onAnimationEnd={() => setLightAnimation(0)}
            lightanimation={lightAnimation}
            style={{ left: -10, top: -10 }}
          />
          <img
            alt="light"
            src={light_emoji}
            className="image"
            onAnimationEnd={() => setLightAnimation(0)}
            lightanimation={lightAnimation}
            style={{ left: 10, top: -10 }}
          />
          <img
            alt="light"
            src={light_emoji}
            className="image"
            onAnimationEnd={() => setLightAnimation(0)}
            lightanimation={lightAnimation}
            style={{ left: -10, top: -25 }}
          />
        </div>
        <div className="emoji-container">
          <img
            alt="boat"
            src={boat_emoji}
            className="image-main"
            onClick={() => {
              setBoatAnimation(1);
              boatHandle();
            }}
            boatactive={boatActive}
          />
          <img
            alt="boat"
            src={boat_emoji}
            className="image"
            onAnimationEnd={() => setBoatAnimation(0)}
            boatanimation={boatAnimation}
            style={{ left: -10, top: -10 }}
          />
          <img
            alt="boat"
            src={boat_emoji}
            className="image"
            onAnimationEnd={() => setBoatAnimation(0)}
            boatanimation={boatAnimation}
            style={{ left: 10, top: -10 }}
          />
          <img
            alt="boat"
            src={boat_emoji}
            className="image"
            onAnimationEnd={() => setBoatAnimation(0)}
            boatanimation={boatAnimation}
            style={{ left: -10, top: -25 }}
          />
        </div>
        <div className="emoji-container">
          <img
            alt="money"
            src={money_emoji}
            className="image-main"
            onClick={() => {
              setMoneyAnimation(1);
              moneyHandle();
            }}
            moneyactive={moneyActive}
          />
          <img
            alt="money"
            src={money_emoji}
            className="image"
            onAnimationEnd={() => setMoneyAnimation(0)}
            moneyanimation={moneyAnimation}
            style={{ left: -10, top: -10 }}
          />
          <img
            alt="money"
            src={money_emoji}
            className="image"
            onAnimationEnd={() => setMoneyAnimation(0)}
            moneyanimation={moneyAnimation}
            style={{ left: 10, top: -10 }}
          />
          <img
            alt="money"
            src={money_emoji}
            className="image"
            onAnimationEnd={() => setMoneyAnimation(0)}
            moneyanimation={moneyAnimation}
            style={{ left: -10, top: -25 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Reactions;
