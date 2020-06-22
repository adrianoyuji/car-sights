import React, { useState, useEffect } from "react";
import MapMarker from "../MapMarker";
import GoogleMapReact from "google-map-react";

export default function Map({
  locationData,
  hoveredPropertie,
  setHoveredPropertie,
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
        {propertiesList.map((propertie, index) => (
          <MapMarker
            propertie={propertie}
            lat={propertie.coord.lat}
            lng={propertie.coord.lng}
            key={index}
            hoveredPropertie={hoveredPropertie}
            setHoveredPropertie={setHoveredPropertie}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}
