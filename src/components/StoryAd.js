import React, {useState, useEffect} from "react";
import hnIcon from "../assets/images/hn-icon.png";
import "./StoryAd.css";
import SocialMediaButtons from "./SocialMediaButtons";

const StoryAd = ({ title, handle }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(1);

  const handleScroll = () => {
    // find current scroll position

    const currentScrollPos = window.pageYOffset;

    // set state based on location info (explained in more detail below)
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );
    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <div className="storyAd" visible={visible === false ? 1 : 0}>
      <div className="title">
        <a className="icon" href="/">
          <img src={hnIcon} alt="Hackernoon logo" />
        </a>
        {title} by 
        <a className="profile" href={process.env.REACT_APP_HACKERNOON_URL + "/u/" + handle}>
          @{handle}
        </a>
      </div>
      <SocialMediaButtons />
    </div>
  );
};

export default StoryAd;
