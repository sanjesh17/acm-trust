import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./gallery.css";
import withFadeInAnimation from "../../hooks/withFadeInAnimation";
import "../../hooks/fadeinanimation.css";

import G1 from "../../assets/G-1.png";
import G2 from "../../assets/G-2.png";
import G3 from "../../assets/G-3.jpg";
import G4 from "../../assets/G-4.png";
import G5 from "../../assets/G-5.png";
import G6 from "../../assets/G-6.jpg";
import G7 from "../../assets/G-7.png";
import G8 from "../../assets/G-8.png";

const GalleryCarousel = () => {
  const images = [G1, G2, G3, G4, G5, G6, G7, G8];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="gallery-carousel">
      <div className="gallery-header">
        <h1>Gallery</h1>
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
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="slide-item">
              <img src={image} alt={`Gallery image ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default withFadeInAnimation(GalleryCarousel);
