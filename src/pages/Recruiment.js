import React from 'react'
import Carousel from "../Component/carousel/Carousel";
import PagesHero from "../Component/hero/PagesHero";
import Pricing from "../Component/pricing/Pricing";
import Contact from "../Component/contact/Contact";
import PageActicle from "../Component/pagesComponent/PageActicle";
import { TestimonialsData } from "../Component/assent/constant";
import { PricingData } from "../Component/assent/constant";

function Recruiment() {
  return (
    <div className="pages-container">
      <PagesHero PageTitle={"Recruiment"} />
      <Carousel />
      <h3 className="Pages-title">
        See what people say about {""}
        <span className="style-title">Avenue Care</span>
      </h3>
      <PageActicle Data={TestimonialsData.firstTestimony} />
      <Carousel />
      {PricingData?.map((data, index) => (
        <Pricing
          key={index}
          Price={data.price}
          Duration={data.duration}
          Desc={data.desc}
        />
      ))}
      <Contact />
      <p>[templatera id=”32″] [templatera id=”46″] [templatera id=”154″]</p>
    </div>
  );
}

export default Recruiment