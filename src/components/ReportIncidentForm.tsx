"use client";

import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { INCIDENT_CATEGORIES } from "@/lib/config/config";
import axios from "axios";
import { SheetClose } from "./ui/sheet";
import { Card, CardContent } from "./ui/card";
import { useGeolocation } from "@uidotdev/usehooks";

const reverseGeocode = async (lat: string, lng: string) => {
  const res = await axios.get<ReverseGeocodeResponse>(
    `https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}`
  );
  return res.data;
};

type PropType = {
  selectedImages: Blob[];
  reportName: string;
  setReportName: Dispatch<SetStateAction<string>>;
  reportDescription: string;
  setReportDescription: Dispatch<SetStateAction<string>>;
  reportCategory: string;
  setReportCategory: Dispatch<SetStateAction<string>>;
  setSubmitted: Dispatch<SetStateAction<boolean>>;
  address: ReverseGeocodeResponse | undefined;
  setAddress: Dispatch<SetStateAction<ReverseGeocodeResponse | undefined>>;
  // lat: string;
  setUserLat: Dispatch<SetStateAction<string>>;
  // lng: string;
  setUserLng: Dispatch<SetStateAction<string>>;
  submitted: boolean;
};

const ReportIncidentForm: React.FC<PropType> = (props) => {
  const [agreed, setAgreed] = useState<boolean>(false);
  // const { loading, latitude, longitude } = useGeolocation();

  const [reportCategory, setReportCategory] = useState<string>("");
  const [reportDescription, setReportDescription] = useState<string>("");
  const [reportName, setReportName] = useState<string>("");
  const [address, setAddress] = useState<ReverseGeocodeResponse | null>(null);

  const { loading, latitude, longitude } = useGeolocation();
  const [lat, setLat] = useState<string>();
  const [lng, setLng] = useState<string>();

  useEffect(() => {
    if (!loading) {
      setLat(latitude?.toString());
      setLng(longitude?.toString());
      props.setUserLat(latitude?.toString() as string);
      props.setUserLng(longitude?.toString() as string);
    }
  }, [loading, lat, lng]);

  useEffect(() => {
    (async () => {
      // console.log(await reverseGeocode("80", "53"))
      if (!loading) {
        const res = await reverseGeocode(
          encodeURI(lat as string),
          encodeURI(lng as string)
        );
        // props.setAddress(`${res.county}, ${res.state}, ${res.region}, ${res.country}`)
        setAddress(res);
      }
    })();
    console.log("adress done");
  }, [lat, lng]);

  useEffect(() => {
    if (address !== null) console.log(JSON.stringify(address));
  }, [address]);

  useEffect(() => {
    if (address) {
      const { city, state, district } = address.address;
      console.log(city+state+district);
      (async () => {
          const res = await fetch(
            "https://crowdflowworkers.karmakarmeghdip.workers.dev/report/register",
            {
              method: "POST",
              mode: "no-cors",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({
                user_id: 1,
                title: reportName,
                description: reportDescription,
                type: reportCategory,
                // images: selectedImages,
                image_url: JSON.stringify(address),
                city: "city",
                state: "state",
                district: "district",
                latitude: parseFloat(lat as string),
                longitude: parseFloat(lng as string),
              }),
            }
          );

          console.log(await res.json());
      })();
    }
  }, [props.submitted, address]);

  return (
    <div className="flex flex-col px-6 ">
      <form className="flex flex-col gap-4 py-7">
        {/* <Textarea
          name="Description"
          className=" border px-1 py-2 text-l rounded-md bg-slate-100"
          placeholder=" Report Description"
          value={props.address}
          disabled
        /> */}
        <Card className="flex flex-col items-center">
          <CardContent className="">
            <span className="">
              {loading ? "loading" : address?.display_name}
            </span>
          </CardContent>
        </Card>

        <Input
          type="text"
          name="Name"
          value={reportName}
          onChange={(e) => {
            setReportName(e.target.value);
          }}
          className=" border px-1 py-2 text-l rounded-md bg-slate-100"
          placeholder=" Report Name"
        />

        <Textarea
          name="Description"
          className=" border h-44 px-1 py-2 text-l rounded-md bg-slate-100"
          placeholder=" Report Description"
          value={reportDescription}
          onChange={(e) => {
            setReportDescription(e.target.value);
          }}
        />

        <div className="flex flex-col">
          <Select
            value={reportCategory}
            onValueChange={setReportCategory}
            defaultValue={INCIDENT_CATEGORIES[0]}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose an incident..." />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {INCIDENT_CATEGORIES.map((category) => {
                  return (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* <div className="flex w-full justify-between text-sm">
          <span>Number of attatched images:</span>
          <span>{props.selectedImages.length}</span>
        </div> */}

        <div className="flex items-center">
          <Checkbox
            name="checkbox"
            checked={agreed}
            onCheckedChange={() => {
              setAgreed((prev) => !prev);
            }}
          />

          <div className="flex justify-between ml-5">
            <label htmlFor="phone" className="text-xs">
              I declare my report as accurate. I will be held accountable in
              case of any wrong reporting.
            </label>
          </div>
        </div>
        <br></br>

        <Button
          disabled={(!agreed || address === null || reportName === "" || reportDescription === "")}
          onClick={(e) => {
            e.preventDefault();
            props.setSubmitted(true);
          }}
        >
          Submit Report
        </Button>
      </form>
    </div>
  );
};

export default ReportIncidentForm;
