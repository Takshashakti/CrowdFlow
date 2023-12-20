import HomeSearchBar from "@/components/HomeSearchBar";
import IncidentDetails from "@/components/IncidentDetails";
// import MapComponent from "@/components/MapComponent";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ReportIncident from "@/components/ReportIncidentForm";
import { Button, buttonVariants } from "@/components/ui/button";
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
import { cn } from "@/lib/utils";
import { Check, Cross, CrossIcon, X } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";


const MapComponent = dynamic(() => import("@/components/MapComponent"), {
  ssr: false,
});

export default function IncidentTemp() {
  return (
    <>
    <IncidentDetails disasterID="1" />
    </>
  );
}