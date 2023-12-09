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

export default function Home() {
  return (
    <>
    <h1 className="text-4xl font-bold text-center">Report Incident</h1>
    </>
  );
}
