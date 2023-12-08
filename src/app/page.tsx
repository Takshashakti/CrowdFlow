import HomeSearchBar from "@/components/HomeSearchBar";
// import MapComponent from "@/components/MapComponent";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ReportIncident from "@/components/ReportIncident";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Check, Cross, CrossIcon, X } from "lucide-react";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("@/components/MapComponent"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <MapComponent />
      <MaxWidthWrapper>
        <div className="flex flex-col justify-between w-full h-full">
          <HomeSearchBar />
          <Sheet>
            <SheetTrigger className="w-full z-10" asChild>
              <Button>Add New Incident</Button>
            </SheetTrigger>
            <SheetContent side="bottom">
              {/* <SheetHeader>
              <SheetTitle>Location shown here</SheetTitle>
            </SheetHeader>
            <div className="my-5">Problem description presented here</div>
            <SheetFooter>
              <div className="flex gap-1 justify-between items-center">
                <span className="text-sm">
                Report a new incident?
                </span>
                <div className="flex gap-1">
                <Button>
                <Check />
                </Button>
                <SheetClose asChild>
                <Button>
                <X />
                </Button>
                </SheetClose>
                </div>
                </div>
              </SheetFooter> */}
              <ReportIncident />
            </SheetContent>
          </Sheet>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
