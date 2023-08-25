import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { CategoryData } from "../assent/constant";
import "./newscard.css";

function Category() {
    const NewsIconStyle = {
      marginBottom: "70px",
      color: "rgba(36, 36, 36, 0.911)",
      fontSize: "14px",
    };
  return (
    <div className="Category-container">
      <h3 className="category-text">Categories</h3>
      <span className="news-read-more" style={NewsIconStyle}>
        <FaChevronRight
          className="new-read-more-icon"
          style={{
            marginRight: "10px",
          }}
        />
        News
      </span>

      {CategoryData?.map((category, index) => {
        return (
          <div className="category-column" key={index}>
            <img src={category.image} alt={category.title} />
            <p className="category-title">{category.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Category;
