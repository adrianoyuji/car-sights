import React from "react";
import Icon from "@mdi/react";
import { mdiHome } from "@mdi/js";

export default function MapMarker({
  property,
  hoveredProperty,
  setHoveredProperty,
  setPropertyDetails,
}) {
  return (
    <div
      className={
        property.id === hoveredProperty ? "marker hoveredMarker" : "marker"
      }
      onClick={() => setPropertyDetails(property)}
      onMouseEnter={() => setHoveredProperty(property.id)}
      onMouseLeave={() => setHoveredProperty("")}
    >
      <Icon path={mdiHome} />
    </div>
  );
}
