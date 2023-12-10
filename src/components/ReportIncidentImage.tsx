import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import EmblaCarousel from "./EmblaCarousel";
import {
  Aperture,
  ArrowLeft,
  Camera,
  SwitchCamera,
  Upload,
} from "lucide-react";
import CameraClick from "./CameraClick";

type PropType = {
  selectedImages: Blob[];
  setSelectedImages: (images: Blob[]) => void;
};

const ReportIncidentImage: React.FC<PropType> = (props) => {
  const { selectedImages, setSelectedImages } = props;

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
    <>
      <div className="flex items-center gap-8 py-5 justify-center mx-auto rounded-lg">
        {!cameraOpened && (
          <>
            <Button
              className="rounded-full w-16 h-16"
              onClick={() => setCameraOpened(true)}
            >
              <Camera />
            </Button>
            <Input
              name="Upload Files"
              type="file"
              multiple
              className="hidden"
              onChange={handleFileUpload}
            />
            <Button
              className="rounded-full w-16 h-16"
              onClick={() =>
                document.getElementsByName("Upload Files")[0].click()
              }
            >
              <Upload />
            </Button>
          </>
        )}
        {cameraOpened && (
          <CameraClick
            cameraRequireClick={cameraClickRequired}
            setCameraRequireClick={setCameraClickRequired}
            onCapture={onCapture}
          />
        )}
      </div>

      {(selectedImages.length !== 0 || cameraOpened) && (
        <div className="h-[20dvh]">
          <EmblaCarousel
            slides={selectedImages}
            deleteSlide={(index) =>
              setSelectedImages(selectedImages.filter((_, i) => i !== index))
            }
            options={{ dragFree: true, containScroll: "trimSnaps" }}
          />
        </div>
      )}
      {cameraOpened && (
        <div className="w-full flex items-center justify-evenly gap-3 my-5">
          <Button variant="outline" onClick={() => setCameraOpened(false)}>
            <ArrowLeft />
          </Button>
          <Button
            className="w-16 h-16 rounded-full"
            onClick={() => setCameraClickRequired(true)}
          >
            <Aperture className="w-10 h-10 mx-auto" />
          </Button>
          <Button variant="outline">
            {/* TODO: this */}
            <SwitchCamera />
          </Button>
        </div>
      )}
    </>
  );
};

export default ReportIncidentImage;
