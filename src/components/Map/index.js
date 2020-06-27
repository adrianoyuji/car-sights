import React from "react";
import MapMarker from "../MapMarker";
import GoogleMapReact from "google-map-react";

export default function Map({
  locationData,
  hoveredProperty,
  setHoveredProperty,
  setPropertyDetails,
  activeFilters,
}) {
  const center = {
    lat: locationData.lat,
    lng: locationData.lng,
    zoom: locationData.zoom,
  };
  const propertiesList = locationData.properties;

  return (
    <div className="map">
      <GoogleMapReact
        center={center}
        zoom={center.zoom}
        distanceToMouse={(e) => null}
      >
        {propertiesList.map((property, index) => {
          if (
            activeFilters.minPrice < property.price &&
            property.price < activeFilters.maxPrice &&
            activeFilters.classType === "all"
          ) {
            return (
              <MapMarker
                property={property}
                lat={property.coord.lat}
                lng={property.coord.lng}
                key={index}
                setHoveredProperty={setHoveredProperty}
                hoveredProperty={hoveredProperty}
                setPropertyDetails={setPropertyDetails}
              />
            );
          } else if (
            activeFilters.minPrice < property.price &&
            property.price < activeFilters.maxPrice &&
            activeFilters.classType === property.class
          ) {
            return (
              <MapMarker
                property={property}
                lat={property.coord.lat}
                lng={property.coord.lng}
                key={index}
                setHoveredProperty={setHoveredProperty}
                hoveredProperty={hoveredProperty}
                setPropertyDetails={setPropertyDetails}
              />
            );
          }
        })}
      </GoogleMapReact>
    </div>
  );
}
