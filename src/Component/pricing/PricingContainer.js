import React from 'react'
import Pricing from './Pricing';
import "./pricing.css";

function PricingContainer({ PricingData }) {
    return (
      <div className="pricing-wrappers-container">
        {PricingData?.map((data, index) => (
          <Pricing
            key={index}
            Price={data.price}
            Duration={data.duration}
            Desc={data.desc}
          />
        ))}
      </div>
    );
}

export default PricingContainer