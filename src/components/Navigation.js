import React from "react";
import "./Navigation.css";
import hnLogo from "../assets/images/hn-logo.png";
import { Form, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import TopAd from "./TopAd";

const Navigation = () => {
  return (
    <div>
      <div className="mainNav">
        <div className="brand">
          <img
            src={hnLogo}
            alt="hn logo"
            width="248"
            height="40"
            loading="lazy"
          />
        </div>
        <div className="right-content">
          <Form inline className="search-container" className="search-container">
            <FormControl type="text" placeholder="Search..." />
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </Form>
          <div className="buttons-container">
            <Button className="writing-button">Start Writing</Button>
            <a href="/" className="log-in-option">Log in</a>
          </div>
        </div>
      </div>
      <div className="secondaryNav">
        <ul>
          <li>
            <a href="/">
              <strong style={{color: "rgb(0, 255, 0)"}}>Read</strong>
            </a>
          </li>
          <li>
            <a href="/">
              <strong>Top Stories</strong>
            </a>
          </li>
          <li>
            <a href="/">
              <strong>Write</strong>
            </a>
          </li>
          <li>
            <a href="/">
              <strong>Listen</strong>
            </a>
          </li>
          <li>
            <a href="/">
              <strong style={{color: "rgb(0, 255, 0)"}}>Learn</strong>
            </a>
          </li>
          <li>
            <a href="/">
              <strong>Advertise</strong>
            </a>
          </li>
          <li>
            <a href="/">
              <strong style={{color: "rgb(0, 255, 0)"}}>About</strong>
            </a>
          </li>
          <li>
            <a href="/">
              <strong style={{color: "rgb(0, 255, 0)"}}>Tech Companies</strong>
            </a>
          </li>
          <li>
            <a href="/">
              <strong>Careers</strong>
            </a>
          </li>
          <li>
            <a href="/">
              <strong>Slogging</strong>
            </a>
          </li>
        </ul>
      </div>
      <TopAd />
    </div>
  );
};

export default Navigation;
