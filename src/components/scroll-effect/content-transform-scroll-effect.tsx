'use client'

import { useResponsiveScrollEffect } from '@/hooks/use-responsive-scroll-effect'
import { useWidthScreen } from '@/hooks/use-width-screen'
import Link from 'next/link'

export function ContentTransformScrollEffect() {
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
    <div className="relative">
      <div
        ref={areaRef}
        className="right-6/100 mt-10 flex w-1/2 gap-16 text-c1 transition-all duration-500 max-sm_custom_1:w-full max-sm_custom_1:flex-col sm_custom_1:absolute sm_custom_1:gap-24"
        style={{ top: `${-topValue}px` }}
      >
        <div className="flex flex-col items-start gap-6">
          <h3 className="text-custom_11 font-medium max-sm_custom_1:text-2xl">
            Mais formas de ganhar
          </h3>

          <p className="leading-tight">
            No Patreon, você pode construir um negócio duradouro fora do
            ecossistema baseado em anúncios, com fontes de receita que vão desde
            a associação para oferecer benefícios contínuos até lojas on-line
            para vender vídeos individuais, episódios de podcast e muito mais.
          </p>

          <Link
            href="#"
            className="bg-rise-fade group rounded-full bg-c1 px-4 py-2 font-medium text-c2 before:bg-c1 hover:text-c2 md:p-custom_1 md:px-6"
          >
            <div className="overflow-hidden">
              <span className="bg-rise-fade-content before:content-['Configure_uma_loja'] group-hover:animate-rise-from-bottom">
                Configure uma loja
              </span>
            </div>
          </Link>
        </div>

        <div className="space-y-6">
          <h3 className="text-custom_11 font-medium max-sm_custom_1:text-2xl">
            Desbloqueie o crescimento
          </h3>

          <p>
            O Patreon não serve apenas para o crescimento criativo, é também
            para o crescimento profissional. Obtenha análises detalhadas sobre
            seus fãs, explore ferramentas poderosas de gerenciamento de
            relacionamento e explore uma crescente comunidade de criadores.
          </p>
        </div>
      </div>
    </div>
  )
}
