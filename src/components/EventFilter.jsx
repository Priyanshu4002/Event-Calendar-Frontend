import React from "react";

const EventFilter = ({ categories, onFilterChange }) => {
  return (
    <div className="event-filter">
      <select onChange={(e) => onFilterChange(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default EventFilter;
