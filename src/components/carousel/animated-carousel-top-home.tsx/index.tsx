'use client'

import { useSlickCarousel } from '@/hooks/use-slick-carousel'
import '@/assets/styles/slide-slick/slick.css'
import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import { ArrowControlLeft, ArrowControlRight } from '../arrows-carousel'
import { Slider1 } from '@/components/carousel/animated-carousel-top-home.tsx/sliders/slider-1'
import { Slider2 } from '@/components/carousel/animated-carousel-top-home.tsx/sliders/slider-2'
import { Slider3 } from '@/components/carousel/animated-carousel-top-home.tsx/sliders/slider-3'
import { Slider4 } from '@/components/carousel/animated-carousel-top-home.tsx/sliders/slider-4'
import { Slider5 } from '@/components/carousel/animated-carousel-top-home.tsx/sliders/slider-5'
import { Slider6 } from '@/components/carousel/animated-carousel-top-home.tsx/sliders/slider-6'
import { Slider7 } from '@/components/carousel/animated-carousel-top-home.tsx/sliders/slider-7'

export interface CustomSlider extends Slider {
  slickPrev: () => void
  slickNext: () => void
}

export function AnimatedCarouselTopHome() {
  const slider = useRef<CustomSlider>(null)
  const { carouselResponsive } = useSlickCarousel()
  const [currentSlider, setCurrentSlider] = useState<number>(0)

  return (
    <div className="relative">
      <Slider
        ref={slider}
        {...carouselResponsive}
        accessibility
        afterChange={(current) => setCurrentSlider(current)}
      >
        <Slider1 currentSlider={currentSlider} />
        <Slider2 currentSlider={currentSlider} />
        <Slider3 currentSlider={currentSlider} />
        <Slider4 currentSlider={currentSlider} />
        <Slider5 currentSlider={currentSlider} />
        <Slider6 currentSlider={currentSlider} />
        <Slider7 currentSlider={currentSlider} />
      </Slider>

      <div className="absolute left-4 top-72 md:top-32 xl:top-56">
        <ArrowControlLeft onClick={() => slider.current?.slickPrev()} />
      </div>

      <div className="absolute right-4 top-72 md:top-32 xl:top-56">
        <ArrowControlRight onClick={() => slider.current?.slickNext()} />
      </div>
    </div>
  )
}
