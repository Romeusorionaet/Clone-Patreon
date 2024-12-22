'use client'

import { useSlickCarousel } from '@/hooks/use-slick-carousel'
import '@/assets/styles/slide-slick/slick.css'
import React, { useRef } from 'react'
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

  return (
    <div className="relative">
      <Slider ref={slider} {...carouselResponsive}>
        <Slider1 />
        <Slider2 />
        <Slider3 />
        <Slider4 />
        <Slider5 />
        <Slider6 />
        <Slider7 />
      </Slider>

      <div className="absolute top-0 flex h-full w-full">
        <div className="flex w-1/2 items-start pl-10 pt-32 xl:pt-56">
          <ArrowControlLeft onClick={() => slider.current?.slickPrev()} />
        </div>

        <div className="flex w-1/2 items-start justify-end pr-10 pt-32 xl:pt-56">
          <ArrowControlRight onClick={() => slider.current?.slickNext()} />
        </div>
      </div>
    </div>
  )
}
