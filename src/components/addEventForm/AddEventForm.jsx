import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./addeventform.css";

const AddEventPage = () => {
  const navigate = useNavigate();
  const [eventDetails, setEventDetails] = useState({
    eventName: "",
    eventDate: "",
    eventTime: "",
    eventLocation: "",
    eventDescription: "",
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData();
    Object.keys(eventDetails).forEach((key) => {
      formData.append(key, eventDetails[key]);
    });
    if (image) {
      formData.append("image", image);
    }

    try {
      await axios.post("https://acmback.onrender.com/events/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setLoading(false);
      navigate("/home");
    } catch (err) {
      setLoading(false);
      setError("Failed to add event. Please try again.");
      console.error("Error adding event:", err);
    }
  };

  return (
    <div className="add-event-page">
      <h1>Add New Event</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="eventName">Event Name</label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            value={eventDetails.eventName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="eventDate">Event Date</label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            value={eventDetails.eventDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="eventTime">Event Time</label>
          <input
            type="time"
            id="eventTime"
            name="eventTime"
            value={eventDetails.eventTime}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="eventLocation">Event Location</label>
          <input
            type="text"
            id="eventLocation"
            name="eventLocation"
            value={eventDetails.eventLocation}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="eventDescription">Event Description</label>
          <textarea
            id="eventDescription"
            name="eventDescription"
            value={eventDetails.eventDescription}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Event Image</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            accept="image/*"
          />
        </div>
        <div className="form-actions">
          <button type="submit" disabled={loading}>
            {loading ? "Adding Event..." : "Create Event"}
          </button>
          <button type="button" onClick={() => navigate(-1)} disabled={loading}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEventPage;
