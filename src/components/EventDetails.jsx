import React, { useState } from "react";
import EditEventForm from "./EditEventForm";
import Modal from "./Modal";

const EventDetails = ({setEvents,events, event, onClose }) => {
  const [showModal, setShowModal] = useState(false);
  const handleEventUpdated = (updatedEvent) => {
    const updatedEvents = events.map((event) =>
      event._id === updatedEvent._id ? updatedEvent : event
    );
    setEvents(updatedEvents);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="event-details">
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>{event.date}</p>
      <p>{event.category}</p>
      <div className="btn">
        <button onClick={onClose} >Close</button>
        <button onClick={()=>setShowModal(!showModal)} >Edit Details</button>
        <Modal show={showModal} onClose={toggleModal}>
          <EditEventForm event={event} onEventUpdated={handleEventUpdated}/>
        </Modal>
      </div>
    </div>
  );
};

export default EventDetails;
