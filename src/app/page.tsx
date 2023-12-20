"use client";

import HomeSearchBar from "@/components/HomeSearchBar";
import IncidentDetails from "@/components/IncidentDetails";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import NewIncidentSheet from "@/components/NewIncidentSheet";
import TaskViewItems from "@/components/TaskViewItems";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";
import { useState } from "react";

const MapNoSSR = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

export default function Home() {


  const [selectedIncidentId, setSelectedIncidentId] = useState<string>("");

  return (
    <>
      <MapNoSSR setSelectedIncidentId={setSelectedIncidentId} />
      <Dialog
        open={selectedIncidentId !== ""}
        onOpenChange={() => {
          setSelectedIncidentId("");
        }}
      >
        <DialogContent ><IncidentDetails disasterID={"1"} /></DialogContent>
      </Dialog>
      <MaxWidthWrapper>
        <div className="flex flex-col justify-between w-full h-full">
          <HomeSearchBar />
          <div className="flex flex-col w-full gap-2 justify-between">
            <Sheet>
              {1 && (
                <SheetTrigger asChild className="w-full z-10">
                  <Button className="w-full">Assigned Tasks</Button>
                </SheetTrigger>
              )}
              <SheetContent side="bottom">
                <SheetHeader>
                  <SheetTitle>Assigned Tasks</SheetTitle>
                </SheetHeader>
                <div className="overflow-scroll max-h-[25rem]">
                {/* <TaskViewItems className="border rounded-md">{task.task1}</TaskViewItems>
                <TaskViewItems className="border rounded-md">{task.task2}</TaskViewItems>
                <TaskViewItems className="border rounded-md">{task.task3}</TaskViewItems>
                <TaskViewItems className="border rounded-md">{task.task4}</TaskViewItems>
                <TaskViewItems className="border rounded-md">{task.task5}</TaskViewItems>
                <TaskViewItems className="border rounded-md">{task.task6}</TaskViewItems>
                <TaskViewItems className="border rounded-md">{task.task7}</TaskViewItems>
                <TaskViewItems className="border rounded-md">{task.task8}</TaskViewItems>
                <TaskViewItems className="border rounded-md">{task.task9}</TaskViewItems>
                <TaskViewItems className="border rounded-md">{task.task10}</TaskViewItems> */}
                </div>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild className="w-full z-10 ">
                <Button className="w-full">Report New Incident</Button>
              </SheetTrigger>

              <SheetContent side="bottom">
                <SheetHeader>
                  <SheetTitle>Report New Incident</SheetTitle>
                </SheetHeader>
                <NewIncidentSheet />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
