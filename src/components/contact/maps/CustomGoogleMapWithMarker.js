import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
const CustomGoogleMapWithMarker = () => {
  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = {
    
    lat: 38.645228,
    lng: 29.448978,
  };
  return (
    <LoadScript googleMapsApiKey="AIzaSyD75l2_BAXj7yaC7EwpGdrvJACErroNtSA">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
      </GoogleMap>
    </LoadScript>
  );
};

export default CustomGoogleMapWithMarker;
