import React from "react";
import "./footer.css";
import withFadeInAnimation from "../../hooks/withFadeInAnimation";
import "../../hooks/fadeinanimation.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>
            <i className="fas fa-hand-holding-heart"></i> Village Welfare
            Development Trust
          </h3>
          <p>
            Empowering rural communities through sustainable development and
            welfare initiatives.
          </p>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="footer-section links">
          <h3>
            <i className="fas fa-seedling"></i> Our Initiatives
          </h3>
          <ul>
            <li>
              <a href="/education">
                <i className="fas fa-graduation-cap"></i> Education
              </a>
            </li>
            <li>
              <a href="/healthcare">
                <i className="fas fa-heartbeat"></i> Healthcare
              </a>
            </li>
            <li>
              <a href="/agriculture">
                <i className="fas fa-tractor"></i> Sustainable Agriculture
              </a>
            </li>
            <li>
              <a href="/women-empowerment">
                <i className="fas fa-venus"></i> Women Empowerment
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>
            <i className="fas fa-hands-helping"></i> Get Involved
          </h3>
          <ul>
            <li>
              <a href="/donate">
                <i className="fas fa-donate"></i> Donate
              </a>
            </li>
            <li>
              <a href="/volunteer">
                <i className="fas fa-user-friends"></i> Volunteer
              </a>
            </li>
            <li>
              <a href="/partnerships">
                <i className="fas fa-handshake"></i> Partnerships
              </a>
            </li>
            <li>
              <a href="/contact">
                <i className="fas fa-envelope"></i> Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2024 Village Welfare Development Trust. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default withFadeInAnimation(Footer);
