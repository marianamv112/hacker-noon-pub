import React from "react";
import { Card } from "react-bootstrap";
import "./AuthorBox.css";
import twitterIcon from "../assets/social media/twitter-new.png";
import gitHubIcon from "../assets/social media/github-new.png";

const AuthorBox = ({ author }) => {
  const profile_url =
    process.env.REACT_APP_HACKERNOON_URL + "/u/" + author.handle;

  return (
      <Card >
      <Card.Body className="cardBody">
        <a href={profile_url} target="_blank" rel="noreferrer">
          <img
            className="authorProfilePic"
            alt="Author"
            src={author.avatar}
            width="50"
            height="50"
            loading="lazy"
          />
        </a>
        <h3 className="authorHeader">
          <a href={profile_url} target="_blank" rel="noreferrer" className="authorLink">
            {"@" + author.handle}
          </a>
          <small>{author.displayName}</small>
        </h3>
        <Card.Text className="authorBio">{author.bio}</Card.Text>
        <Card.Link
          href={"https://twitter.com/" + author.twitter}
          target="_blank" rel="noreferrer"
        >
          <img
            src={twitterIcon}
            alt="Twitter social icon"
            width="20"
            height="20"
            loading="lazy"
          />
        </Card.Link>
        <Card.Link href={"https://github.com/" + author.github}>
          <img
            src={gitHubIcon}
            alt="github social icon"
            width="20"
            height="20"
            loading="lazy"
          />
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default AuthorBox;
