import React, { useState } from "react";
import "./GeoCodeForm.css";

const GeoCodeForm = ({ setAddress, setLat, setLong }) => {
  const [address, setAddressState] = useState("");
  const [lat, setLatState] = useState("");
  const [long, setLongState] = useState("");

  const getCoordinates = async () => {
    try {
      const response = await fetch(
        `https://geocode.search.hereapi.com/v1/geocode?q=${address}&apiKey=k3_ADJ3mfU1s4SU6x1pN5jXLm66UTfUxa-ih8f4x4YY`
      );
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        const { lat, lng } = data.items[0].position;
        setLatState(lat);
        setLongState(lng);
        setAddressState(data.items[0].address.label);
      } else {
        console.error("Invalid address or no coordinates found.");
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  const handleButtonClick = async (e) => {
    e.preventDefault();
    await getCoordinates();
  };

  return (
    <div className="geocoder-sub-container">
      <label className="geocoder__label geocoder__label-set">
        Location
        <input
          type="text"
          name="address"
          value={address}
          onChange={(e) => setAddressState(e.target.value)}
          className="geocoder__input"
          placeholder="Enter Last Seen Address"
        />
      </label>
      <label className="geocoder__label geocoder__label-set">
        Latitude
        <input
          type="text"
          name="lat"
          value={lat}
          readOnly
          className="geocoder__input"
        />
      </label>
      <label className="geocoder__label geocoder__label-set">
        Longitude
        <input
          type="text"
          name="long"
          value={long}
          readOnly
          className="geocoder__input"
        />
      </label>
      <label className="geocoder__label geocoder__label-set">
        <button className="geocoder__input"onClick={handleButtonClick}>Get Coordinates</button>
      </label>
    </div>
  );
};

export default GeoCodeForm;
