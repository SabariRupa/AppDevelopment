import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <p>If you have any questions or need assistance, please don't hesitate to reach out to us.</p>
      <div className="contact-form">
        <div className="input-group">
          <label className="label" htmlFor="name">Your Name:</label>
          <input className="input" type="text" id="name" name="name" placeholder="Your Name" />
        </div>
        <div className="input-group">
          <label className="label" htmlFor="email">Email Address:</label>
          <input className="input" type="email" id="email" name="email" placeholder="Your Email" />
        </div>
        <div className="input-group">
          <label className="label" htmlFor="message">Message:</label>
          <textarea className="input" id="message" name="message" rows="5" placeholder="Your Message"></textarea>
        </div>
        <button className="button">Submit</button>
      </div>
    </div>
  );
}

export default ContactUs;
