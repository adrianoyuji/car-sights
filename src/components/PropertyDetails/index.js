import React from "react";
import Icon from "@mdi/react";
import { mdiBed, mdiToilet, mdiRulerSquare, mdiClose } from "@mdi/js";

export default function MenuItem({ property, onClose }) {
  const propertyClass = (classType) => {
    switch (classType) {
      case "high-end":
        return "HIGH END PROPERTY";
      case "medium":
        return "MEDIUM PROPERTY";
      case "low-end":
        return "LOW END PROPERTY";
      default:
        return null;
    }
  };

  if (!!property) {
    return (
      <div className="propertyContainer">
        <img src={property.image} />
        <div className="propertyDetails">
          <span className="propertyClass">{propertyClass(property.class)}</span>
          <span className="propertyAddress">{property.address}</span>
          <span className="propertyPrice">${property.price}</span>
          <span className="propertyInstallments">
            or ${(property.price / 195).toFixed(2)}/month
          </span>
          <div className="propertyFeature">
            Features:
            <span className="iconDetail">
              <Icon path={mdiBed} /> {property.features.bd} bedrooms
            </span>
            <span className="iconDetail">
              <Icon path={mdiToilet} /> {property.features.ba} bathrooms
            </span>
            <span className="iconDetail">
              <Icon path={mdiRulerSquare} />
              {property.features.sqft} sqft.
            </span>
          </div>
          <button
            type="button"
            onClick={() =>
              alert(
                "This is just a mock! Thanks for testing my website! by Adriano Yuji"
              )
            }
          >
            I AM INTERESTED
          </button>
        </div>
        <div className="closeIcon" onClick={onClose}>
          <Icon path={mdiClose} />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
