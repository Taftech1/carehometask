import React from "react";
import PagesHero from "../Component/hero/PagesHero";
import { Newsdata } from "../Component/assent/newsData";
import Newscolumn from "../Component/news/Newscolumn";
import LatestNews from "../Component/news/LatestNews";
import Category from "../Component/news/Category";

function News() {
  return (
    <div className="pages-container news-page-bg">
      <PagesHero PageTitle={"News"} />
      <div
        style={{
          padding: "0 30px",
        }}
      >
        <div className="news-post-area-container">
          <div className="news-wrapper-col-row">
            {Newsdata?.map((news, index) => {
              return <Newscolumn key={index} News={news} />;
            })}
          </div>

          <div className="news-page-sidebar">
            <h3 className="latest-news-title-h3">Latest News</h3>
            {Newsdata?.map((news, index) => {
              return <LatestNews News={news} key={index} />;
            })}
            <Category />
          </div>
        </div>
      </div>
      <p className="templatera">[templatera id=”32″]</p>
      <p className="templatera">[templatera id=”46″] </p>
      <br />
    </div>
  );
}

export default News;
