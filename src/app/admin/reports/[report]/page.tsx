// "use client";

// import React, { useEffect } from "react";

// type DisasterDetails = {
//   id: number;
//   title: string;
//   type: string;
//   avg_loc: string;
//   address: string;
//   status: string;
//   num_reports: number;
//   credibility: number;
// };

// export default function page(props: any) {
//   const [disasterDetails, setDisasterDetails] =
//     React.useState<DisasterDetails | null>(null);

//   useEffect(() => {
//     async function fetchDisasterDetails() {
//       // const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
//       //const data = await res.json();

//       // Create a dummy data
//       const data: DisasterDetails = {
//         id: 1,
//         title: "Flood in hyderabad",
//         type: "Flood",
//         avg_loc: "1.283, 103.843",
//         address: "Blk 123, Clementi Ave 3, #01-11, 231534",
//         status: "Ongoing",
//         num_reports: 10,
//         credibility: 0.8,
//       };
//       setDisasterDetails(data);
//     }
//     fetchDisasterDetails();
//   }, []);

//   const getStatusColor = (status: string | undefined) => {
//     if (status === "Ongoing") {
//       return "bg-orange-500";
//     } else if (status === "Resolved") {
//       return "bg-blue-500";
//     } else {
//       return "bg-red-500";
//     }
//   };

//   return (
//     <>
//       <h1 className="text-3xl font-bold text-justify pt-5 pb-2">
//         {disasterDetails?.title}
//       </h1>
//     </>
//   );
// }

import React from "react";
import EmblaCarousel from "../../../../components/EmblaCarouselDashboard";
import { EmblaOptionsType } from "embla-carousel-react";
import "../../../css/sandbox.css";
import "../../../css/embla.css";

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Report({ params }: { params: { report: string } }) {
  return (
    <>
      <div className="p-5">
        <div>hiii</div>
        {/* <section className="sandbox__carousel">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </section> */}
        <div className="flex">
          <div className="">photo</div>
          <div>photo</div>
        </div>
      </div>
    </>
  );
}
