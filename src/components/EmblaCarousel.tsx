"use client";

import React from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import { X } from 'lucide-react';
import { Button, buttonVariants } from './ui/button';

type PropType = {
  slides: Blob[]
  deleteSlide: (index: number) => void
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, deleteSlide, options } = props
  const [emblaRef] = useEmblaCarousel(options)

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((blob, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
              <Button className="absolute top-0 right-0 opacity-50" variant="destructive" onClick={() => deleteSlide(index)}>
                <X  />
              </Button>
              <img
                className="embla__slide__img object-contain"
                src={URL.createObjectURL(blob)}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
