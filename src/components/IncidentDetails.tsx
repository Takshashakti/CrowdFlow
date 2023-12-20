"use client";

import React, { useEffect } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { Check, CrossIcon, X } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "./MaxWidthWrapper";

type PropType = {
  disasterID: string;
};

interface DisasterDetails {
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

const IncidentDetails: React.FC<PropType> = (props) => {
  const [disasterDetails, setDisasterDetails] =
    React.useState<DisasterDetails | null>(null);

  useEffect(() => {
    async function fetchDisasterDetails() {
      // const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
      //const data = await res.json();

      // Create a dummy data
    //   const data: DisasterDetails = {
    //     id: 1,
    //     title: "Flood in Bhubaneswar",
    //     type: "Flood",
    //     avg_loc: "1.283, 103.843",
    //     address: "Blk 123, Clementi Ave 3, #01-11, 231534",
    //     status: "Ongoing",
    //     num_reports: 10,
    //     credibility: 0.8,
    //   };
      const res = await fetch(`https://crowdflowworkers.karmakarmeghdip.workers.dev/incident/get?id=${props.disasterID}`)
      const disaster = await res.json();
      console.log(disaster[0]);
      setDisasterDetails(disaster[0]);
    }
    fetchDisasterDetails();
  }, []);

  const getStatusColor = (status: string | undefined) => {
    if (status === "Ongoing") {
      return "bg-orange-500";
    } else if (status === "Resolved") {
      return "bg-blue-500";
    } else {
      return "bg-red-500";
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-justify pt-5 pb-2">
        {disasterDetails?.title}
      </h1>

      <div className="w-full flex items-center text-justify">
        <span
          className={`flex text-center rounded-xl p-2 font-bold text-xs ${getStatusColor(
            "Ongoing"
          )}`}
        >
          Ongoing
        </span>
      </div>

      <br />

      {/* <h1> IMAGES OF ALL REPORTS OF ALL DISASTERS HERE! </h1> */}

      <br />

      {/* only show this if user withing disaster radius */}
      {/* <div className="w-full flex items-center justify-center">
        <span className="flex text-center items-center justify-center align-middle w-[50%] h-[5dvh] rounded-xl bg-slate-800 mx-2 font-bold font-sans text-white">
          Reports: {disasterDetails?.num_reports}
        </span>
        <span className="flex text-center items-center justify-center align-middle w-[50%] h-[5dvh] rounded-xl bg-slate-800 mx-2 font-bold font-sans text-white">
          Credibility: {disasterDetails?.credibility}
        </span>
      </div> */}

      <br />

      <div className="w-full flex items-center justify-center">
        {/* <span className='flex text-center items-center justify-center align-middle w-[50%] h-[5dvh] rounded-xl bg-slate-800 mx-2 font-bold font-sans text-white'>num_reports}</span>
            <span className='flex text-center items-center justify-center align-middle w-[50%] h-[5dvh] rounded-xl bg-slate-800 mx-2 font-bold font-sans text-white'>Credibility: {disasterDetails?.credibility}</span> */}

        <Button className={cn("w-[50%] mx-2 bg-green-700")}>
          <Check />
        </Button>
        <Button className={cn("w-[50%] mx-2 bg-red-700")}>
          <X />
        </Button>
      </div>

      <br />
      <br />

      {/* there has to be a tab for descriptions(from all diff reports) and notifications (given by government, a list of strings) */}
      {/* https://www.figma.com/file/4NqbJXauu7HUOQrd2iPT7x/CrowdFlow?type=design&node-id=197-103&mode=design&t=NSF6dR6kLe8dHN7V-0 */}
    </>
  );
};

export default IncidentDetails;
