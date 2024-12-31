'use client'

import { useResponsiveScrollEffect } from '@/hooks/use-responsive-scroll-effect'
import { useWidthScreen } from '@/hooks/use-width-screen'

export function VideoScrollEffect() {
  const { widthScreen } = useWidthScreen()

  const { areaRef, topValue } = useResponsiveScrollEffect({
    widthScreen,
    breakpoints: {
      small: { maxOffset: 0 },
      medium: { maxOffset: 200 },
      large: { maxOffset: 200 },
    },
  })

  return (
    <div className="relative">
      <div
        ref={areaRef}
        className="right-6/100 w-full transition-all duration-500 max-md:mt-16 md:absolute md:-mt-15/100 md:w-1/4"
        style={{ top: `${topValue}px` }}
      >
        <video
          preload="none"
          loop
          autoPlay
          muted
          playsInline
          src="https://c14.patreon.com/1_Chelsea_1161fe215b.mp4"
          className="h-full w-full rounded-3xl"
        />
      </div>
    </div>
  )
}
