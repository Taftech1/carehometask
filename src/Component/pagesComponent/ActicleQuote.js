import React from "react";
import "./pageacticle.css"

function ActicleQuote({ Quotes }) {
console.log(Quotes);
  return (
    <div className="acticle-quote-container">
      {Quotes?.map((singleQoute,index) => {
        return <p key={index}>{singleQoute.Text}</p>;
     })}
  
    </div>
  );
}

export default ActicleQuote;
