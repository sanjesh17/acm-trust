import React, { useState } from "react";
import withFadeInAnimation from "../../hooks/withFadeInAnimation";
import "../../hooks/fadeinanimation.css";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="details">
          <div className="con-container">
            <div className="con-left-container">
              <p className="details-text">Contact Us,</p>
              <p className="details-subtext">Get in Touch 👋</p>
            </div>
            <div className="con-right-container">
              <p className="phone-number">9159757660</p>
            </div>
          </div>
          <h3 className="email-contact-text">
            kpdvillagedevelopmenttrust@gmail.com
          </h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="name-field">
              <div className="first-name">
                <label className="contact-label" htmlFor="firstName">First Name</label>
                <input
                  className="contact-input"
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                />
              </div>
              <div className="last-name">
                <label className="contact-label" htmlFor="lastName">Last Name</label>
                <input
                  className="contact-input"
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                />
              </div>
            </div>
            <div className="email-field">
              <div className="email-container">
                <label className="contact-label" htmlFor="email">Email</label>
                <input
                  className="contact-input"
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>
            <div className="phone-field">
              <div className="phone-container">
                <label className="contact-label" htmlFor="phone">Phone Number</label>
                <input
                  className="contact-input"
                  type="tel"
                  id="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>
            <div className="message-field">
              <div className="message-container">
                <label className="contact-label" htmlFor="message">Message</label>
                <textarea
                  className="contact-textarea"
                  id="message"
                  rows="6"
                  placeholder="Tell Us More!"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
            </div>
            <button type="submit" className="send-button">
              Send Message
            </button>
          </form>
        </div>
        <div className="contact-map">
          <iframe
            className="map-iframe"
            title="village-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31145.970924280708!2d79.69877749280228!3d12.631836286974247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52dff28f4bfb21%3A0x7a8d84a5e9e60a84!2sKaliyampoondi%2C%20Tamil%20Nadu%20603402!5e0!3m2!1sen!2sin!4v1722097881723!5m2!1sen!2sin"
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