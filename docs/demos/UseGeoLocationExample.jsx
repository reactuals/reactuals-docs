import React from "react";
import { useGeoLocation } from "reactuals";
import { DemoWrapper } from "./DemoWrapper";

export const UseGeoLocationExample = () => {
  const { latitude, longitude, error } = useGeoLocation({
    enableHighAccuracy: false,
  });

  return (
    <DemoWrapper>
      <h3>useGeoLocation Example</h3>
      {error ? (
        <p style={{ color: "red" }}>Error: {error.message}</p>
      ) : latitude === null || longitude === null ? (
        <p>Loading...</p>
      ) : (
        <p>
          Latitude: {latitude.toFixed(4)}, Longitude: {longitude.toFixed(4)}
        </p>
      )}
    </DemoWrapper>
  );
};
