"use client";

import CameraClick from "@/components/CameraClick";
import EmblaCarousel from "@/components/EmblaCarousel";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLocalStorage } from "@/lib/hooks/use-local-storage";
import { cn } from "@/lib/utils";
import { EmblaOptionsType } from "embla-carousel-react";
import { Camera, X } from "lucide-react";
import { useState } from "react";

export default function ReportIncident() {
    const [selectedImages, setSelectedImages] = useState<Blob[]>([]);

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            setSelectedImages([ ...Array.from(files), ...selectedImages]);
        }
    };

    const onCapture = (image: Blob) => {
        setSelectedImages([image, ...selectedImages])
    }

    const [cameraOpened, setCameraOpened] = useState(false);
    const [cameraClickRequired, setCameraClickRequired] = useState(false);

    return (
        <>
            <MaxWidthWrapper>
                <h1 className="text-3xl font-bold text-center pt-5 pb-2">Report Incident</h1>
                <br />
                <div className="flex flex-col items-center justify-center w-[90dvw] h-[50dvh] bg-slate-800 mx-auto rounded-lg overflow-hidden">
                {
                    !cameraOpened &&
                    <>
                    <Button className="w-1/2 mt-5 mb-5" onClick={() => setCameraOpened(true)}>
                        Open Camera
                    </Button>
                    <Input name="Upload Files" type="file" multiple className="hidden" onChange={handleFileUpload} />
                    <Button className="w-1/2 mt-5 mb-5" onClick={() => document.getElementsByName('Upload Files')[0].click()}>
                        Upload Files
                    </Button>
                    </>
                }
                { cameraOpened && 
                <>
                <div className="flex justify-start w-full">
                    <Button className="w-1/4 h-[20] my-2 opacity-50 ml-auto" onClick={() => setCameraOpened(false)} variant="destructive">
                        <X className="w-1/2" />
                    </Button>
                </div>
                <CameraClick cameraRequireClick={cameraClickRequired} setCameraRequireClick={setCameraClickRequired} onCapture={onCapture} />
                </>
                }
                </div>

                <div className="h-[20dvh] overflow-hidden">
                <EmblaCarousel slides={selectedImages} deleteSlide={(index) => setSelectedImages(selectedImages.filter((_, i) => i !== index))}  options={{ dragFree: true, containScroll: 'trimSnaps' }} />
                </div>

                <br />

                    
                {
                cameraOpened &&
                <div className="mx-auto flex items-center justify-center">
                    <Button className="w-1/4 h-[20] mt-5 mb-5" onClick={() => setCameraClickRequired(true)}>
                        <Camera className="w-1/2 mx-auto" />
                    </Button>
                </div>
                }
            </MaxWidthWrapper>
        </>
    );
}

    
