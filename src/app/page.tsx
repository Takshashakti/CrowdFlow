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
import { useEffect, useState } from "react";

const MapNoSSR = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

type task={
  id:number,
  title: string,
  name:string,
  token:string,
  phone:string,
  gender:string,
  age:number,
}

export default function Home() {
  const [selectedIncidentId, setSelectedIncidentId] = useState<string>("");
  const [task, setTask] = useState([]);
  useEffect(()=>{
    (async()=>{
      const user: task = JSON.parse(localStorage.getItem("UserObject") as string)
      const res=await fetch("https://crowdflowworkers.karmakarmeghdip.workers.dev/incident/assign="+user.id )
      const arr=await res.json()
      setTask(arr);
    })()
  })
  useEffect(() => {
    if (Array.isArray(task)) {
      task.forEach((item, index) => {
        if (item !== null) {
          console.log(`Task ${index}:`, item);
        }
      });
    }
  }, [task]);


  return (
    <div>
      <MapNoSSR setSelectedIncidentId={setSelectedIncidentId} />
      <Dialog
        open={selectedIncidentId !== ""}
        onOpenChange={() => {
          setSelectedIncidentId("");
        }}
      >
        <DialogContent>
          <IncidentDetails disasterID={"1"} />
        </DialogContent>
      </Dialog>
      <MaxWidthWrapper>
        <div className="flex flex-col justify-between w-full h-full">
          <HomeSearchBar />
          <div className="flex flex-col w-full gap-2 justify-between">
            
              <Sheet>
                <SheetTrigger asChild className="w-full z-10">
                  <Button className="w-full">Assigned Tasks</Button>
                </SheetTrigger>

                <SheetContent side="bottom">
                  <SheetHeader>
                    <SheetTitle>Assigned Tasks</SheetTitle>
                  </SheetHeader>
                  <div className="overflow-scroll max-h-[25rem]">
                    {task.map((t : any, index) => {
                      return (
                        <TaskViewItems children={t.title} key={index}></TaskViewItems>
                      );
                    })}
                    <TaskViewItems children="Task 1" className="text-black"></TaskViewItems>
                    <TaskViewItems children="Task 2" className="text-black"></TaskViewItems>
                    <TaskViewItems children="Task 3" className="text-black"></TaskViewItems>
                    <TaskViewItems children="Task 4" className="text-black"></TaskViewItems>
                    <TaskViewItems children="Task 5" className="text-black"></TaskViewItems>
                    <TaskViewItems children="Task 6" className="text-black"></TaskViewItems>
                    <TaskViewItems children="Task 7" className="text-black"></TaskViewItems>
                    <TaskViewItems children="Task 8" className="text-black"></TaskViewItems>
                    <TaskViewItems children="Task 9" className="text-black"></TaskViewItems>
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
    </div>
  );
}
