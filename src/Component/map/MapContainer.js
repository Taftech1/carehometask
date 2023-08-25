import React, { useState } from "react";
import "./map.css";

function MapContainer() {
  const [locationTab, setLocationTab] = useState(1);

  const handleLocationChange = (value) => {
    setLocationTab(value);
    console.log(value)
  };

  return (
    <div className="map-container">
      <div className="map-tab">
        <div
          className={locationTab === 1 ? "active" : ""}
          onClick={() => handleLocationChange(1)}
        >
          Fife
        </div>
        <div
          className={locationTab === 2 ? "active" : ""}
          onClick={() => handleLocationChange(2)}
        >
          Edinburgh
        </div>
        <div
          className={locationTab === 3 ? "active" : ""}
          onClick={() => handleLocationChange(3)}
        >
          Perth
        </div>
      </div>
      <p>nkdnkd</p>

    </div>
  );
}

export default MapContainer;
