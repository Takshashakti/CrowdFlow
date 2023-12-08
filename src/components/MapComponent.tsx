"use client";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import CurrentLocationMarker from "./CurrentLocationMarker";

const MapComponent = () => {
  // if (typeof window !== "undefined")
  return (
    <>
      <MapContainer
        className="fixed full-height-map"
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        zoomControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <CurrentLocationMarker />
      </MapContainer>
    </>
  );
};

export default MapComponent;
