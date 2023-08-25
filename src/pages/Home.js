import React from "react";
import Hero from "../Component/hero/Hero";
import NewsCard from "../Component/news/NewsCard";
import { Newsdata } from "../Component/assent/newsData";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <Hero />
      <div className="welcome-section">
        <h3>Welcome to Avenue Care Services</h3>
        <p>
          Our Care service offers you support in your own home by providing
          personal care and practical domestic help in a way which fits with
          your assessed individual needs and routines and those of your carers.
        </p>
      </div>
      <div className="home-news-section">
        <h3>News</h3>
        <div className="news-wrapper-col-row">
          {Newsdata.slice(0, 3).map((news) => {
            return <NewsCard key={news.id} News={news} />;
          })}
        </div>
        <Link to={"/news"}>
          <button className="view-all-btn">VIEW ALL NEWS</button>
        </Link>
      </div>
      <div
        style={{
          padding: "50px",
          backgroundColor: "white",
          opacity: "0.6"
        }}
      >
        <p>[templatera id=”46″]</p>
        <p>[templatera id=”46″]</p>
      </div>
    </div>
  );
}

export default Home;
