import React, { useEffect, useState } from "react";
import postInfo from "../assets/step-by-step-guide-to-create-3-different-types-of-loading-screens-in-react-lu2633nd.json";
import parse from "html-react-parser";
import "./Post.css";
import AuthorBox from "./AuthorBox";
import Paragraph from "./Paragraph";
import Tag from "./Tag";
import Break from "./Break";
import RelatedArticle from "./RelatedArticle";
import CallToAction from "./CallToAction";
import Gist from "react-gist";
import Reactions from "./Reactions";
import ShareStory from "./ShareStory";
import Signature from "./Signature";
import ReactSpinner from 'react-bootstrap-spinner'
import StoryAd from "./StoryAd";


const Post = () => {
  const [postData, setPostData] = useState("");

  const [heartActive, activateHeart] = useState(0);
  const [lightActive, activateLight] = useState(0);
  const [boatActive, activateBoat] = useState(0);
  const [moneyActive, activateMoney] = useState(0);

  const [fullscreenMode, setFullscreenMode] = useState(false);

  const [totalReactions, setTotalReactions] = useState(0);

  

  useEffect(() => { 
    setPostData(postInfo);
    setTotalReactions(postInfo.reactions.total);
  }, []);

  const heartHandle = () => {
    if (heartActive === 0) {
      activateHeart(1);
      setTotalReactions(totalReactions + 1);
    } else {
      activateHeart(0);
      setTotalReactions(totalReactions - 1);
    }
  };

  const lightHandle = () => {
    if (lightActive === 0) {
      activateLight(1);
      setTotalReactions(totalReactions + 1);
    } else {
      activateLight(0);
      setTotalReactions(totalReactions - 1);
    }
  };

  const moneyHandle = () => {
    if (moneyActive === 0) {
      activateMoney(1);
      setTotalReactions(totalReactions + 1);
    } else {
      activateMoney(0);
      setTotalReactions(totalReactions - 1);
    }
  };

  const boatHandle = () => {
    if (boatActive === 0) {
      activateBoat(1);
      setTotalReactions(totalReactions + 1);
    } else {
      activateBoat(0);
      setTotalReactions(totalReactions - 1);
    }
  };

  const formatDate = () => {
    const milliseconds = postData.publishedAt * 1000;
    const dateTime = new Date(milliseconds);
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }).formatToParts(dateTime);

    const dateString = formattedDate
      .map(({ type, value }) => {
        if (type === "day") {
          if (value > 3 && value < 21) return value + "th";
          switch (value % 10) {
            case 1:
              return value + "st";
            case 2:
              return value + "nd";
            case 3:
              return value + "rd";
            default:
              return value + "th";
          }
        } else {
          return value;
        }
      })
      .join("")
      .replace(",", "");

    return dateString;
  };

  const openFullscreen = (elem) => {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE11 */
      elem.msRequestFullscreen();
    }
    setFullscreenMode(true);
  };

  const closeFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE11 */
      document.msExitFullscreen();
    }
    setFullscreenMode(false);
  };





  return (
    postData ? (
      <>
        <StoryAd  title={postData.title} handle={postData.profile.handle}/>
        <div className="main-container">
          <h1>{postData.title}</h1>
          <div className="post-meta">
            <div>
              <a className="date" href="\">
                {postData && formatDate()}
              </a>
            </div>
            <Reactions
              total={totalReactions}
              setTotal={setTotalReactions}
              heartActive={heartActive}
              activateHeart={activateHeart}
              lightActive={lightActive}
              activateLight={activateLight}
              boatActive={boatActive}
              activateBoat={activateBoat}
              moneyActive={moneyActive}
              activateMoney={activateMoney}
              heartHandle={heartHandle}
              lightHandle={lightHandle}
              moneyHandle={moneyHandle}
              boatHandle={boatHandle}
            />
          </div>
          <div className="main-image-container">
            <img
              alt="post-main"
              src={postData.mainImage}
              onClick={(e) =>
                fullscreenMode
                  ? closeFullscreen(e.target)
                  : openFullscreen(e.target)
              }
            />
          </div>
          <div className="post-content-container">
            <AuthorBox author={postData.profile} />
            <div className="post-text-container">
              {parse(postData.markup).map((item, key) => {
                if (item.props.className === "paragraph") {
                  return <Paragraph item={item} key={key} />;
                } else if (item.type === "h2") {
                  return (
                    <div className="post-row" key={key}>
                      <div className="center-cell">{item}</div>
                    </div>
                  );
                } else if (item.props.className === "gist-container") {
                  const gistId = item.props.children.props.id.replace(
                    /gist-/g,
                    ""
                  );
                  return (
                    <div className="post-row" key={key}>
                      <Gist heigth={500} id={gistId} />;
                    </div>
                  );
                } else {
                  return (
                    <div className="general-item-container" key={key}>
                      <div className="generalItem">{item}</div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div className="reactions-container">
            <Reactions
              total={totalReactions}
              setTotal={setTotalReactions}
              heartActive={heartActive}
              activateHeart={activateHeart}
              lightActive={lightActive}
              activateLight={activateLight}
              boatActive={boatActive}
              activateBoat={activateBoat}
              moneyActive={moneyActive}
              activateMoney={activateMoney}
              heartHandle={heartHandle}
              lightHandle={lightHandle}
              moneyHandle={moneyHandle}
              boatHandle={boatHandle}
            />
          </div>

          <div className="share-story-container">
            <ShareStory />
          </div>

          <Signature author={postData.profile} />
          <section>
            <Break title={"Related"} />
            <div className="related-articles">
              {postData.relatedStories.map((story, key) => (
                <RelatedArticle story={story} key={key}/>
              ))}
            </div>
          </section>

          <section className="tags-container">
            <div>
              <Break title={"Tags"} />
            </div>
            <div className="tags">
              {postData.tags.map((tag, key) => (
                <Tag tag={tag} key={key}/>
              ))}
            </div>
          </section>
          <section>
            <CallToAction />
          </section>
        </div>
      </>
    )
    :
    <ReactSpinner type="border" color="primary" size="5" />
  );
};

export default Post;
