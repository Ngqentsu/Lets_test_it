import React from "react";
import "./Comparison.css";

const Comparison = ({ aircraft, onRemoveCompare }) => {
  return (
    <div className="comparison-section">
      <h2>Aircraft Comparison</h2>
      <div className="comparison-grid">
        {aircraft.map((plane) => (
          <div key={plane.id} className="comparison-card">
            <img src={plane.img} alt={plane.name} className="aircraft-img" />
            <h3>{plane.name}</h3>
            <p>Type: {plane.type}</p>
            <p>Speed: {plane.speed} km/h</p>
            <p>Range: {plane.range} km</p>
            <button onClick={() => onRemoveCompare(plane.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comparison;
