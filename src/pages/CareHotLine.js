import React from "react";
import PagesHero from "../Component/hero/PagesHero";
import Carousel from "../Component/carousel/Carousel";
import Contact from "../Component/contact/Contact";
// import Pricing from "../Component/pricing/Pricing";
import PricingContainer from "../Component/pricing/PricingContainer";
import PageActicle from "../Component/pagesComponent/PageActicle";
import { CareHotlineData} from "../Component/assent/constant";
import { PricingData } from "../Component/assent/constant";

function CareHotLine() {
  return (
    <div className="pages-container">
      <PagesHero PageTitle={"Care Hotline"} />
      <div className="page-data-wrapper">
        <div className="page-caro-wrap">
          <Carousel />
        </div>
        <div div className="page-data-wrap">
          <h3 className="Pages-title">
            All about our {""}
            <span className="style-title">Care Hotline</span> service
          </h3>
          {CareHotlineData?.map((data, index) => {
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
    </div>
  );
}

export default CareHotLine;
