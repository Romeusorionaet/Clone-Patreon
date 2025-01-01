'use client'

import { useResponsiveScrollEffect } from '@/hooks/use-responsive-scroll-effect'
import { useWidthScreen } from '@/hooks/use-width-screen'
import Image from 'next/image'

export function MembershipPanelScrollEffect() {
  const { widthScreen } = useWidthScreen()

  const { areaRef, topValue } = useResponsiveScrollEffect({
    widthScreen,
    breakpoints: {
      small: { maxOffset: 0 },
      medium: { maxOffset: 120 },
      large: { maxOffset: 150 },
    },
  })

  return (
    <div className="relative">
      <div
        ref={areaRef}
        className="left-12/100 w-full transition-all duration-500 max-md:mt-16 sm_custom_1:absolute sm_custom_1:w-1/4 xl:-mt-20 xl:h-custom_6 xl:w-20vw"
        style={{ top: `${topValue}px` }}
      >
        <Image
          width={1000}
          height={1000}
          src="https://c14.patreon.com/Mobile_Insights_931320bfbd.png"
          alt="Painel de associação"
          className="h-full w-full rounded-3xl"
        />
      </div>
    </div>
  )
}
