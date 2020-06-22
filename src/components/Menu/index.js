import React, { useState, useEffect } from "react";
import MenuItem from "../MenuItem";

const buttonLocations = [
  { name: "Dourados", id: "dourados" },
  { name: "Orlando", id: "orlando" },
  { name: "London", id: "london" },
];

export default function Menu({
  setLocationName,
  locationData,
  hoveredPropertie,
  setHoveredPropertie,
}) {
  return (
    <div className="menu">
      <div className="locationsHeader">
        {buttonLocations.map((buttonLocation, index) => (
          <div
            onClick={() => setLocationName(buttonLocation.id)}
            className="headerButton"
            key={index}
          >
            {buttonLocation.name}
          </div>
        ))}
      </div>
      <div className="propertiesList">
        {locationData.properties.map((propertie, index) => (
          <MenuItem
            propertie={propertie}
            key={index}
            index={index}
            hoveredPropertie={hoveredPropertie}
            setHoveredPropertie={setHoveredPropertie}
          />
        ))}
      </div>
    </div>
  );
}
