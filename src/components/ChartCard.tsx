import React from "react";
import Image from "next/image";

function ChartCard() {
  return (
    <div className="flex flex-col rounded-md bg-slate-300 p-2">
      <h3 className="mb-2 text-xl">Age</h3>
      <Image src="" width={500} height={500} alt="graph" />
    </div>
  );
}

export default ChartCard;
