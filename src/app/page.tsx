"use client";

import HomeSearchBar from "@/components/HomeSearchBar";
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
  // if (typeof window !== "undefined")
    // if (window.localStorage.getItem("userAuthToken") === null) {
    //   redirect("/signup");
    // }

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
        <DialogContent>{selectedIncidentId}</DialogContent>
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
                <TaskViewItems className="border rounded-md">Task1</TaskViewItems>
                <TaskViewItems className="border rounded-md">Task2</TaskViewItems>
                <TaskViewItems className="border rounded-md">Task3</TaskViewItems>
                <TaskViewItems className="border rounded-md">Task4</TaskViewItems>
                <TaskViewItems className="border rounded-md">Task5</TaskViewItems>
                <TaskViewItems className="border rounded-md">Task6</TaskViewItems>
                <TaskViewItems className="border rounded-md">Task7</TaskViewItems>
                <TaskViewItems className="border rounded-md">Task8</TaskViewItems>
                <TaskViewItems className="border rounded-md">Task9</TaskViewItems>
                <TaskViewItems className="border rounded-md">Task10</TaskViewItems>
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
