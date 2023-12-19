"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReportIncidentImage from "./ReportIncidentImage";
import { useEffect, useState } from "react";
import ReportIncidentForm from "./ReportIncidentForm";

const NewIncidentSheet = () => {
  const [selectedImages, setSelectedImages] = useState<Blob[]>([]);
  const [reportName, setReportName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [reportDescription, setReportDescription] = useState<string>("");
  const [reportCategory, setReportCategory] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    const incident = {
      name: reportName,
      description: reportDescription,
      category: reportCategory,
      images: selectedImages,
      address: address
    };

    console.log(incident);
  }, [submitted]);

  return (
    <Tabs defaultValue="images">
      <TabsContent value="images">
        <ReportIncidentImage
          selectedImages={selectedImages}
          setSelectedImages={setSelectedImages}
        />
      </TabsContent>

      <TabsContent value="details">
        <ReportIncidentForm
          selectedImages={selectedImages}
          reportName={reportName}
          setReportName={setReportName}
          reportDescription={reportDescription}
          setReportDescription={setReportDescription}
          reportCategory={reportCategory}
          setReportCategory={setReportCategory}
          setSubmitted={setSubmitted}
          address={address}
          setAddress={setAddress}
        />
      </TabsContent>

      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="images">Attatch Images</TabsTrigger>
        <TabsTrigger value="details" disabled={selectedImages.length === 0}>Add Details</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default NewIncidentSheet;
