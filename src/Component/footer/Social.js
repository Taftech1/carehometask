import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";

function Social() {
  return (
    <div className="socia-icons-cl">
      <span className="social-icon">
        <FaTwitter />
      </span>
      <span className="social-icon">
        <FaFacebookF />
      </span>
      <span className="social-icon">
        <RiLinkedinFill />
      </span>
    </div>
  );
}

export default Social;
