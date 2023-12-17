import { Icon, LatLng } from "leaflet";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Marker, useMap } from "react-leaflet";
import CurrentLocationMarker from "./CurrentLocationMarker";
import { Button } from "./ui/button";

const ISSUES = [
  {
    id: "0",
    lat: 20.25,
    lng: 85.82,
  },
  {
    id: "1",
    lat: 51.05,
    lng: 0.09,
  },
  {
    id: "2",
    lat: 19,
    lng: 78,
  },
];

const MapComponent = ({
  setSelectedIncidentId,
}: {
  setSelectedIncidentId: Dispatch<SetStateAction<string>>;
}) => {
  const [position, setPosition] = useState<LatLng | null>(null);
  const map = useMap();
  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      console.log(e.latlng);
      map.setView(e.latlng, map.getZoom());
    });
  }, []);

  return (
    <>
      <CurrentLocationMarker position={position as LatLng} />

      {/* <Button className="relative z-5">Locate Me</Button> */}

      {ISSUES.map((issue) => (
        <Marker
          key={issue.id}
          position={[issue.lat, issue.lng]}
          icon={
            new Icon({
              iconUrl: "/waterIssueMarkerIcon.png",
              iconSize: [50, 50],
            })
          }
          eventHandlers={{
            click: () => {
              console.log(`Clicked on ${issue.id}`)
              setSelectedIncidentId(issue.id)
            }
          }}
        >
          {/* <Popup>This is an issue</Popup> */}
        </Marker>
      ))}
    </>
  );
};

export default MapComponent;
