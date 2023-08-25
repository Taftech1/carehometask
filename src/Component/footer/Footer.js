import React from "react";
import FooterList from "./FooterList";
import Social from "./Social";
import { FooterInfoList } from "../assent/constant";
import "./footer.css";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-wrapper">
        <h2>{FooterInfoList[0].Title}</h2>
        {FooterInfoList[0].Data.map((List, index) => {
          return <FooterList key={index} ListInfo={List.title} />;
        })}
      </div>
      <div className="footer-wrapper">
        <h2>{FooterInfoList[1].Title}</h2>
        {FooterInfoList[1].Data.map((List, index) => {
          return (
            <FooterList key={index} ListInfo={List.title} Social={<Social />} />
          );
        })}
        <Social />
      </div>
      <div className="footer-wrapper">
        <h2>{FooterInfoList[2].Title}</h2>
        {FooterInfoList[2].Data.map((List, index) => {
          return <FooterList key={index} ListInfo={List.title} />;
        })}
      </div>
    </footer>
  );
}

export default Footer;
