import React from "react";
import "./MapComponent.css";
import MyMap from "./MyMap";
import { useJsApiLoader } from "@react-google-maps/api";
import { mapOptions } from "./MapConfig";
import Navbar from "./Navbar";

const MapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    id: mapOptions.googleMapApiKey,
    googleMapsApiKey: mapOptions.googleMapApiKey,
  });
  return (
    <div className="map-component-container">
      <div className="nav">
        <Navbar />
      </div>
    <div className="map-viewer-container">
      <MyMap isLoaded={isLoaded} />
    </div>
    </div>
  );
};

export default MapComponent;
