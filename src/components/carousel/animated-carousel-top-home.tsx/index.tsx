'use client'

import { useSlickCarousel } from '@/hooks/use-slick-carousel'
import '@/assets/styles/slide-slick/slick.css'
import React, { useRef } from 'react'
import Slider from 'react-slick'
import { ArrowControlLeft, ArrowControlRight } from './arrows-carousel'

export interface CustomSlider extends Slider {
  slickPrev: () => void
  slickNext: () => void
}

interface Props {
  children: React.ReactNode
}

export function AnimatedCarouselTopHome({ children }: Props) {
  const slider = useRef<CustomSlider>(null)
  const { carouselResponsive } = useSlickCarousel()

  return (
    <div className="relative">
      <Slider ref={slider} {...carouselResponsive}>
        {React.Children.map(children, (child, index) => (
          <div key={index}>{child}</div>
        ))}
      </Slider>

      <div className="absolute top-0 flex h-full w-full">
        <div className="flex w-1/2 pb-44 pl-10">
          <ArrowControlLeft onClick={() => slider.current?.slickPrev()} />
        </div>

        <div className="flex w-1/2 justify-end pb-44 pr-10">
          <ArrowControlRight onClick={() => slider.current?.slickNext()} />
        </div>
      </div>
    </div>
  )
}
