import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../eventcard/Card";
import "./events.css";
import withFadeInAnimation from "../../hooks/withFadeInAnimation";
import "../../hooks/fadeinanimation.css";

const MultiCarousel = ({ isAdmin }) => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://acmback.onrender.com/events");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (Array.isArray(data.events)) {
          setEvents(data.events);
        } else if (Array.isArray(data)) {
          setEvents(data);
        } else {
          console.error("Unexpected data format:", data);
          throw new Error("Received data is not in the expected format. Check console for details.");
        }
      } catch (err) {
        console.error("Error fetching events:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const getEventImage = (event) => {
    return event.image || 'https://via.placeholder.com/300x200?text=No+Image+Available';
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const handleAddEventClick = () => {
    navigate("/add-event");
  };

  if (isLoading) return <div>Loading events...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!events) return <div>No events data available.</div>;
  if (events.length === 0 && !isAdmin) return <div>No events available at the moment.</div>;

  return (
    <div className="events-section">
      <div className="carousel-container">
        <div className="carousel-header-container">
          <h1>Events</h1>
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
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={events.length > 3}
          autoPlay={events.length > 1}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="transform 0.8s ease"
          transitionDuration={800}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-80-px"
        >
          {events.map((event) => (
            <div key={event._id}>
              <Card event={{...event, image: getEventImage(event)}} />
            </div>
          ))}
        </Carousel>
      </div>
      {isAdmin && (
        <div className="add-event-button-container">
          <button className="add-event-button" onClick={handleAddEventClick}>
            Add New Event
          </button>
        </div>
      )}
    </div>
  );
};

export default withFadeInAnimation(MultiCarousel);
