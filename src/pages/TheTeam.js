import React from "react";
import Carousel from "../Component/carousel/Carousel";
import PagesHero from "../Component/hero/PagesHero";
// import Pricing from "../Component/pricing/Pricing";
import Contact from "../Component/contact/Contact";
import PageActicle from "../Component/pagesComponent/PageActicle";
import { TheTeamData } from "../Component/assent/constant";

function TheTeam() {
  return (
    <div className="pages-container">
      <PagesHero PageTitle={"The Team"} />
      <div className="page-data-wrapper">
        <div className="page-caro-wrap">
          <Carousel />
        </div>
        <div div className="page-data-wrap">
          <h3 className="Pages-title">
            All about <span className="style-title">Avenue Care</span> team
          </h3>
          {TheTeamData?.map((data, index) => (
            <PageActicle
              key={index}
              Data={data.Data}
              Title={data.Title}
              Lists={data.Lists}
            />
          ))}

          <div className="contact-us-team-text">Contact Us</div>
        </div>
      </div>
      <Contact />
      <p>[templatera id=”32″] [templatera id=”46″] [templatera id=”154″]</p>
    </div>
  );
}

export default TheTeam;
