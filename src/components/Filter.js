import React from "react";

const Filter = ({ onFilter }) => {
  return (
    <div>
      <button onClick={() => onFilter("Commercial")}>Commercial</button>
      <button onClick={() => onFilter("Military")}>Military</button>
      <button onClick={() => onFilter(null)}>All</button>
    </div>
  );
};

export default Filter;
