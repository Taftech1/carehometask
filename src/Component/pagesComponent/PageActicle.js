import React from "react";
import ActicleList from "./ActicleList";
import ActicleQuote from "./ActicleQuote";

import "./pageacticle.css";

function PageActicle({ Title, Data, Lists, Quotes }) {
  return (
    <div className="page-acticle-container">
      {Title && <h3 className="acticle-title">{Title} </h3>}
      {Data && <p className="acticle-descriptions">{Data}</p>}
      {Lists && <ActicleList Lists={Lists} />}
      <ActicleQuote Quotes={Quotes} />
    </div>
  );
}

export default PageActicle;
