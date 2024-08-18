import React, { useState } from "react";
import axios from "axios";

const EditEventForm = ({ event, onEventUpdated }) => {
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
    axios.put(`http://localhost:8000/events/${event._id}`, updatedEvent).then((response) => {
      onEventUpdated(response.data);
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
        placeholder="Event Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
      </select>
      <button type="submit">Update Event</button>
    </form>
  );
};

export default EditEventForm;
