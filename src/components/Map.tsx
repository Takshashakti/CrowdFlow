"use client";

import {
  MapContainer,
  TileLayer,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import MapComponent from "./MapComponent";

const MMap = ({ setSelectedIncidentId }: {
  setSelectedIncidentId: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <>
      <MapContainer
        className="fixed full-height-map"
        center={[20.25, 85.82]}
        zoom={13}
        // scrollWheelZoom={false}
        zoomControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MapComponent setSelectedIncidentId={setSelectedIncidentId} />
      </MapContainer>
    </>
  );
};

export default MMap;
