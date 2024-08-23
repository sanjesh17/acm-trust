import React from "react";
import "./about.css";
import withFadeInAnimation from "../../hooks/withFadeInAnimation";
import "../../hooks/fadeinanimation.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-container">
      <div className="head-container">
        <h1>About Us</h1>
        <svg
          width="462"
          height="35"
          viewBox="0 0 462 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 20C260.2 -5.6 415.667 4.66667 461 13M55 32C314.2 6.4 388.667 4.66667 434 13"
            stroke="#FFDE91"
            strokeWidth="6"
          />
        </svg>
      </div>
      <div className="content-container fade-in-up">
        <p>
          Kaliyampoondi Village, nestled in the Uthiramerur Panchayat Union, has
          long been a beacon of rural tradition and community service.
        </p>
        <p>
          Since its establishment, the village has been dedicated to upholding
          the values of self-sufficiency and communal welfare, rooted deeply in
          Gandhian principles.
        </p>
        <p>
          Founded in 1922, the Village Panchayat has played a pivotal role in
          the development of Kaliyampoondi, transforming it into a model village
          recognized for its exemplary implementation of agricultural,
          educational, and welfare initiatives.
        </p>
        <p>
          We continue to honor the legacy of leaders like Thiru.O. Srinivasa
          Reddiar and Thiru.A.K. Ramakrishna Reddiar, whose tireless efforts
          have left an indelible mark on our community.
        </p>
        <div className="btn-box">
          <div className="learn-btn">
            <Link to="/details">
              <button type="button">
                Learn More
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="arrow-icon"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withFadeInAnimation(About);
