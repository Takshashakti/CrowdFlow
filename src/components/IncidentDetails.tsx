"use client";

import React, { useEffect, useState } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { Check, CrossIcon, X } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { DialogHeader, DialogTitle, DialogContent, DialogTrigger } from "./ui/dialog";
import axios from "axios";

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
    (async () => {
      if (props.disasterID === "") return;
      const res = await fetch(
        `https://crowdflowworkers.karmakarmeghdip.workers.dev/report/get?id=${props.disasterID}`
      );
      const disaster = await res.json();
      setDisasterDetails(disaster[0]);
    })();
    // axios
    //   .get<DisasterDetails>(
    //     `https://crowdflowworkers.karmakarmeghdip.workers.dev/report/get?id=${props.disasterID}`
    //   )
    //   .then((res) => setDisasterDetails(res.data));
  });

  useEffect(() => {
    console.log(disasterDetails);
  }, [disasterDetails]);

  const getStatusColor = (status: string | undefined) => {
    if (status === "Ongoing") {
      return "bg-orange-500";
    } else if (status === "Resolved") {
      return "bg-blue-500";
    } else {
      return "bg-red-500";
    }
  };
  const [status, setStatus] = useState(
    //fetch
    "forwarded"
  );

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{disasterDetails?.title}</DialogTitle>
      </DialogHeader>
      {/* <h1 className="text-3xl font-bold text-justify pt-5 pb-2">
        {disasterDetails?.title}
      </h1> */}
      <div className="w-full flex items-center text-justify">
        <span
          className={`flex text-center rounded-xl p-2 font-bold text-xs ${getStatusColor(
            "Ongoing"
          )}`}
        >
          Ongoing
        </span>
      </div>

      {status == "reported" && (
        <div>
          <ol className="relative ml-5 border-s border-l-2 px-1 border-gray-400 dark:border-gray-900">
            <li className="mb-10 ms-2">
              <div className="absolute  w-3 h-3 bg-green-500 rounded-full mt-1.5. -start-1.5 border border-green dark:border-green-900 dark:bg-gray-900"></div>
              <h3 className="text-md font-semibold text-gray-900 dark:text-white text-left ml-4">
                Reported
              </h3>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute  w-3 h-3 bg-gray-200 rounded-full mt-1.5. -start-1.5 border border-green dark:border-green-900 dark:bg-gray-900"></div>
              <h3 className="text-md font-semibold text-gray-900 dark:text-white text-left ml-3">
                Fowarded
              </h3>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute  w-3 h-3 bg-gray-200 rounded-full mt-1.5. -start-1.5 border border-green dark:border-green-900 dark:bg-gray-900"></div>
              <h3 className="text-md font-semibold text-gray-900 dark:text-white text-left ml-3">
                Accepted
              </h3>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 className="text-md font-semibold text-gray-900 dark:text-white text-left ml-3">
                Worker Assigned
              </h3>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 mb-0 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 className="text-md font-semibold text-gray-900 dark:text-white text-left ml-3">
                Resolved
              </h3>
            </li>
          </ol>
        </div>
      )}
      {status == "forwarded" && (
        <div>
          <ol className="relative ml-5 border-s border-l-2 px-1 border-gray-400 dark:border-gray-900">
            <li className="mb-10 ms-2">
              <div className="absolute  w-3 h-3 bg-green-500 rounded-full mt-1.5. -start-1.5 border border-green dark:border-green-900 dark:bg-gray-900"></div>
              <h3 className="text-md font-semibold text-gray-900 dark:text-white text-left ml-4">
                Reported
              </h3>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute  w-3 h-3 bg-green-500 rounded-full mt-1.5. -start-1.5 border border-green dark:border-green-900 dark:bg-gray-900"></div>
              <h3 className="text-md font-semibold text-gray-900 dark:text-white text-left ml-3">
                Fowarded
              </h3>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute  w-3 h-3 bg-gray-200 rounded-full mt-1.5. -start-1.5 border border-green dark:border-green-900 dark:bg-gray-900"></div>
              <h3 className="text-md font-semibold text-gray-900 dark:text-white text-left ml-3">
                Accepted
              </h3>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 className="text-md font-semibold text-gray-900 dark:text-white text-left ml-3">
                Worker Assigned
              </h3>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 mb-0 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 className="text-md font-semibold text-gray-900 dark:text-white text-left ml-3">
                Resolved
              </h3>
            </li>
          </ol>
        </div>
      )}
      {status == "accepted" && (
        <div>
          <ol className="relative ml-5 border-s border-l-2 px-1 border-gray-400 dark:border-gray-900">
            <li className="mb-10 ms-2">
              <div className="absolute  w-3 h-3 bg-green-500 rounded-full mt-1.5. -start-1.5 border border-green dark:border-green-900 dark:bg-gray-900"></div>
              <h3 className="text-md font-semibold text-gray-900 dark:text-white text-left ml-4">
                Reported
              </h3>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute  w-3 h-3 bg-green-500 rounded-full mt-1.5. -start-1.5 border border-green dark:border-green-900 dark:bg-gray-900"></div>
              <h3 className="text-md font-semibold text-gray-900 dark:text-white text-left ml-3">
                Fowarded
              </h3>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute  w-3 h-3 bg-green-500 rounded-full mt-1.5. -start-1.5 border border-green dark:border-green-900 dark:bg-gray-900"></div>
              <h3 className="text-md font-semibold text-gray-900 dark:text-white text-left ml-3">
                Accepted
              </h3>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 className="text-md font-semibold text-gray-900 dark:text-white text-left ml-3">
                Worker Assigned
              </h3>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 mb-0 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 className="text-md font-semibold text-gray-900 dark:text-white text-left ml-3">
                Resolved
              </h3>
            </li>
          </ol>
        </div>
      )}
      {status == "worker assigned" && (
        <div>
          <ol className="relative ml-5 border-s border-l-2 px-1 border-gray-400 dark:border-gray-900">
            <li className="mb-10 ms-2">
              <div className="absolute  w-3 h-3 bg-green-500 rounded-full mt-1.5. -start-1.5 border border-green dark:border-green-900 dark:bg-gray-900"></div>
              <h3 className="text-md font-semibold text-gray-900 dark:text-white text-left ml-4">
                Reported
              </h3>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute  w-3 h-3 bg-green-500 rounded-full mt-1.5. -start-1.5 border border-green dark:border-green-900 dark:bg-gray-900"></div>
              <h3 className="text-md font-semibold text-gray-900 dark:text-white text-left ml-3">
                Fowarded
              </h3>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute  w-3 h-3 bg-green-500 rounded-full mt-1.5. -start-1.5 border border-green dark:border-green-900 dark:bg-gray-900"></div>
              <h3 className="text-md font-semibold text-gray-900 dark:text-white text-left ml-3">
                Accepted
              </h3>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 className="text-md font-semibold text-gray-900 dark:text-white text-left ml-3">
                Worker Assigned
              </h3>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 mb-0 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 className="text-md font-semibold text-gray-900 dark:text-white text-left ml-3">
                Resolved
              </h3>
            </li>
          </ol>
        </div>
      )}

      {status == "resolved" && (
        <div>
          <ol className="relative ml-5 border-s border-l-2 px-1 border-gray-400 dark:border-gray-900">
            <li className="mb-10 ms-2">
              <div className="absolute  w-3 h-3 bg-green-500 rounded-full mt-1.5. -start-1.5 border border-green dark:border-green-900 dark:bg-gray-900"></div>
              <h3 className="text-md font-semibold text-gray-900 dark:text-white text-left ml-4">
                Reported
              </h3>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute  w-3 h-3 bg-green-500 rounded-full mt-1.5. -start-1.5 border border-green dark:border-green-900 dark:bg-gray-900"></div>
              <h3 className="text-md font-semibold text-gray-900 dark:text-white text-left ml-3">
                Fowarded
              </h3>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute  w-3 h-3 bg-green-500 rounded-full mt-1.5. -start-1.5 border border-green dark:border-green-900 dark:bg-gray-900"></div>
              <h3 className="text-md font-semibold text-gray-900 dark:text-white text-left ml-3">
                Accepted
              </h3>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 className="text-md font-semibold text-gray-900 dark:text-white text-left ml-3">
                Worker Assigned
              </h3>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 mb-0 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 className="text-md font-semibold text-gray-900 dark:text-white text-left ml-3">
                Resolved
              </h3>
            </li>
          </ol>
        </div>
      )}

      <div className="w-full flex items-center justify-center">
        {/* <span className='flex text-center items-center justify-center align-middle w-[50%] h-[5dvh] rounded-xl bg-slate-800 mx-2 font-bold font-sans text-white'>num_reports}</span>
            <span className='flex text-center items-center justify-center align-middle w-[50%] h-[5dvh] rounded-xl bg-slate-800 mx-2 font-bold font-sans text-white'>Credibility: {disasterDetails?.credibility}</span> */}

        <DialogTrigger asChild>
          <Button className={cn("bg-green-700 w-[50%] mx-2")} onClick={() => {
            fetch("https://crowdflowworkers.karmakarmeghdip.workers.dev/report/upvote?id=" + disasterDetails?.user_id)
          }}>
            <Check className="w-10 h-10" />
          </Button>
        </DialogTrigger>

        <DialogTrigger asChild>
          <Button className={cn("bg-green-700 w-[50%] mx-2")}>
            <X className="w-10 h-10"/>
          </Button>
        </DialogTrigger>
      </div>

      <br />
      <br />

      {/* there has to be a tab for descriptions(from all diff reports) and notifications (given by government, a list of strings) */}
      {/* https://www.figma.com/file/4NqbJXauu7HUOQrd2iPT7x/CrowdFlow?type=design&node-id=197-103&mode=design&t=NSF6dR6kLe8dHN7V-0 */}
    </DialogContent>
  );
};

export default IncidentDetails;
