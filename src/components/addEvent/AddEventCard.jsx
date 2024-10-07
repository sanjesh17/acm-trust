import React from "react";
import { useNavigate } from "react-router-dom";
import "./addeventcard.css";

const AddEventCard = () => {
  const navigate = useNavigate();

  const handleAddEventClick = (e) => {
    e.preventDefault();
    navigate("/add-event");
  };

  return (
    <div className="add-event-card" onClick={handleAddEventClick}>
      <div className="add-event-content">
        <div className="add-event-icon">
          <i className="fas fa-plus-circle"></i>
        </div>
        <h3>Add New Event</h3>
        <p>Click here to create a new event</p>
      </div>
    </div>
  );
};

export default AddEventCard;
