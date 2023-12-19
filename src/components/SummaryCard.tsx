import React from "react";
import Image from "next/image";

function SummaryCard() {
  return (
    <div className="flex flex-col rounded-md bg-violet-800 p-2 text-white">
      <div className="text-lg">REPORT RAISED</div>
      <div className="text-3xl">749</div>
    </div>
  );
}

export default SummaryCard;
