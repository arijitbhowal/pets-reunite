import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import React, { useState, useEffect } from "react"; // Import useEffect from React
import OrangeMarker from "../assets/marker-orange.png";
import BlueMarker from "../assets/marker-blue.png";
import "./MyMap.css";

// Custom Popup component
const CustomPopup = ({ pet }) => (
  <div style={{ maxWidth: "200px" }}>
    <h2>{pet.petName}</h2>
    <p>Type: {pet.type}</p>
    <p>Sex: {pet.sex}</p>
    <p>Last Seen Address: {pet.lastSeenAdd}</p>
    <p>Email: {pet.email}</p>
    <p>Last Seen Date: {pet.lastSeenDate}</p>
    <p>Description: {pet.description}</p>
    {/* Add other details as needed */}
  </div>
);

const MyMap = (props) => {
  const { isLoaded } = props;
  const [selectedPet, setSelectedPet] = useState(null);
  const [filterLost, setFilterLost] = useState(false);
  const [filterFound, setFilterFound] = useState(false);
  const [pins, setPins] = useState([]); // [ { lat: 22.9734, lng: 78.6569 }, ... ]

  const containerStyle = {
    width: "100vw",
    height: "90vh",
  };

  const initialCenter = {
    lat: 22.9734, // Approximate latitude for the midpoint of India
    lng: 78.6569, // Approximate longitude for the midpoint of India
  };

  const handleMarkerClick = (pet) => {
    setSelectedPet(pet);
  };

  const handleInfoWindowClose = () => {
    setSelectedPet(null);
  };

  const handleFilterButtonClick = (filterType) => {
    if (filterType === "lost") {
      setFilterLost(!filterLost);
    } else if (filterType === "found") {
      setFilterFound(!filterFound);
    }
  };

  useEffect(() => {
    const getPins = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pets");
        const pins = await response.json();
        setPins(pins);
      } catch (err) {
        console.error(err.message);
      }
    };
    getPins();
  }, []);

  return (
    isLoaded && (
      <div>
        <button
          className="map-button"
          onClick={() => handleFilterButtonClick("lost")}
        >
          {filterLost ? "Hide Lost Pets" : "Show Lost Pets"}
        </button>
        <button
          className="map-button"
          onClick={() => handleFilterButtonClick("found")}
        >
          {filterFound ? "Hide Found Pets" : "Show Found Pets"}
        </button>

        <GoogleMap
          mapContainerStyle={containerStyle}
          center={initialCenter}
          zoom={5}
        >
          {pins.map((pet, index) => {
            if (
              (pet.petStatus === "Lost" && filterLost) ||
              (pet.petStatus === "Found" && filterFound)
            ) {
              return (
                <Marker
                  key={index}
                  position={{ lat: pet.latitude, lng: pet.longitude }}
                  icon={{
                    url: pet.petStatus === "Lost" ? OrangeMarker : BlueMarker,
                    scaledSize: new window.google.maps.Size(30, 30),
                  }}
                  onClick={() => handleMarkerClick(pet)}
                />
              );
            }
            return null; // Don't render the marker if it doesn't match the filter
          })}

          {selectedPet && (
            <InfoWindow
              position={{
                lat: selectedPet.latitude,
                lng: selectedPet.longitude,
              }}
              onCloseClick={handleInfoWindowClose}
            >
              <CustomPopup pet={selectedPet} />
            </InfoWindow>
          )}
        </GoogleMap>
      </div>
    )
  );
};

export default MyMap;
