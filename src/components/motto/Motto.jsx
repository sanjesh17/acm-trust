import React from "react";
import "./motto.css";
import withFadeInAnimation from "../../hooks/withFadeInAnimation";
import "../../hooks/fadeinanimation.css";

const Motto = () => {
  return (
    <div className="motto-container">
      <div className="motto-header">
        <h1>Our Vision and Motto</h1>
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
      <div className="motto-content">
        <p>
          We envision Kaliyampoondi as a model village that revives and
          continues its legacy of excellence in rural development.
        </p>
        <p>
          Guided by the spirit of self-reliance and community service, we aim to
          restore our village to its former glory, once recognized as a "Modern
          Village" by both central and state governments.
        </p>

        <svg
          className="pencil-line"
          width="100%"
          height="30"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="pencilPattern"
              x="0"
              y="0"
              width="100"
              height="30"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 15 C10 10, 30 20, 50 15 S70 10, 100 15"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="30" fill="url(#pencilPattern)" />
        </svg>

        <div className="motto">
          <p>
            Restoring village glory through collective welfare and development
          </p>
          <p>
            (கூட்டு நலன் மற்றும் வளர்ச்சி மூலம் கிராம பெருமையை மீட்டெடுப்போம்)
          </p>
        </div>
      </div>
    </div>
  );
};

export default withFadeInAnimation(Motto);
