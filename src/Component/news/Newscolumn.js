import React from "react";
import { logo } from "../assent/constant";
import { Link } from "react-router-dom";
import "./newscard.css";

function Newscolumn({ News }) {

  return (
    <Link to={`/news/${News?.id}`}>
      <div className="new-card-container news-column-container">
        <div className="new-image-wrapper news-image-colum-wrapper">
          <img src={News?.image} alt="newimg" />
        </div>
        <div className="news-card-info news-column-info">
          <h4 className="news-page--">News</h4>
          <h3 className="news-column-title">{News?.title}</h3>
          <p className="new-decsription">{News?.description[0]?.shortDesc}</p>
          <div className="author-profile">
            <img src={logo} alt="author-pic" />
            <div className="author-name-info">
              <span>{News?.author}</span>
              <span>{News?.date}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Newscolumn;
