import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h3>Contact Us</h3>

      <div className="input-container">
        <form action="" className="form">
          <input
            type="text"
            id="fullname-input"
            name="name"
            placeholder="Full Name"
          />
          <input
            type="text"
            id="number-input"
            name="name"
            placeholder="Phone Number"
          />
          <input
            type="email"
            id="address-input"
            name="name"
            placeholder="Your Address"
          />
          <textarea
            name=""
            id="text-input"
            cols="30"
            rows="10"
            placeholder="Your message"
          ></textarea>
          <p>
            (Please note that your enquiry will be processed as described in our
            Privacy Policy.)
          </p>
          <button className="contact-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
