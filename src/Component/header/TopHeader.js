import React from "react";
import { FaEnvelope, FaFacebookF } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./header.css";

function TopHeader() {
  return (
    <div className="top-header-container">
        <span className="top-header-mail-container">
          <FaEnvelope className="top-header-mail-icon" />
          <Link to={"mailto:enquiries@avenuecareservices.co.uk"}>
            enquiries@avenuecareservices.co.uk
          </Link>
        </span>
        <span className="top-header-social-icon">
          <FaFacebookF />
        </span>
        <span className="top-header-social-icon">
          <RiLinkedinFill />
        </span>
        <span className="top-header-text-size">
          TextSize <span className="top-header-text-reducer">A</span>{" "}
          <span className="top-header-text-reset">A</span>{" "}
          <span className="top-header-increaser">A</span>
        </span>
   
    </div>
  );
}

export default TopHeader;
