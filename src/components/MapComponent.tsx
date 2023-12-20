"use client";

import { Icon, LatLng } from "leaflet";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Marker, useMap } from "react-leaflet";
import CurrentLocationMarker from "./CurrentLocationMarker";

interface Issue {
  id: number;
  user_id: number;
  title: string;
  description: string;
  image_url: string;
  type: string;
  latitude: number;
  longitude: number;
  city: string;
  state: string;
  district: string;
  time: number;
  incidents_id: number;
}

const MapComponent = ({
  setSelectedIncidentId,
}: {
  setSelectedIncidentId: Dispatch<SetStateAction<string>>;
}) => {
  const [position, setPosition] = useState<LatLng | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);
  const map = useMap();
  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      console.log(e.latlng);
      map.setView(e.latlng, map.getZoom());
    });
  }, []);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://crowdflowworkers.karmakarmeghdip.workers.dev/report/getall"
      );
      const issuesRes = (await res.json()) as Issue[];
      console.log(issuesRes);
      setIssues(issuesRes);
    })();
  }, []);

  return (
    <>
      <CurrentLocationMarker position={position as LatLng} />

      {/* <Button className="absolute z-5">Locate Me</Button> */}

      {issues.map((iss) =>
        iss.latitude === null ? (
          null
        ) : (
          <Marker
            key={iss.id}
            position={[iss.latitude, iss.longitude]}
            icon={
              new Icon({
                iconUrl: "/waterIssueMarkerIcon.png",
                iconSize: [50, 50],
              })
            }
            eventHandlers={{
              click: () => {
                console.log(`Clicked on ${iss.id}`);
                setSelectedIncidentId(`${iss.id}`);
              },
            }}
          ></Marker>
        )
      )}
    </>
  );
};

export default MapComponent;
