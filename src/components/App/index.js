import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import * as locations from "../../locations";

//components
import Header from "../Header";
import Map from "../Map";
import Menu from "../Menu";
import PropertyDetails from "../PropertyDetails";
import Information from "../Information";

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
  const [information, setInformation] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    classType: "all",
    minPrice: 0,
    maxPrice: 99999999,
  });

  useEffect(() => {
    setLocationData(locations[locationName]);
  }, [locationName]);

  return (
    <div className="app">
      <div className="appHeader">
        <Header setInformation={setInformation} />
      </div>
      <div className="appBody">
        <div className="appMap">
          <Map
            activeFilters={activeFilters}
            locationData={locationData}
            hoveredProperty={hoveredProperty}
            setHoveredProperty={setHoveredProperty}
            setPropertyDetails={setPropertyDetails}
          />
        </div>
        <div className="appMenu">
          <Menu
            activeFilters={activeFilters}
            setActiveFilters={setActiveFilters}
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
        ariaHideApp={false}
      >
        <PropertyDetails
          property={propertyDetails}
          currency={locationData.currency}
          onClose={() => setPropertyDetails(false)}
        />
      </Modal>
      <Modal
        isOpen={information}
        onRequestClose={() => setInformation(false)}
        style={customStyles}
        ariaHideApp={false}
      >
        <Information onClose={() => setInformation(false)} />
      </Modal>
    </div>
  );
}
