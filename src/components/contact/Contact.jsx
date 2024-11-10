import React from "react";
import "./contact.css";
import withFadeInAnimation from "../../hooks/withFadeInAnimation";
import "../../hooks/fadeinanimation.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="details">
          <div className="con-container">
            <div className="con-left-container">
              <p>Contact Us,</p>
              <p>Get in Touch 👋</p>
            </div>
            <div className="con-right-container">
              <p style={{ color: "#ffde91" }}>9159757660</p>
            </div>
          </div>
          <h3 className="email-contact-text" style={{ color: "#ffde91" }}>
            kpdvillagedevelopmenttrust@gmail.com
          </h3>
          <form>
            <div className="name-field">
              <div className="first-name">
                <label htmlFor="name">First Name</label>
                <input type="text" placeholder="First Name" />
              </div>
              <div className="last-name">
                <label htmlFor="name">Last Name</label>
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
            <div className="email-field">
              <div className="email-container">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Email Address" />
              </div>
            </div>
            <div className="phone-field">
              <div className="phone-container">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" placeholder="Phone Number" />
              </div>
            </div>
            <div className="message-field">
              <div className="message-container">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="contact-message"
                  rows="6"
                  cols="50"
                  placeholder="Tell Us More!"
                ></textarea>
              </div>
            </div>
          </form>
          <button type="button" className="send-button">
            Send Message
          </button>
        </div>
        <div className="contact-map">
          <iframe
            title="village-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31145.970924280708!2d79.69877749280228!3d12.631836286974247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52dff28f4bfb21%3A0x7a8d84a5e9e60a84!2sKaliyampoondi%2C%20Tamil%20Nadu%20603402!5e0!3m2!1sen!2sin!4v1722097881723!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default withFadeInAnimation(Contact);
