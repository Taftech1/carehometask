import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./hero.css";

function PagesHero({ PageTitle }) {
  const location = useLocation();
  const path = location.pathname.includes("care-services")
    ? "Care Services |"
    : "";
  return (
    <div className="page-hero-conatainer">
      <h3>{PageTitle === "News" ? "Latest News" : PageTitle}</h3>
      <span className="pagelinks">
        <Link to="/">Home </Link>| {path} {PageTitle}
      </span>
    </div>
  );
}

export default PagesHero;
