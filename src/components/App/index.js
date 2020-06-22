import React, { useState, useEffect } from "react";
import axios from "axios";
import * as locations from "../../locations";

//components
import Header from "../Header";
import Map from "../Map";
import Menu from "../Menu";

export default function App() {
  const [locationName, setLocationName] = useState("orlando");
  const [locationData, setLocationData] = useState(locations[locationName]);
  const [hoveredPropertie, setHoveredPropertie] = useState("");

  useEffect(() => {
    setLocationData(locations[locationName]);
  }, [locationName]);

  return (
    <div className="app">
      <div className="appHeader">
        <Header />
      </div>
      <div className="appBody">
        <div className="appMap">
          <Map
            locationData={locationData}
            hoveredPropertie={hoveredPropertie}
            setHoveredPropertie={setHoveredPropertie}
          />
        </div>
        <div className="appMenu">
          <Menu
            setLocationName={setLocationName}
            locationData={locationData}
            hoveredPropertie={hoveredPropertie}
            setHoveredPropertie={setHoveredPropertie}
          />
        </div>
      </div>
    </div>
  );
}
