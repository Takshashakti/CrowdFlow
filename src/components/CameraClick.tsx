"use client";

import React, { useEffect } from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import { X } from 'lucide-react';
import { Button, buttonVariants } from './ui/button';
import Webcam from 'react-webcam';

type PropType = {
    cameraRequireClick: boolean
    setCameraRequireClick: (value: boolean) => void
    onCapture: (image: Blob) => void
}


const CameraClick: React.FC<PropType> = (props) => {
  const { cameraRequireClick, setCameraRequireClick } = props
  const webcamRef = React.useRef(null);
  const canvasRef = React.useRef(null);

  useEffect(() => {
    if (cameraRequireClick) {
      setCameraRequireClick(false)
      const imageSrc = (webcamRef.current as unknown as Webcam);
      if ( imageSrc !== null) 
      {
        const ss = imageSrc.getScreenshot() as string;
        // ss is a base64 encoded image, create a blob and send it to the parent
        fetch(ss).then(r => r.blob()).then(blob => props.onCapture(blob))
      }
    }
  }, [cameraRequireClick])

  return (
    <div>
        <Webcam 
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/png"
        />
    </div>
  )
}

export default CameraClick
