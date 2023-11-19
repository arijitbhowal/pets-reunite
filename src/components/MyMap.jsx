import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import React, { useState, useEffect } from "react"; // Import useEffect from React
import OrangeMarker from "../assets/marker-orange.png";
import BlueMarker from "../assets/marker-blue.png";
import "./MyMap.css";
import { auth } from '../FirebaseConfig';

// Custom Popup component
// Custom Popup component
const CustomPopup = ({ pet }) => {
  const currentUserID = auth.currentUser ? auth.currentUser.uid : null;

  const popupStyle = {
    width: "200px",
    padding: "8px",
    fontSize: "12px",
    wordWrap: "break-word",
    backgroundColor: pet.petStatus === "Lost" ? "#FFDAB9" : "#ADD8E6",
    margin: "0",
    borderRadius: "8px",
  };

  const handleContact = () => {
    window.location.href = `mailto:${pet.email}`;
  };

  return (
    <div style={popupStyle}>
      {pet.reportImage && (
        <div style={{ marginBottom: "8px" }}>
          <img
            src={pet.reportImage}
            alt="Pet"
            style={{ width: "100%", maxHeight: "100px", objectFit: "cover", borderRadius: "4px" }}
          />
        </div>
      )}
      <h2 style={{ margin: "0 0 4px", fontWeight: "bold" }}>{pet.petName}</h2>
      <p style={{ margin: "0 0 2px" }}>
        <span style={{ fontWeight: "bold" }}>Type:</span> {pet.type}
      </p>
      <p style={{ margin: "0 0 2px" }}>
        <span style={{ fontWeight: "bold" }}>Sex:</span> {pet.sex}
      </p>
      <p style={{ margin: "0 0 2px" }}>
        <span style={{ fontWeight: "bold" }}>Last Seen:</span> {pet.lastSeenAdd}
      </p>
      <p style={{ margin: "0 0 2px" }}>
        <span style={{ fontWeight: "bold" }}>Last Seen On:</span>{" "}
        {pet.lastSeenDate.split("T")[0]}
      </p>
      <p style={{ margin: "0 0 4px" }}>
        <span style={{ fontWeight: "bold" }}>Description:</span> {pet.description}
      </p>
      {/* Add the Contact button */}
      {pet.email && currentUserID && currentUserID !== pet.userId && (
        <button
          style={{
            display: "block",
            width: "100%",
            padding: "8px",
            backgroundColor: "#073b4c",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={handleContact}
        >
          Contact
        </button>
      )}
    </div>
  );
};


const MyMap = (props) => {
  const { isLoaded } = props;
  const [selectedPet, setSelectedPet] = useState(null);
  const [filterLost, setFilterLost] = useState(false);
  const [filterFound, setFilterFound] = useState(false);
  const [pins, setPins] = useState([]);
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
        const response = await fetch("/api/pets/maps");
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