import React from "react";
import Icon from "@mdi/react";
import { mdiHome } from "@mdi/js";

export default function MapMarker({
  property,
  hoveredProperty,
  setPropertyDetails,
}) {
  return (
    <div
      className={
        property.id === hoveredProperty ? "marker hoveredMarker" : "marker"
      }
      onClick={() => setPropertyDetails(property)}
    >
      <Icon path={mdiHome} />
    </div>
  );
}
