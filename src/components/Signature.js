import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import "./Signature.css"

const Signature = ({ author }) => {
  const profile_url =
    process.env.REACT_APP_HACKERNOON_URL + "/u/" + author.handle;

  return (<div className="signature-layout">
    <div className="author-profile">
      <a href={profile_url} target="_blank" rel="noreferrer">
        <img 
        className="authorProfilePic"
        alt="Author profile" width="50" height="50" src={author.avatar} />
      </a>
      <div>
        <h3>
          <a href={profile_url} target="_blank" rel="noreferrer">{"@" + author.handle}</a>
          <small>{author.displayName}</small>
        </h3>
      </div>
    </div>
    <a className="ad" href={author.adLink}>
      <FontAwesomeIcon icon={faUserAstronaut} className="astronaut-icon"/>
      {author.adText}
    </a>
  </div>);
};
export default Signature;
