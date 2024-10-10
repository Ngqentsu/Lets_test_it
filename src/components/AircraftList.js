import React from "react";
import "./AircraftList.css";

const AircraftList = ({ aircraft, onCompare }) => {
  return (
    <div className="aircraft-list">
      {aircraft.map((plane) => (
        <div key={plane.id} className="aircraft-card">
          <img src={plane.img} alt={plane.name} className="aircraft-img" />
          <h2>{plane.name}</h2>
          <p>Type: {plane.type}</p>
          <p>Speed: {plane.speed} km/h</p>
          <p>Range: {plane.range} km</p>
          <button onClick={() => onCompare(plane)}>Compare</button>
        </div>
      ))}
    </div>
  );
};

export default AircraftList;
