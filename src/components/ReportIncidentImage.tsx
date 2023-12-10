import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import EmblaCarousel from "./EmblaCarousel";
import { Camera, X } from "lucide-react";
import CameraClick from "./CameraClick";



type PropType = {
    selectedImages: Blob[]
    setSelectedImages: (images: Blob[]) => void
}


const ReportIncidentImage : React.FC<PropType> = (props) => {
    const { selectedImages, setSelectedImages } = props
    
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
        {
            cameraOpened &&
            <div className="mx-auto flex items-center justify-center">
            <Button className="w-1/4 h-[20] mt-5 mb-5" onClick={() => setCameraClickRequired(true)}>
            <Camera className="w-1/2 mx-auto" />
            </Button>
            </div>
        }
        </>
        )
    }
    
    export default ReportIncidentImage