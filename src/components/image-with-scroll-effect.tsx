'use client'

import { useWidthScreen } from '@/hooks/use-width-screen'
import Image from 'next/image'
import { useResponsiveScrollEffect } from '@/hooks/use-responsive-scroll-effect'

export function ImageWithScrollEffect() {
  const { widthScreen } = useWidthScreen()

  const { areaRef, topValue } = useResponsiveScrollEffect({
    widthScreen,
    breakpoints: {
      small: { maxOffset: 100 },
      medium: { visibilityRatio: -5, maxOffset: 200 },
      large: { visibilityRatio: -50, maxOffset: 350, minOffset: -100 },
    },
  })

  return (
    <section
      ref={areaRef}
      className="relative flex h-85 items-end overflow-hidden md_custom_2:h-custom_5"
    >
      <div className="flex h-1/2 w-full justify-evenly px-4 leading-none max-md:flex-col md:items-end md:justify-center md:gap-20 md:px-8 md:pb-6 md:leading-tight 2xl:px-16">
        <p className="inline-block w-11/12 indent-16 text-custom_8 font-light tracking-tighter md:indent-20 xl:indent-44 xl:font-normal">
          {'"'}O Patreon oferece um espaço para os artistas se
          <br className="max-md:hidden" /> sustentarem conectando-os diretamente
          às suas próprias comunidades.
          {'"'}
        </p>

        <p className="text-end text-xl font-light uppercase md:text-custom_9 xl:font-normal">
          kamauu
        </p>
      </div>
      <Image
        width={1000}
        height={1000}
        src="https://c14.patreon.com/Patreon_Website_Module3_2_X_72dpi_Kamauu1_c26920eff8.jpg"
        alt="O Patreon oferece um espaço para os artistas se sustentarem conectando-os diretamente às suas próprias comunidades."
        style={{ top: `${topValue}px` }}
        className="absolute -z-10 min-h-screen w-full object-cover transition-all duration-500"
      />
    </section>
  )
}
