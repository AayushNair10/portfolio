import * as React from "react";
import { activitiesData } from "../../data";
import "./Activities.scss";
import ActivitiesItem from "./Components/ActivitiesItem/ActivitiesItem.jsx";

export default function Activities() {
  return (
    <div id="activities" className="activities-container">
      <h1 className="activities-heading">Certifications</h1>
      <div className="activities-items">
        {activitiesData.map((item, index) => {
          return <ActivitiesItem item={item} key={index} />;
        })}
      </div>
    </div>
  );
}
