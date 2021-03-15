import React from "react";
import "./Footer.css";
import linkedInIcon from "../assets/social media/linkedin-new.png";
import facebookIcon from "../assets/social media/facebook-new.png";
import twitterIcon from "../assets/social media/twitter-new.png";
import gitHubIcon from "../assets/social media/github-new.png";
import youTubeIcon from "../assets/social media/youtube-new.png";
import instagramIcon from "../assets/social media/instagram-new.png";
import podcastIcon from "../assets/social media/podcast-new.png";
import rssIcon from "../assets/social media/rss-new.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-link">
        <ul>
          <li>
            <a href="/">
              <strong>Help</strong>
            </a>
          </li>
          <li>
            <a href="/">
              <strong>About</strong>
            </a>
          </li>
          <li>
            <a href="/">
              <strong>Start Writing</strong>
            </a>
          </li>
          <li>
            <a href="/">
              <strong>Sponsor:</strong>
            </a>
          </li>
          <li>
            <a href="/">Brand-as-Author</a>
          </li>
          <li>
            <a href="/">SiteWide Billboard</a>
          </li>
          <li>
            <a href="/">Ad by tag</a>
          </li>
          <li>
            <a href="/">Newsletter</a>
          </li>
          <li>
            <a href="/">Noonies</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">Contact Us</a>
          </li>
          <li>
            <a href="/">Terms</a>
          </li>
          <li>
            <a href="/">Privacy</a>
          </li>
          <li>
            <a href="/">Cookies</a>
          </li>
          <li>
            <a href="/">Stories published yesterday</a>
          </li>
          <li>
            <a href="/">Leaderboard</a>
          </li>
          <li>
            <a href="/">Contributors' Club</a>
          </li>
          <li>
            <a href="/">Chrome Extension</a>
          </li>
        </ul>
      </div>
      <div className="footer-buttons">
        <a href={"https://www.linkedin.com/company/hackernoon/"}>
          <img alt="linkedIn-icon" src={linkedInIcon} />
        </a>
        <a href={"https://www.facebook.com/hackernoon"}
        ><img alt="facebook-icon" src={facebookIcon} /></a>
        <a href={"https://twitter.com/hackernoon"}><img alt="twitter-icon" src={twitterIcon} /></a>
        <a href={"https://github.com/hackernoon"}><img alt="gitHub-icon" src={gitHubIcon} /></a>
        <a href={"https://www.youtube.com/channel/UChu5YILgrOYOfkfRlTB-D-g"}><img alt="youTube-icon" src={youTubeIcon} /></a>
        <a href={"https://www.instagram.com/hackernoon/"}><img alt="instagram-icon" src={instagramIcon} /></a>
        <a href={"https://podcast.hackernoon.com/"}><img alt="podcast-icon" src={podcastIcon} /></a>
        <a href={"https://hackernoon.com/feed"}><img alt="rss-icon" src={rssIcon} /></a>
      </div>
    </div>
  );
};

export default Footer;
