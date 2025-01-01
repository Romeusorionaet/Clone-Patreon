'use client'

import { useResponsiveScrollEffect } from '@/hooks/use-responsive-scroll-effect'
import { useWidthScreen } from '@/hooks/use-width-screen'
import Link from 'next/link'

export function ContentCreatorsScrollEffect() {
  const { widthScreen } = useWidthScreen()

  const { areaRef, topValue } = useResponsiveScrollEffect({
    widthScreen,
    breakpoints: {
      small: { maxOffset: 0 },
      medium: { maxOffset: 60 },
      large: { maxOffset: 80 },
    },
  })

  return (
    <div
      ref={areaRef}
      className="left-1/5 flex flex-col items-start gap-6 transition-all duration-500 max-md:mt-10 md:w-1/2 sm_custom_1:absolute"
      style={{ top: `${-topValue}px` }}
    >
      <div className="space-y-4 text-sm font-light leading-tight tracking-tight mix-blend-exclusion md:w-8.5/12 md:text-custom_10">
        <p>
          O Patreon oferece uma linha direta de acesso à sua comunidade de fãs,
          sem anúncios ou algoritmos no caminho.
        </p>

        <p>
          Por meio de bate-papos em grupo em tempo real, comentários, DMs e até
          mesmo diretamente por e-mail, você pode se conectar de forma mais
          profunda e direta com sua comunidade aqui do que em qualquer outro
          lugar.
        </p>
      </div>

      <Link
        href="#"
        className="bg-rise-fade group rounded-full bg-c1 px-4 py-2 font-medium text-c2 before:bg-c1 hover:text-c2 md:p-custom_1 md:px-6"
      >
        <div className="overflow-hidden">
          <span className="bg-rise-fade-content before:content-['Crie_uma_comunidade_real'] group-hover:animate-rise-from-bottom">
            Crie uma comunidade real
          </span>
        </div>
      </Link>
    </div>
  )
}
