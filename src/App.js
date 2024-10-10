import React, { useState } from "react";
import AircraftList from "./components/AircraftList";
import { aircraftList } from "./data/aircraft";
import Comparison from "./components/Comparison";
import "./App.css";


function App() {
  const [selectedAircraft, setSelectedAircraft] = useState([]);
  const [filter, setFilter] = useState(null);

  // Function to add aircraft to comparison                                                                                                          
  const handleCompare = (aircraft) => {
    if (!selectedAircraft.includes(aircraft)) {
      setSelectedAircraft([...selectedAircraft, aircraft]);
    }
  };

  // Function to remove an aircraft from comparison                                                                                                  
  const handleRemoveCompare = (aircraftId) => {
    setSelectedAircraft(selectedAircraft.filter(a => a.id !== aircraftId));
  };

  // Apply filter if one is set, otherwise use the full list
  const filteredAircraft = filter
    ? aircraftList.filter((plane) => plane.type === filter)
    : aircraftList;

  return (
    <div className="App">
      <h1>Aircraft Design Showcase</h1>
      
      {/* Filter component to apply filters */}
      <Filter onFilter={setFilter} />
      
      {/* Render the filtered or full aircraft list */}
      <AircraftList aircraft={filteredAircraft} onCompare={handleCompare} />

      {/* Render comparison section if there are selected aircraft */}
      {selectedAircraft.length > 0 && (
        <Comparison aircraft={selectedAircraft} onRemoveCompare={handleRemoveCompare} />
      )}
    </div>
  );
}

export default App;
