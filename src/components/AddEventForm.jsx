import React, { useState } from "react";
import axios from "axios";

const AddEventForm = ({ onEventAdded }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("Work");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      title,
      description,
      date,
      category,
    };
    axios.post("https://event-calendar-backend-d4f7.onrender.com/events", newEvent).then((response) => {
      onEventAdded(response.data);
      setTitle("");
      setDescription("");
      setDate("");
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
      <button type="submit">Add Event</button>
    </form>
  );
};

export default AddEventForm;
