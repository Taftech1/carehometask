import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import "./newscard.css";

function NewsCard({News}) {
  return (
    <Link to={`/news/${News?.id}`}>
      <div className="new-card-container">
        <div className="new-image-wrapper">
          <img src={News?.image} alt="newimg" />
        </div>
        <div className="news-card-info">
          <h3 className="new-title">{News?.title}</h3>
          <span className="new-badge">{News?.date}</span>
          <p className="new-decsription">{News?.description[0]?.shortDesc}</p>
          <span className="news-read-more">
            Read More <FaChevronRight className="new-read-more-icon" />{" "}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default NewsCard;
