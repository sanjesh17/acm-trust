import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hero.css";
import img1 from "../../assets/banner-1.jpg";
import img2 from "../../assets/banner-2.jpg";
import img3 from "../../assets/banner-3.jpg";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="bg-container">
      <div className="main-container">
        <div className="text-container">
          <div className="header">
            <h1>Be the change</h1>
            <h1>you wish to see.</h1>
          </div>
          <div className="tagline">
            <p>
              Behind every statistic is a real person waiting for help. Your
              support directly impacts lives,
            </p>
            <p>
              providing hope and tangible solutions. Make a difference today
              with your donation.
            </p>
            <div className="hero-btn">
              <button type="button">Contact Us</button>
            </div>
          </div>
        </div>
        <div className="image-container">
          <Slider {...settings}>
            <div>
              <img src={img1} alt="Charity 1" />
            </div>
            <div>
              <img src={img2} alt="Charity 2" />
            </div>
            <div>
              <img src={img3} alt="Charity 3" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
