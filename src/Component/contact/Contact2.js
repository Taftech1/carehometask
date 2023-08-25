import React from 'react'
import "./contact.css"

function Contact2() {
  return (
    <div className="input-container-2">
      <form action="" className="form-2">
        <input
          type="text"
          id="contact2-name"
          name="name"
          placeholder="Your Name"
        />
        <input
          type="text"
          id="contact2-number"
          name="name"
          placeholder="Your Number"
        />
        <input
          type="email"
          id="contact2-email"
          name="name"
          placeholder="Your Email"
        />
        <textarea
          name=""
          id="contact2-message"
          cols="30"
          rows="10"
          placeholder="Your Message"
        ></textarea>

        <button className="contact-btn">Submit</button>
        <p className="policy-term-p">
          (Please note that your enquiry will be processed as described in our
          <span className="privacy-policy-text">Privacy Policy.</span>)
        </p>
      </form>
    </div>
  );
}

export default Contact2