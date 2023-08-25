import React from "react";
import { ImLocation } from "react-icons/im";
import { FaLocationDot } from "react-icons/fa";

function ContactLocation() {
  return (
    <div className="Contact-location-container">
      <div className="Contact-location-wrapper">
        <ImLocation className="Contact-location-maker" />
        <div className="Contact-location-info-data">
          <strong>Perth Avenue Care Services</strong>
          <p>
            Avenue Care Services,
            <br /> Mullion House, Maidenplain Place,
            <br /> Aberuthven, Auchterarder, PH3 
            1EL <br />
            01764 663 644
          </p>
        </div>
      </div>
      <div className="Contact-location-wrapper">
        <ImLocation className="Contact-location-maker" />
        <div className="Contact-location-info-data">
          <strong>Fife Avenue Care Services</strong>
          <p>
            Avenue Care Services,
            <br /> 18a Dickson Street, Elgin Industrial Estate,
            <br /> Dunfermline, Fife, KY12 7SL
            <br /> 01383 326 401
          </p>
        </div>
      </div>
      <div className="Contact-location-wrapper">
        <ImLocation className="Contact-location-maker" />
        <div className="Contact-location-info-data">
          <strong>Edinburgh Avenue Care Services</strong>
          <p>
            Avenue Care Services,
            <br /> Thain House, 226-229 Queensferry Road,
            <br />
            Edinburgh, EH4 2BP
            <br />
            0131 516 2216
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactLocation;
