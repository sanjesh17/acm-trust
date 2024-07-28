import React from "react";
import "./about.css";
import withFadeInAnimation from "../../hooks/withFadeInAnimation";
import "../../hooks/fadeinanimation.css";

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
        <p>The Village Welfare Development Trust, inspired by the legacy of</p>
        <p>
          Kaliyampoondi's award-winning past, works alongside the residents of
        </p>
        <p>
          Kaliyampoondi village in Tamil Nadu, India. We aim to revitalize our
        </p>
        <p>
          community and overcome developmental challenges through locally-led
          initiatives.
        </p>
        <div className="btn-box">
          <div className="learn-btn">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default withFadeInAnimation(About);
