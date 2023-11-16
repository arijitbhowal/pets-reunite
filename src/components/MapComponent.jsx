import React from "react";
import "./MapComponent.css";
import MyMap from "./MyMap";
import { useJsApiLoader } from "@react-google-maps/api";
import { mapOptions } from "./MapConfig";

const MapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    id: mapOptions.googleMapApiKey,
    googleMapsApiKey: mapOptions.googleMapApiKey,
  });
  return (
    <div className="map-container">
      <MyMap isLoaded={isLoaded} />
    </div>
  );
};

export default MapComponent;
