const { useState } = React;

const aircraftList = [
  { id: 1, name: 'Boeing 747', type: 'Commercial' },
  { id: 2, name: 'Airbus A320', type: 'Commercial' },
  { id: 3, name: 'F-22 Raptor', type: 'Military' },
  { id: 4, name: 'F-35 Lightning II', type: 'Military' }
];

function AircraftList({ aircraft, onCompare }) {
  return (
    <div className="aircraft-list">
      {aircraft.map(plane => (
        <div className="aircraft-item" key={plane.id}>
          <h2>{plane.name}</h2>
          <p>Type: {plane.type}</p>
          <button onClick={() => onCompare(plane)}>Compare</button>
        </div>
      ))}
    </div>
  );
}

function Comparison({ aircraft, onRemoveCompare }) {
  return (
    <div className="comparison-section">
      <h2>Aircraft Comparison</h2>
      <ul>
        {aircraft.map(plane => (
          <li key={plane.id}>
            {plane.name}
            <button onClick={() => onRemoveCompare(plane.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Filter({ onFilter }) {
  return (
    <div className="filter">
      <button onClick={() => onFilter(null)}>All</button>
      <button onClick={() => onFilter('Commercial')}>Commercial</button>
      <button onClick={() => onFilter('Military')}>Military</button>
    </div>
  );
}

function App() {
  const [selectedAircraft, setSelectedAircraft] = useState([]);
  const [filter, setFilter] = useState(null);

  const handleCompare = (aircraft) => {
    if (!selectedAircraft.includes(aircraft)) {
      setSelectedAircraft([...selectedAircraft, aircraft]);
    }
  };

  const handleRemoveCompare = (aircraftId) => {
    setSelectedAircraft(selectedAircraft.filter(a => a.id !== aircraftId));
  };

  const filteredAircraft = filter
    ? aircraftList.filter((plane) => plane.type === filter)
    : aircraftList;

  return (
    <div className="App">
      <h1>Aircraft Design Showcase</h1>
      <Filter onFilter={setFilter} />
      <AircraftList aircraft={filteredAircraft} onCompare={handleCompare} />
      {selectedAircraft.length > 0 && (
        <Comparison aircraft={selectedAircraft} onRemoveCompare={handleRemoveCompare} />
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
