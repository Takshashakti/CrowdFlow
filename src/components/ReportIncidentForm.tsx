"use client";

import React, { Dispatch, SetStateAction, useRef, useState } from "react";
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

type PropType = {
  selectedImages: Blob[];
  reportName: string;
  setReportName: Dispatch<SetStateAction<string>>;
  reportDescription: string;
  setReportDescription: Dispatch<SetStateAction<string>>;
  reportCategory: string;
  setReportCategory: Dispatch<SetStateAction<string>>;
  setSubmitted: Dispatch<SetStateAction<boolean>>;
};

const ReportIncidentForm: React.FC<PropType> = (props) => {
  const [agreed, setAgreed] = useState<boolean>(false);

  return (
    <div className="flex flex-col px-6 ">
      <form className="flex flex-col gap-4 py-7">
        <Input
          type="text"
          name="Name"
          value={props.reportName}
          onChange={(e) => {
            props.setReportName(e.target.value);
          }}
          className=" border px-1 py-2 text-l rounded-md bg-slate-100"
          placeholder=" Report Name"
        />

        <Textarea
          name="Description"
          className=" border h-44 px-1 py-2 text-l rounded-md bg-slate-100"
          placeholder=" Report Description"
          value={props.reportDescription}
          onChange={(e) => {
            props.setReportDescription(e.target.value);
          }}
        />

        <div className="flex flex-col">
          <Select
            value={props.reportCategory}
            onValueChange={props.setReportCategory}
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
          disabled={!agreed}
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
