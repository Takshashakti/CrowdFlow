"use client";

import { LatLng } from "leaflet";
import { useEffect, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

const CurrentLocationMarker = ({ position }: { position: LatLng }) => {
  

  return position === null ? null : (
    <Marker
      position={position}
      icon={
        new Icon({
          iconUrl: "/currentLocationIcon.png",
          iconSize: [75, 75],
        })
      }
    >
      <Popup>You are here!</Popup>
    </Marker>
  );
};

export default CurrentLocationMarker;
