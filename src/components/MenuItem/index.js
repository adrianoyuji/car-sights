import React from "react";
import Icon from "@mdi/react";
import { mdiBed, mdiToilet, mdiRulerSquare } from "@mdi/js";

export default function MenuItem({
  property,
  currency,
  index,
  setHoveredProperty,
  setPropertyDetails,
}) {
  return (
    <div
      className={index % 2 ? "menuItem" : "menuItem menuItemOdd"}
      onClick={() => setPropertyDetails(property)}
      onMouseEnter={() => setHoveredProperty(property.id)}
      onMouseLeave={() => setHoveredProperty("")}
    >
      <img src={property.image} alt="property thumb" />
      <div className="propertieInfo">
        <span className="propertiesPrice">
          {currency}
          {property.price}
        </span>
        <span className="propertiesAddress">{property.address}</span>
        <div className="propertiesFeatures">
          <span className="feature">
            <Icon path={mdiBed} /> {property.features.bd} bedrooms
          </span>
          <span className="feature">
            <Icon path={mdiToilet} /> {property.features.ba} bathrooms
          </span>
          <span className="feature">
            <Icon path={mdiRulerSquare} /> {property.features.sqft} sqft
          </span>
        </div>
      </div>
    </div>
  );
}
