import React from "react";
import Icon from "@mdi/react";
import { mdiHome } from "@mdi/js";

export default function MapMarker({
  propertie,
  hoveredPropertie,
  setHoveredPropertie,
}) {
  return (
    <div
      className={
        propertie.id === hoveredPropertie ? "marker hoveredMarker" : "marker"
      }
    >
      <Icon path={mdiHome} />
    </div>
  );
}
