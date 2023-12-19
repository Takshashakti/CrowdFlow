"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReportIncidentImage from "./ReportIncidentImage";
import { useEffect, useState } from "react";
import ReportIncidentForm from "./ReportIncidentForm";

const NewIncidentSheet = () => {
  const [selectedImages, setSelectedImages] = useState<Blob[]>([]);
  const [reportName, setReportName] = useState<string>("");
  const [address, setAddress] = useState<ReverseGeocodeResponse | undefined>();
  const [reportDescription, setReportDescription] = useState<string>("");
  const [reportCategory, setReportCategory] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [userLat, setUserLat] = useState<string>("");
  const [userLng, setUserLng] = useState<string>("");

  // const { loading, latitude, longitude } = useGeolocation();
  // const [lat, setLat] = useState<string>();
  // const [lng, setLng] = useState<string>();

  // useEffect(() => {
  //   if (!loading) {
  //     setLat(latitude?.toString());
  //     setLng(longitude?.toString());
  //   }
  // }, [loading, lat, lng]);

  // useEffect(() => {
  //   (async () => {
  //     const res = await fetch("https://ttm.sh", {
  //       method: "POST",
  //       body: selectedImages[0],
  //     });
  //     console.log(res);
  //   })();
  // }, [selectedImages]);

  useEffect(() => {
    (async () => {
      const incident = {
        user_id: 1,
        // name: reportName,
        description: reportDescription,
        type: reportCategory,
        // images: selectedImages,
        image_url: "",
        city: address?.address.city,
        state: address?.address.state,
        district: address?.address.district,
        time: Date.now(),
        latitude: parseFloat(userLat),
        longitude: parseFloat(userLng),
      };
      
      // fetch("https://jsonplaceholder.typicode.com/todos/1")
      //   .then((response) => response.json())
      //   .then((json) => console.log(json));
      // const res = fetch("");
    })();
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
          setUserLat={setUserLat}
          setUserLng={setUserLng}
        />
      </TabsContent>

      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="images">Attatch Images</TabsTrigger>
        <TabsTrigger value="details" disabled={selectedImages.length === 0}>
          Add Details
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default NewIncidentSheet;
