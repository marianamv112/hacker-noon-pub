import React from "react";
import "./CallToAction.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlasses } from '@fortawesome/free-solid-svg-icons'

const CallToAction = () => {
  return (
    <div className="callToAction-container">
      <a href={process.env.REACT_APP_HACKERNOON_URL + "/signup"}>
        Join Hacker Noon
        <FontAwesomeIcon icon={faGlasses} className="glasses-icon"/>
      </a>
      <p>Create your free account to unlock custom reading experience.</p>
    </div>
  );
};

export default CallToAction;
