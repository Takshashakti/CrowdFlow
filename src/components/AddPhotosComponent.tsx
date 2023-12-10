"use client";

import CameraClick from "@/components/CameraClick";
import EmblaCarousel from "@/components/EmblaCarousel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Camera, X } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";

export default function AddPhotosComponent({ selectedImages, setSelectedImages }: {
  selectedImages: Blob[]
  setSelectedImages: Dispatch<SetStateAction<Blob[]>>
}) {

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setSelectedImages([...Array.from(files), ...selectedImages]);
    }
  };

  const onCapture = (image: Blob) => {
    setSelectedImages([image, ...selectedImages]);
  };

  const [cameraOpened, setCameraOpened] = useState(false);
  const [cameraClickRequired, setCameraClickRequired] = useState(false);

  return (
    <div className="flex flex-col w-full gap-3">
      <div className="flex flex-col gap-4 items-center justify-around
       bg-slate-800 mx-auto rounded-lg py-5 w-full">
        {!cameraOpened && (
          <>
            <Button
              className="w-1/2"
              onClick={() => setCameraOpened(true)}
            >
              Open Camera
            </Button>
            <Input
              name="Upload Files"
              type="file"
              multiple
              className="hidden"
              onChange={handleFileUpload}
            />
            <Button
              className="w-1/2"
              onClick={() =>
                document.getElementsByName("Upload Files")[0].click()
              }
            >
              Upload Files
            </Button>
          </>
        )}
        {cameraOpened && (
          <>
            <div className="flex justify-start w-full">
              <Button
                className="w-1/4 h-[20] my-2 opacity-50 ml-auto"
                onClick={() => setCameraOpened(false)}
                variant="destructive"
              >
                <X className="w-1/2" />
              </Button>
            </div>
            <CameraClick
              cameraRequireClick={cameraClickRequired}
              setCameraRequireClick={setCameraClickRequired}
              onCapture={onCapture}
            />
          </>
        )}
      </div>

      <div className="overflow-hidden">
        <EmblaCarousel
          slides={selectedImages}
          deleteSlide={(index) =>
            setSelectedImages(selectedImages.filter((_, i) => i !== index))
          }
          options={{ dragFree: true, containScroll: "trimSnaps" }}
        />
      </div>

      <br />

      {cameraOpened && (
        <div className="mx-auto flex items-center justify-center">
          <Button
            className="w-1/4 mt-1 mb-2"
            onClick={() => setCameraClickRequired(true)}
          >
            <Camera className="w-1/2 mx-auto" />
          </Button>
        </div>
      )}
    </div>
  );
}
