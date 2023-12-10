"use client";

import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";

type PropType = {
  selectedImages: Blob[];
};

// list of water related issues report types
enum ReportType {
  "None",
  "Flooding",
  "WaterShortage",
  "WaterQuality",
  "Pollution",
  "WaterBorneDisease",
  "WaterLeakage",
  "WaterTheft",
  "WaterLogging",
  "Others",
}

const ReportIncidentForm: React.FC<PropType> = (props) => {
  const { selectedImages } = props;

  const [reportType, setReportType] = useState<ReportType>(ReportType.None);
  const [reportTypeOpen, setReportTypeOpen] = useState(false);

  return (
    <div className="flex flex-col px-6 ">
      <form className="flex flex-col ">
        <div className="flex flex-col gap-7"></div>
        <div className="flex flex-col">
          <div className="flex justify-between font-bold"></div>
          <Input
            type="text"
            name="Name"
            className=" border px-1 py-2 text-l rounded-md bg-slate-100"
            placeholder=" Report Name"
          />
        </div>
        <br></br>
        <div className="flex flex-col">
          <div className="flex justify-between font-bold"></div>
          <Textarea
            name="Description"
            className=" border h-44 px-1 py-2 text-l rounded-md bg-slate-100"
            placeholder=" Report Description"
          />
        </div>
        <br></br>

        <div className="flex flex-col">
          <Popover open={reportTypeOpen} onOpenChange={setReportTypeOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={reportTypeOpen}
                className="w-full justify-start"
              >
                {reportType ? reportType.toString() : "Select issue type..."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full">
              <Command>
                <CommandInput placeholder="Search issue type..." />
                <CommandEmpty>No Report type found.</CommandEmpty>
                <CommandGroup>
                  {Object.values(ReportType).map(
                    (type) =>
                      type.toString().length > 3 && (
                        <CommandItem
                          key={type}
                          value={type.toString()}
                          onSelect={(currentValue) => {
                            setReportType(
                              (currentValue === reportType.toString()
                                ? "None"
                                : currentValue) as unknown as ReportType
                            );
                            setReportTypeOpen(false);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              reportType === type ? "opacity-100" : "opacity-0"
                            )}
                          />
                          {type}
                        </CommandItem>
                      )
                  )}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
        </div>

        <br></br>

        <div className="flex ">
          <Checkbox
            name="checkbox"
            className=" border  w-1 h-1  px-2 py-2  rounded-sm bg-slate-200"
          />
          <div className="flex justify-between mx-4 font-italic">
            <label htmlFor="phone">
              I declare my report as accurate. I will be held accountable in
              case of any wrong reporting.
            </label>
          </div>
        </div>
        <br></br>

        <Button type="submit">Report Incident</Button>
      </form>
    </div>
  );
};

export default ReportIncidentForm;
