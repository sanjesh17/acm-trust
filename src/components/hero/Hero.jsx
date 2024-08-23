import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hero.css";
import img1 from "../../assets/banner-1.jpg";
import img2 from "../../assets/banner-2.jpg";
import img3 from "../../assets/banner-3.jpg";
import withFadeInAnimation from "../../hooks/withFadeInAnimation";
import "../../hooks/fadeinanimation.css";
import { Link } from "react-router-dom";

const Hero = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="bg-container">
      <div className="main-container">
        <div className="text-container">
          <div className="header">
            <h2>KALIYAMPOONDI VILLAGE DEVELOPMENT TRUST</h2>
            <h1>Empowering Communities,</h1>
            <h1>Reviving Traditions.</h1>
          </div>
          <div className="tagline">
            <p>
              Our village stands as a testament to the power of unity and
              service, driven by the shared vision of a prosperous community.
            </p>
            <p>
              Join us in our mission to restore Kaliyampoondi's legacy as a
              model village through sustainable development and collective
              action.
            </p>
            <div className="hero-btn">
              <Link to="/contact">
                <button type="button">Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="image-container">
          <Slider {...settings}>
            <div>
              <img src={img1} alt="Kaliyampoondi Village" />
            </div>
            <div>
              <img src={img2} alt="Community Development" />
            </div>
            <div>
              <img src={img3} alt="Sustainable Growth" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default withFadeInAnimation(Hero);
