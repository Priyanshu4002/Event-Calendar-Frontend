import React, { useState, useEffect } from "react";
import axios from "axios";
import Calendar from "./components/Calendar";
import AddEventForm from "./components/AddEventForm";
import EventFilter from "./components/EventFilter";
import "./App.css";

function App() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    axios.get("https://event-calendar-backend-d4f7.onrender.com/events").then((response) => {
      setEvents(response.data);
    });
  }, []);

  const handleEventAdded = (newEvent) => {
    setEvents([...events, newEvent]);
  };


  const handleFilterChange = (category) => {
    if (category) {
      setFilteredEvents(events.filter((event) => event.category === category));
    } else {
      setFilteredEvents(events);
    }
  };

  return (
    <div className="App">
      <h1>React Calendar App</h1>
      <EventFilter
        categories={["Work", "Personal"]}
        onFilterChange={handleFilterChange}
      />
      <div className="section1"><Calendar setEvents={setEvents} events={filteredEvents.length ? filteredEvents : events} /></div>

      <AddEventForm onEventAdded={handleEventAdded} />
    </div>
  );
}

export default App;
