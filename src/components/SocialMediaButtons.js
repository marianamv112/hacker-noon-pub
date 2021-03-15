import React from "react";
import { TwitterShareButton, FacebookShareButton, LinkedinShareButton, MailruShareButton } from "react-share";
import twitter_icon from "../assets/social media/twitter-new.png";
import email_icon from "../assets/social media/email-new.png";
import facebook_icon from "../assets/social media/facebook-new.png";
import linkedin_icon from "../assets/social media/linkedin-new.png";
import "./SocialMediaButtons.css"

const SocialMediaButtons = () => {

  return (
      <div className="social-buttons-container">
        <TwitterShareButton url={window.location.href} className="share-button">
          <img
            className="social-media-icon"
            alt="Twitter share icon"
            src={twitter_icon}
          />
        </TwitterShareButton>
        <FacebookShareButton url={window.location.href} className="share-button">
          <img
            className="social-media-icon"
            alt="Facebook share icon"
            src={facebook_icon}
          />
        </FacebookShareButton>
        <LinkedinShareButton url={window.location.href} className="share-button">
          <img
            className="social-media-icon"
            alt="Linkedin share icon"
            src={linkedin_icon}
          />
        </LinkedinShareButton>
        <MailruShareButton url={window.location.href} className="share-button">
          <img
            className="email-icon"
            alt="Mail share icon"
            src={email_icon}
          />
        </MailruShareButton>
      </div>
  );
};

export default SocialMediaButtons;
