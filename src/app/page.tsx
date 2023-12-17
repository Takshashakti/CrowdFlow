"use client";

import HomeSearchBar from "@/components/HomeSearchBar";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import NewIncidentSheet from "@/components/NewIncidentSheet";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Minus, Plus } from "lucide-react";
import dynamic from "next/dynamic";
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
        <DialogContent>{selectedIncidentId}</DialogContent>
      </Dialog>
      <MaxWidthWrapper>
        <div className="flex flex-col justify-between w-full h-full">
          <HomeSearchBar />

          <div className="flex flex-col gap-2 w-full">
            <Button className="relative w-7 h-7 p-1 z-1000 ml-auto">
              <Plus className="w-5 h-5" />
            </Button>
            <Button className="relative w-7 h-7 p-1 z-1000 ml-auto">
              <Minus className="w-5 h-5" />{" "}
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild className="w-full z-10">
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
      </MaxWidthWrapper>
    </>
  );
}
