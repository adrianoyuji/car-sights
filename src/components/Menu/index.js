import React from "react";
import MenuItem from "../MenuItem";
import Filters from "../Filters";

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
  activeFilters,
  setActiveFilters,
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
      <div className="filtersList">
        <Filters
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
        />
      </div>
      <div className="propertiesList">
        {locationData.properties.map((property, index) => {
          if (
            activeFilters.minPrice < property.price &&
            property.price < activeFilters.maxPrice &&
            activeFilters.classType === "all"
          ) {
            return (
              <MenuItem
                property={property}
                currency={locationData.currency}
                key={index}
                index={index}
                hoveredProperty={hoveredProperty}
                setHoveredProperty={setHoveredProperty}
                setPropertyDetails={setPropertyDetails}
              />
            );
          } else if (
            activeFilters.minPrice < property.price &&
            property.price < activeFilters.maxPrice &&
            activeFilters.classType === property.class
          ) {
            return (
              <MenuItem
                property={property}
                currency={locationData.currency}
                key={index}
                index={index}
                hoveredProperty={hoveredProperty}
                setHoveredProperty={setHoveredProperty}
                setPropertyDetails={setPropertyDetails}
              />
            );
          } else return null;
        })}
      </div>
    </div>
  );
}
