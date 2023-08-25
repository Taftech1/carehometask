import React from "react";
import PagesHero from "../Component/hero/PagesHero";
import Contact2 from "../Component/contact/Contact2";
import MapContainer from "../Component/map/MapContainer";
import ContactLocation from "../Component/contact/ContactLocation";

function ContactUs() {
  return (
    <div className="pages-container">
      <PagesHero PageTitle={"Contact Us"} />
      <div className="contact-us-page-wrapper">
        <MapContainer />
        <h3 className="Pages-title contact-us-page-title">
          Contact your local {""}
          <span className="style-title">Avenue Care </span>
          {""} Team
        </h3>
        <p className="contact-us-page-desc">
          Please contact one of our regional offices via the below details. The
          contact numbers are supported out of office.
        </p>
        <div className="contact-location-wrapper">
          <div className="contact2-wrapper--">
            <Contact2 />
          </div>
          <div className="location-wrapper--">
            <ContactLocation />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
