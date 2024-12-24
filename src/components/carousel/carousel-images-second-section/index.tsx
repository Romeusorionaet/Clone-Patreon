'use client'

import { useSlickCarousel } from '@/hooks/use-slick-carousel'
import { useRef } from 'react'
import '@/assets/styles/slide-slick/slick.css'
import Slider from 'react-slick'
import Image from 'next/image'

export interface CustomSlider extends Slider {
  slickPrev: () => void
  slickNext: () => void
}

export function CarouselImagesSecondSection() {
  const slider = useRef<CustomSlider>(null)
  const { carouselGalleryScreen } = useSlickCarousel()

  return (
    <section>
      <Slider ref={slider} {...carouselGalleryScreen} accessibility>
        <div className="h-50 max-w-50">
          <Image
            width={500}
            height={500}
            src="https://c14.patreon.com/Patreon_Website_Module2_tall_2_X_72dpi_0000s_0007_Layer_0_b10904e408.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-50 max-w-50">
          <Image
            width={500}
            height={500}
            src="https://c14.patreon.com/Patreon_Website_Module2_tall_2_X_72dpi_0018_Background_copy_6_b1c973e50b.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-50 max-w-50">
          <Image
            width={500}
            height={500}
            src="https://c14.patreon.com/Patreon_Website_Module2_tall_2_X_72dpi_0000s_0007_Layer_0_b10904e408.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-50 max-w-50">
          <Image
            width={500}
            height={500}
            src="https://c14.patreon.com/Patreon_Website_Module2_tall_2_X_72dpi_0018_Background_copy_6_b1c973e50b.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </Slider>
    </section>
  )
}
