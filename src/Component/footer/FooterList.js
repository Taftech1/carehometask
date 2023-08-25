import React from "react";
import "./footer.css";

function FooterList({ ListInfo }) {
  return (
    <div>
      <ul className="footer-list-container">
        <li className="footer-list">{ListInfo}</li>
      </ul>
    </div>
  );
}

export default FooterList;
