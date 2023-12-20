"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import DashboardSidePannel from "@/components/DashboardSidePannel";

const MapNoSSR = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

function DashboardMap() {
  const [selectedIncidentId, setSelectedIncidentId] = useState<string>("");

  return (
    <>
      <DashboardSidePannel activeTab="map" />
      <div className="p-4 sm:ml-[calc(15vw)]">
        <MapNoSSR setSelectedIncidentId={setSelectedIncidentId} />
      </div>
    </>
  );
}

export default DashboardMap;
