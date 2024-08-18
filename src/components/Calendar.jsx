import React, { useState } from "react";
import dayjs from "dayjs";
import EventDetails from "./EventDetails";
import './modal.css'
import Modal from "./Modal";

const Calendar = ({ events,setEvents }) => {
  // const [showModal, setShowModal] = useState(true);
  const currentMonth = dayjs();
  const daysInMonth = currentMonth.daysInMonth();
  const [clickedEventId, setClickedEventId] = useState(null);

  const handleClick = (eventId) => {
    setClickedEventId(clickedEventId === eventId ? null : eventId);
    
  };

  // const toggleModal = () => {
  //   setShowModal(!showModal);
  // };

  const renderDays = () => {
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const date = currentMonth.date(i);
      const eventsForDay = events.filter((event) =>
        dayjs(event.date).isSame(date, "day")
      );

      days.push(
        <div key={i} className="day">
          {i}
          {eventsForDay.map((event) => (
            <div key={event._id} className="event" onClick={() => handleClick(event._id)}>
              {event.title}
              {clickedEventId === event._id && (
                // <div className="event-details"> </div>
                <Modal show={true} onClose={null}>
                  <EventDetails setEvents={setEvents} events={events} event={event} onClose={()=>setClickedEventId(null)} />
              </Modal>
              )}
            </div>
          ))}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar">
      <div className="header">
        <h2>{currentMonth.format("MMMM YYYY")}</h2>
      </div>
      <div className="days-grid">{renderDays()}</div>
    </div>
  );
};

export default Calendar;
