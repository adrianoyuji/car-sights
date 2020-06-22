import React from "react";
import Icon from "@mdi/react";
import { mdiBed, mdiToilet, mdiRulerSquare } from "@mdi/js";

export default function MenuItem({
  propertie,
  index,
  hoveredPropertie,
  setHoveredPropertie,
}) {
  return (
    <div
      className={index % 2 ? "menuItem" : "menuItem menuItemOdd"}
      onMouseEnter={() => setHoveredPropertie(propertie.id)}
      onMouseLeave={() => setHoveredPropertie("")}
    >
      <img src={propertie.image} />
      <div className="propertieInfo">
        <span className="propertiesPrice">${propertie.price}</span>
        <span className="propertiesAddress">{propertie.address}</span>
        <div className="propertiesFeatures">
          <span className="feature">
            <Icon path={mdiBed} /> {propertie.features.bd} bedrooms
          </span>
          <span className="feature">
            <Icon path={mdiToilet} /> {propertie.features.ba} bathrooms
          </span>
          <span className="feature">
            <Icon path={mdiRulerSquare} /> {propertie.features.sqft} sqft
          </span>
        </div>
      </div>
    </div>
  );
}
