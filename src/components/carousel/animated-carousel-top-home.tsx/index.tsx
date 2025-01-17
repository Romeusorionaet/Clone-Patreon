'use client'

import { Slider1 } from '@/components/carousel/animated-carousel-top-home.tsx/sliders/slider-1'
import { Slider2 } from '@/components/carousel/animated-carousel-top-home.tsx/sliders/slider-2'
import { Slider3 } from '@/components/carousel/animated-carousel-top-home.tsx/sliders/slider-3'
import { Slider4 } from '@/components/carousel/animated-carousel-top-home.tsx/sliders/slider-4'
import { Slider5 } from '@/components/carousel/animated-carousel-top-home.tsx/sliders/slider-5'
import { Slider6 } from '@/components/carousel/animated-carousel-top-home.tsx/sliders/slider-6'
import { Slider7 } from '@/components/carousel/animated-carousel-top-home.tsx/sliders/slider-7'
import { ArrowControlLeft, ArrowControlRight } from '../arrows-carousel'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { useSlickCarousel } from '@/hooks/use-slick-carousel'
import React, { useRef, useState } from 'react'
import '@/assets/styles/components/slick.css'
import Slider from 'react-slick'
import Link from 'next/link'

export interface CustomSlider extends Slider {
  slickPrev: () => void
  slickNext: () => void
}

export function AnimatedCarouselTopHome() {
  const slider = useRef<CustomSlider>(null)
  const { carouselResponsive } = useSlickCarousel()
  const [currentSlider, setCurrentSlider] = useState<number>(0)

  return (
    <section className="relative">
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

      <Link href="#" className="pointer-events-none absolute bottom-2 block">
        <DotLottieReact
          src="https://lottie.host/4a0da003-d8cb-4a44-98d7-fda166f6d3d8/NBIBD5893o.lottie"
          loop
          autoplay
          className="pointer-events-auto h-20 w-20 xl:h-40 xl:w-40"
        />
      </Link>

      <div className="absolute left-4 top-72 md:top-32 xl:top-56">
        <ArrowControlLeft onClick={() => slider.current?.slickPrev()} />
      </div>

      <div className="absolute right-4 top-72 md:top-32 xl:top-56">
        <ArrowControlRight onClick={() => slider.current?.slickNext()} />
      </div>
    </section>
  )
}
