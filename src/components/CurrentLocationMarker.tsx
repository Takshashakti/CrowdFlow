"use client";

import { LatLng } from "leaflet";
import { useEffect, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";

const CurrentLocationMarker = () => {
  const [position, setPosition] = useState<LatLng | null>(null);
  const map = useMap();
  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      console.log(position)
      map.flyTo(e.latlng, map.getZoom());
    });
  }, []);

  return position === null ? null : (
    <Marker position={position}>
      <Popup>Nigga</Popup>
    </Marker>
  );
};

export default CurrentLocationMarker;
