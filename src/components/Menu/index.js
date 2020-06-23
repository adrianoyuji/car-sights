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
  hoveredProperty,
  setHoveredProperty,
  setPropertyDetails,
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
        {locationData.properties.map((property, index) => (
          <MenuItem
            property={property}
            key={index}
            index={index}
            hoveredProperty={hoveredProperty}
            setHoveredProperty={setHoveredProperty}
            setPropertyDetails={setPropertyDetails}
          />
        ))}
      </div>
    </div>
  );
}
