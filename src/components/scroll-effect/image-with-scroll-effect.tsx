'use client'

import { useWidthScreen } from '@/hooks/use-width-screen'
import Image from 'next/image'

export function ImageWithScrollEffect() {
  const { widthScreen } = useWidthScreen()

  const scrollSpeed = (widthScreen ?? 0) > 768 ? 0.2 : 0.08

  return (
    <section className="relative flex h-85vh items-end md:h-custom_5">
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
        data-scroll
        data-scroll-speed={scrollSpeed}
        width={1000}
        height={1000}
        src="https://c14.patreon.com/Patreon_Website_Module3_2_X_72dpi_Kamauu1_c26920eff8.jpg"
        alt="O Patreon oferece um espaço para os artistas se sustentarem conectando-os diretamente às suas próprias comunidades."
        className="absolute -z-10 min-h-screen w-full object-cover max-md:-top-16 md:-bottom-28/100"
      />
    </section>
  )
}
