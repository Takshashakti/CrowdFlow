"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ReportIncidentForm from "@/components/ReportIncidentForm";
import ReportIncidentImage from "@/components/ReportIncidentImage";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function ReportIncidentPage() {
    const [selectedImages, setSelectedImages] = useState<Blob[]>([]);
    
    const [currentPage, setCurrentPage] = useState(0);
    
    return (
        <>
        <MaxWidthWrapper>
        <h1 className="text-3xl font-bold text-center pt-5 pb-2">Report Incident</h1>
        <br />
        
        { currentPage === 0 &&
            <>
            <ReportIncidentImage selectedImages={selectedImages} setSelectedImages={setSelectedImages} />
            <div className="flex justify-center">
            <Button onClick={() => setCurrentPage(1)} disabled={selectedImages.length === 0}>Next</Button>
            </div>
            </>
        }
        {currentPage === 1 && <ReportIncidentForm selectedImages={selectedImages} />}
        
        
        
        
        </MaxWidthWrapper>
        </>
    );
}
    
    
    
