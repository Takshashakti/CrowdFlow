"use client";

import React from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { X } from "lucide-react";
import { Button } from "./button";
import {
  DotButton,
  PrevButton,
  NextButton,
} from "./EmblaCarouselArrowsDotsButtons";

type PropType = {
  slides: Blob[];
  deleteSlide: (index: number) => void;
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((blob, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
              <img
                className="embla__slide__img object-contain h-20 w-10"
                src={URL.createObjectURL(blob)}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
