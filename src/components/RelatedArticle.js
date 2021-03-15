import React from "react";
import { Card } from "react-bootstrap";
import "./RelatedArticle.css";
import Tag from "./Tag";

const RelatedArticle = ({ story }) => {
  const formatDate = (utcDate) => {
    const milliseconds = utcDate * 1000;
    const dateTime = new Date(milliseconds);
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
    }).format(dateTime);

    return formattedDate;
  };

  return (
    <Card className="relatedArticle">
      {story.title ? (
        <>
          <Card.Header className="card-header">
            <Card.Title>
              <h2>
                <a href={process.env.REACT_APP_HACKERNOON_URL + "/" + story.slug}>
                  {story.title}
                </a>
              </h2>
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="card-reactions">
              {story.reactionsCount + " reactions"}
            </div>
            <div className="card-image-wrapper">
              <a href={process.env.REACT_APP_HACKERNOON_URL + "/" + story.slug} style={{ padding: 0 }}>
                <img alt="story" className="related-article-image" src={story.mainImage} />
              </a>
              <div className="tag-container">
                <Tag tag={story.tags[0]} />
              </div>
            </div>
          </Card.Body>
          <Card.Footer>
            <div className="profile">
              <a href={"profile_url"} target="_blank" rel="noreferrer">
                <img
                  className="authorProfilePic"
                  alt="Author profile"
                  src={story.profile.avatar}
                  width="50"
                  height="50"
                  loading="lazy"
                />
              </a>
              <h3 className="authorHeader">
                <a href={"profile_url"} target="_blank" className="authorLink" rel="noreferrer">
                  {"@" + story.profile.handle}
                </a>
                <small>{story.profile.displayName}</small>
              </h3>
            </div>
            <div className="time">
              {story.estimatedTime && <p>{story.estimatedTime + "min"}</p>}
              <p>{formatDate(story.publishedAt)}</p>
            </div>
          </Card.Footer>
        </>
      ) : (
        <>
          <Card.Header className="card-header">
            <Card.Title>
              <h2>
                <a href={story.website}>
                  {story.text}
                </a>
              </h2>
            </Card.Title>
          </Card.Header>
          <Card.Body>
            {story.reactionsCount > 0 && (
              <div>{story.reactionsCount + " reactions"}</div>
            )}
            <div className="card-image-wrapper">
              <a href={story.website} style={{ padding: 0 }}>
                <img alt="card" className="card-image" src={story.image} />
              </a>
            </div>
          </Card.Body>
        </>
      )}
    </Card>
  );
};

export default RelatedArticle;
