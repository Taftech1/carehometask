import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import "./newscard.css";


function LatestNews({ News }) {
  return (
    <div className="latest-news-container">
      <Link to={`/news/${News.id}`}>
        <h3 className="latest-news-title">{News?.title}</h3>
      </Link>
      <p className="latest-news-desc">{News?.description[0]?.shortDesc}</p>
      <div className="latest-news-date-read-more-wrapper">
        <span className="latest-news-date-stamp">{News?.date}</span>
        {News && (
          <Link to={`/news/${News.id}`}>
            <span className="news-read-more latest-news-read-more">
              Read More <FaChevronRight className="new-read-more-icon" />
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}

export default LatestNews;
