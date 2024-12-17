'use client'

import { ArrowControlLeft, ArrowControlRight } from './arrows-carousel'
import { useSlickCarousel } from '@/hooks/use-slick-carousel'
import { useRef, useState } from 'react'
import '@/assets/styles/slide-slick/slick.css'
import Slider from 'react-slick'
import Image from 'next/image'

export interface CustomSlider extends Slider {
  slickPrev: () => void
  slickNext: () => void
}

interface Props {
  content: string[]
}

export function AnimatedCarouselTopHome({ content }: Props) {
  const slider = useRef<CustomSlider>(null)
  const { carouselResponsive } = useSlickCarousel()

  const [currentSlide, setCurrentSlide] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLeft, setIsLeft] = useState(true)
  const [showButton, setShowButton] = useState(false)

  const handleAfterChange = (current: number) => setCurrentSlide(current)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setIsLeft(x < rect.width / 2)
    setMousePosition({ x, y })
    setShowButton(true)
  }

  const handleMouseLeave = () => setShowButton(false)

  const prevImage =
    content[(currentSlide - 1 + content.length) % content.length]
  const nextImage = content[(currentSlide + 1) % content.length]

  return (
    <div className="relative overflow-hidden">
      <Slider
        ref={slider}
        {...carouselResponsive}
        afterChange={handleAfterChange}
      >
        {content.map((src, index) => (
          <div key={index}>
            <Image
              width={1000}
              height={1000}
              src={src}
              alt={`Slide ${index}`}
              className="h-custom_1 w-full object-cover"
            />
          </div>
        ))}
      </Slider>

      <div
        className="absolute left-0 top-0 z-10 flex h-full w-full"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {showButton && (
          <>
            <div className="relative h-full w-1/2">
              {isLeft && (
                <>
                  <div
                    className="absolute left-0 top-0 h-full w-full"
                    style={{
                      backgroundImage: `url(${prevImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      clipPath: `circle(40px at ${mousePosition.x}px ${mousePosition.y}px)`,
                    }}
                  />

                  <div
                    className="absolute h-20 w-20"
                    style={{
                      left: `${mousePosition.x}px`,
                      top: `${mousePosition.y}px`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <ArrowControlLeft
                      sizeList={false}
                      onClick={() => slider.current?.slickPrev()}
                    />
                  </div>
                </>
              )}
            </div>

            <div className="relative h-full w-1/2">
              {!isLeft && (
                <>
                  <div
                    className="absolute left-0 top-0 h-full w-full"
                    style={{
                      backgroundImage: `url(${nextImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      clipPath: `circle(40px at ${mousePosition.x - window.innerWidth / 2}px ${mousePosition.y}px)`,
                    }}
                  />
                  <div
                    className="absolute h-20 w-20"
                    style={{
                      left: `${mousePosition.x - window.innerWidth / 2}px`,
                      top: `${mousePosition.y}px`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <ArrowControlRight
                      sizeList={false}
                      onClick={() => slider.current?.slickNext()}
                    />
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
