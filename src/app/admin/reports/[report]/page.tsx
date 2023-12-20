"use client";

import React, { use, useEffect } from "react";
import EmblaCarousel from "../../../../components/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel-react";
import "../../../css/sandbox.css";
import "../../../css/embla.css";
import DashboardSidePannel from "@/components/DashboardSidePannel";
import { useLocalStorage } from "@/lib/hooks/use-local-storage";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button";


const OPTIONS: EmblaOptionsType = { dragFree: true, containScroll: "trimSnaps" };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

type Report = {
  id: number;
  user_id: number;
  description: string;
  image_url: string;
  type: string;
  incidents_id: number;
  title: string;
  latitude: number;
  longitude: number;
  city: string | null; // Assuming 'address?.address.city' may be null
  state: string | null; // Assuming 'address?.address.state' may be null
  district: string | null; // Assuming 'address?.address.district' may be null
};

type Incident = {
  id: number,
  city: string
  state: string
  district: string
  statis: string
};

type User = {
  name: string;
  age: number;
  id: number;
  phnNo: string;
  gender: string;
};


export default function Report({ params }: { params: { report: string } }) {
  // const { incidentId } = params;

  const [reportsData, setReportsData] = React.useState<Report[]>([{
    id: 1,
    user_id: 1,
    title: "reportTitle",
    description: "reportDescription",
    image_url: "",
    incidents_id: 0,
    type: "reportCategory",
    latitude: 69.42,
    longitude: 69.42,
    city: "exampleCity", // Replace with actual city or null
    state: "exampleState", // Replace with actual state or null
    district: "exampleDistrict", // Replace with actual district or null
  }]);

  const [incidentTitle, setIncidentTitle] = React.useState<string>("");
  const [images, setImages] = React.useState<string[]>([]);
  const [users, setUsers] = useLocalStorage<User[]>("users", []);
  const [assigne, setAssigne] = React.useState<User | null>(null);


  useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://crowdflowworkers.karmakarmeghdip.workers.dev/report/getall"
      );

      const resJ = await res.json();
      // const resJ2 = resJ.filter((report: Report) => report.incidents_id === parseInt(params.report));

      // let incidents: any = {};
      // for (let i = 0; i < resJ.length; i++) {
      //   if (resJ[i].incidents_id === parseInt(params.report)) {
      //     if (incidents[resJ[i].incidents_id] === undefined) {
      //       incidents[resJ[i].incidents_id] = [];
      //     }
      //     incidents[resJ[i].incidents_id].push(resJ[i]);
      //   }
      // }

      let incidents: Report[] = [];
      for (let i = 0; i < resJ.length; i++) {
        if (resJ[i].incidents_id === parseInt(params.report)) {
          incidents.push(resJ[i]);
        }
      }

      // setIncidentTitle(incidents[0][0].title);
      setIncidentTitle("Dummy Report Title");
      setReportsData(incidents);

      // temp
      setImages(["https://picsum.photos/200/300?asd=1", "https://picsum.photos/200/300?asd=31", "https://picsum.photos/200/300?asd=13", "https://picsum.photos/200/300?asd=231", "https://picsum.photos/200/300?asd=431", "https://picsum.photos/200/300?asd=21", "https://picsum.photos/200/300?asd=21"]);
    })();
  }, []);

  function assignUser()
  {

  }

  return (
    <>
      <DashboardSidePannel activeTab="report" />

      <div className="mx-[22%] w-[75%]">

        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold">{incidentTitle}</h1>
        </div>

        <br /> <br />

        <div className="flex flex-col justify-center items-center w-[50?vh]">
          <EmblaCarousel slides={images} options={OPTIONS} />
        </div>

        <br /> <br />

        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold">Assign Issue to:</h1>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Worker" />
            </SelectTrigger>
            <SelectContent>
            {users.map((user) => (
              <SelectItem key={user.id} value={user.id + ""}>
                {user.name}
              </SelectItem>
            ))}
            </SelectContent>
          </Select>

          <Button onClick={assignUser}>
            Assign
          </Button>

        </div>



        <br /> <br />

        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold">Descriptions:</h1>
        </div>

        <br />

        {
          reportsData.map((report, ind) => (
            <div className="flex flex-col justify-center items-center bg-slate-200 rounded-2xl mx-auto my-10 py-10" key={ind}>
              <h1 className="text-2xl font-bold">{report.title}</h1>
              <p className="text-xl">{report.description}</p>
            </div>
          ))
        }



      </div>
    </>
  );
}
