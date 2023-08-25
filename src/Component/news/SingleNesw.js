import React from "react";
import { Link } from "react-router-dom";
import { BiPencil } from "react-icons/bi";
import { BsClockFill, BsFillTagFill } from "react-icons/bs";
import { FaComments } from "react-icons/fa";
import PagesHero from "../hero/PagesHero";
import { Newsdata } from "../assent/newsData";
import { useParams } from "react-router-dom";
import PageActicle from "../pagesComponent/PageActicle";
import LatestNews from "../news/LatestNews";
import Category from "./Category";
import "./newscard.css";

function SingleNews() {
  const PostId = useParams();
  const { newsId } = PostId;
  const NewsPost = Newsdata?.find((Post) => Post.id === parseInt(newsId));
  console.log(PostId);
  return (
    <div className="single-news-container">
      <PagesHero PageTitle={NewsPost?.title} />

      <div className="single-news-post-area-container">
        <div className="single-news-wrapper-col-row">
          <div className="single-news-wrapper">
            <img src={NewsPost?.image} alt="" />
            <h3 className="single-news-title--">{NewsPost?.title}</h3>
            <div className="single-news-info">
              <div>
                <BiPencil className="single-news-icons" />
                <h3>{NewsPost?.author}</h3>
              </div>

              <div>
                <BsClockFill className="single-news-icons" />
                <h3>{NewsPost?.date}</h3>
              </div>

              <div>
                <BsFillTagFill className="single-news-icons" />
                <h3>{NewsPost?.category}</h3>
              </div>

              <div>
                <FaComments className="single-news-icons" />
                <h3>{NewsPost?.comments}</h3>
              </div>
            </div>
          </div>

          {NewsPost.description?.map((desc, index) => {
            return (
              <PageActicle
                key={index}
                Title={desc?.shortDesc}
                Data={desc?.Data}
                Quotes={desc?.Quote}
                Lists={desc?.Lists}
              />
            );
          })}

          <Link to={"/news"} className="view-all-btn-container">
            <button className="view-all-btn">VIEW ALL NEWS</button>
          </Link>
        </div>

        <div className="single-news-sidebar-widget">
          <div className="single-news-latest-news-wrapper">
            <h3 className="lastest-news-header-title">Latest News</h3>
            {Newsdata?.map((news) => {
              return <LatestNews News={news} key={news.id} />;
            })}
            <Category />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleNews;
