import React from "react";
import PagesHero from "../Component/hero/PagesHero";
import Carousel from "../Component/carousel/Carousel";
import Contact from "../Component/contact/Contact";
import PageActicle from "../Component/pagesComponent/PageActicle";
// import Pricing from "../Component/pricing/Pricing";
import PricingContainer from "../Component/pricing/PricingContainer";
import { PrivateCareData } from "../Component/assent/constant";
import { PricingData } from "../Component/assent/constant";

function DirectPayment() {
  return (
    <div className="pages-container">
      <PagesHero PageTitle={"Direct Payments"} />
      <div className="page-data-wrapper">
        <div className="page-caro-wrap">
          <Carousel />
        </div>
        <div div className="page-data-wrap">
          <h3 className="Pages-title">
            All about our {""}
            <span className="style-title">Direct Payments</span>
            {""} service
          </h3>
          {PrivateCareData?.map((data, index) => {
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

export default DirectPayment;
