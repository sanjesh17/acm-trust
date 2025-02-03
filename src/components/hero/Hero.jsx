import React, { useState, useEffect } from "react";
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
  const [carouselImages, setCarouselImages] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    // Check admin status
    const role = localStorage.getItem("role");
    setIsAdmin(role === "admin");

    // Fetch carousel images
    const fetchImages = async () => {
      try {
        const response = await fetch("https://acmback.onrender.com/carousel");
        const data = await response.json();
        setCarouselImages(data);
      } catch (error) {
        console.error("Error fetching carousel images:", error);
      }
    };
    fetchImages();
  }, []);

  const handleDeleteImage = async (imageId) => {
    if (!window.confirm("Are you sure you want to delete this image?")) return;

    try {
      const response = await fetch(
        `https://acmback.onrender.com/carousel/${imageId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setCarouselImages((prevImages) =>
          prevImages.filter((img) => img._id !== imageId)
        );
      }
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("description", "New carousel image");

    try {
      const response = await fetch(
        "https://acmback.onrender.com/carousel/add",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        setCarouselImages((prev) => [...prev, data]);
        setSelectedFile(null);
        if(window.confirm("Image uploaded successfully!")) {
          window.location.reload();
        }
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

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
          {isAdmin && (
            <div className="admin-controls">
              <input type="file" onChange={handleFileSelect} accept="image/*" />
              <button
                className="add-image-btn"
                onClick={handleUpload}
                disabled={!selectedFile}
              >
                Add Image
              </button>
            </div>
          )}
          <Slider {...settings}>
            {/* Default images */}
            <div className="slide-wrapper">
              <img src={img1} alt="Kaliyampoondi Village" />
            </div>
            <div className="slide-wrapper">
              <img src={img2} alt="Community Development" />
            </div>
            <div className="slide-wrapper">
              <img src={img3} alt="Sustainable Growth" />
            </div>

            {/* Carousel images from backend */}
            {carouselImages.map((image) => (
              <div key={image._id} className="slide-wrapper">
                <img src={image.image} alt={image.description} />
                {isAdmin && (
                  <button
                    className="delete-image-btn"
                    onClick={() => handleDeleteImage(image._id)}
                  >
                    Delete
                  </button>
                )}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default withFadeInAnimation(Hero);
