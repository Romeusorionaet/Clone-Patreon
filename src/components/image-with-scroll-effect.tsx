'use client'

import { useWidthScreen } from '@/hooks/use-width-screen'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export function ImageWithScrollEffect() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [topValue, setTopValue] = useState(0)
  const { widthScreen } = useWidthScreen()
  const [visibilityRatio, setVisibilityRatio] = useState(0)
  const [maxOffset, setMaxOffset] = useState(0)
  const [minOffset, setMinOffset] = useState(0)

  useEffect(() => {
    switch (true) {
      case widthScreen <= 877:
        setVisibilityRatio(0)
        setMaxOffset(100)
        setMinOffset(0)
        break
      case widthScreen >= 1280:
        setVisibilityRatio(-50)
        setMaxOffset(350)
        setMinOffset(-100)
        break
      default:
        setVisibilityRatio(-5)
        setMaxOffset(200)
        setMinOffset(-2)
        break
    }
  }, [widthScreen])

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current
      if (!section) return

      const { top: sectionTop, height: sectionHeight } =
        section.getBoundingClientRect()

      if (sectionTop <= window.innerHeight && sectionTop + sectionHeight >= 0) {
        const progress =
          1 -
          Math.min(
            Math.max(sectionTop / window.innerHeight, visibilityRatio),
            1,
          )
        const newTop = minOffset - progress * maxOffset
        setTopValue(newTop)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [maxOffset, visibilityRatio, minOffset])
  return (
    <section
      ref={sectionRef}
      className="relative flex h-85 items-end overflow-hidden md_custom_2:h-custom_5"
    >
      <div className="flex h-1/2 w-full justify-evenly px-4 leading-none max-md:flex-col md:items-end md:justify-center md:gap-20 md:px-8 md:pb-6 md:leading-tight 2xl:px-16">
        <p className="inline-block w-11/12 indent-16 text-custom_8 font-light md:indent-20 xl:indent-44 xl:font-normal">
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
