import React from "react";
import particle from "../assets/images/img-8i133ho.png"
import "./TopAd.css"

const TopAd = () => {
  return (
    <div className="topAd-container">
      <a href="https://bit.ly/2PPkdME" target="_blank" rel="noreferrer">
        <img
          src={particle}
          alt="Particle ad"
        />
        Join 3500 Developers at Spectra March 17th
      </a>
    </div>
  );
};

export default TopAd;
