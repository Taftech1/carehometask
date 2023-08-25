import React from "react";
import Carousel from "../Component/carousel/Carousel";
import PagesHero from "../Component/hero/PagesHero";
import PricingContainer from "../Component/pricing/PricingContainer";
import Pricing from "../Component/pricing/Pricing";
import Contact from "../Component/contact/Contact";
import PageActicle from "../Component/pagesComponent/PageActicle";
import { AboutData } from "../Component/assent/constant";
import { PricingData } from "../Component/assent/constant";

function AboutUs() {
  return (
    <div className="pages-container">
      <PagesHero PageTitle={"About Us"} />
      <div className="page-data-wrapper">
        <div className="page-caro-wrap">
          <Carousel />
        </div>
        <div div className="page-data-wrap">
          <h3 className="Pages-title">
            All about <span className="style-title">Avenue Care</span> services
          </h3>
          {AboutData?.map((data, index) => {
            return (
              <PageActicle
                key={index}
                Title={data.Title}
                Data={data?.Data}
                Lists={data.Lists}
              />
            );
          })}
        </div>
      </div>
      <PricingContainer PricingData={PricingData} />
      <Contact />
      <p className="templatera">[templatera id=”32″]</p>
      <p className="templatera">[templatera id=”46″] </p>
      <p className="templatera">[templatera id=”154″]</p>
    </div>
  );
}

export default AboutUs;
