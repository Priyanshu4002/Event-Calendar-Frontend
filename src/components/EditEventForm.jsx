import React, { useState } from "react";
import axios from "axios";

const EditEventForm = ({ event,setEvents, onEventUpdated , onClose }) => {
  const [title, setTitle] = useState(event.title);
  const [description, setDescription] = useState(event.description);
  const [date, setDate] = useState(event.date);
  const [category, setCategory] = useState(event.category);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEvent = {
      title,
      description,
      date,
      category,
    };
    axios.put(`https://event-calendar-backend-d4f7.onrender.com/events/${event._id}`, updatedEvent).then((response) => {
      onEventUpdated(response.data);
    });
  };

  const handleDelete = () => {
    axios.delete(`https://event-calendar-backend-d4f7.onrender.com/events/${event._id}`)
      .then(() => {
        setEvents((prevEvents) =>
          prevEvents.filter((evt) => evt._id !== event._id)
        );
        onClose(); // Close the form after deleting
      })
      .catch((error) => {
        console.error("Error deleting the event", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Event Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <textarea
        className="fitdescription"
        placeholder="Event Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
      </select>
      <div>
        <button type="submit">Update Event</button>
        <button type="button" onClick={handleDelete}>Delete Event</button>
      </div>
    </form>
  );
};

export default EditEventForm;
