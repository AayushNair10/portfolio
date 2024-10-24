import * as React from "react";
import "./ActivitiesItem.scss";

export default function ActivitiesItem({ item }) {
  const { name, description, date, event } = item;
  return (
    <div className="activities-item">
      <div className="activities-content">
        <h4 className="event_title">{name}</h4>

        <br/>
        <h5 className="name">{event}</h5>

        <br/>
        <a 
          href={description} 
          className="description" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          View Certificate
        </a>
        <br/>
        <span className="activities-date">{date}</span>
      </div>
    </div>
  );
}
