import React from "react";
import "./pricing.css";
import {logo} from "../assent/constant"

function Pricing({ Price, Duration, Desc }) {
  return (
    <div className="pricing-container">
      {/* <img src={ logo} alt="" /> */}
      <h4 className="price-tier">
        From <span className="pricing-amount">£{Price}</span> {Duration}
      </h4>
      {Desc?.map((desc, index) => {
        return (
          <p className="pricing-description" key={index}>
            {desc.Data}
          </p>
        );
      })}
    </div>
  );
}

export default Pricing;
