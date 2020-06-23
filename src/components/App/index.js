import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import * as locations from "../../locations";

//components
import Header from "../Header";
import Map from "../Map";
import Menu from "../Menu";
import PropertyDetails from "../PropertyDetails";

//modal style
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function App() {
  const [locationName, setLocationName] = useState("orlando");
  const [locationData, setLocationData] = useState(locations[locationName]);
  const [hoveredProperty, setHoveredProperty] = useState("");
  const [propertyDetails, setPropertyDetails] = useState(false);

  useEffect(() => {
    setLocationData(locations[locationName]);
  }, [locationName]);

  return (
    <div className="app">
      <div className="appHeader">
        <Header />
      </div>
      <div className="appBody">
        <div className="appMap">
          <Map
            locationData={locationData}
            hoveredProperty={hoveredProperty}
            setHoveredProperty={setHoveredProperty}
            setPropertyDetails={setPropertyDetails}
          />
        </div>
        <div className="appMenu">
          <Menu
            setLocationName={setLocationName}
            locationData={locationData}
            hoveredProperty={hoveredProperty}
            setHoveredProperty={setHoveredProperty}
            setPropertyDetails={setPropertyDetails}
          />
        </div>
      </div>
      <Modal
        isOpen={!!propertyDetails}
        onRequestClose={() => setPropertyDetails(false)}
        style={customStyles}
      >
        <PropertyDetails
          property={propertyDetails}
          onClose={() => setPropertyDetails(false)}
        />
      </Modal>
    </div>
  );
}
