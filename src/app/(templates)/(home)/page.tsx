import { ContentTransformScrollEffect } from '@/components/scroll-effect/content-transform-scroll-effect'
import { ContentCreatorsScrollEffect } from '@/components/scroll-effect/content-creatores-scroll-effect'
import { MembershipPanelScrollEffect } from '@/components/scroll-effect/membership-panel-scroll-effect'
import { CarouselImagesSecondSection } from '@/components/carousel/carousel-images-second-section'
import { AnimatedCarouselTopHome } from '@/components/carousel/animated-carousel-top-home.tsx'
import { ImageWithScrollEffect } from '@/components/scroll-effect/image-with-scroll-effect'
import { VideoScrollEffect } from '@/components/scroll-effect/video-scroll-effect'
import '@/assets/styles/utilities/backgrounds-section.css'
import '@/assets/styles/utilities/bg-rise-fade.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <AnimatedCarouselTopHome />

      <section className="background-1 relative flex h-150vh w-full flex-col items-center justify-center md_custom_2:h-custom_2">
        <h2 className="pointer-events-none absolute top-0 z-10 flex h-full w-full flex-col justify-between px-6 pb-64 pt-16 text-custom_5 leading-none mix-blend-exclusion md_custom_2:pb-6">
          <span>
            Criatividade <br /> alimentado
          </span>
          <span className="text-end">
            de <br /> fandom
          </span>
        </h2>

        <div className="pointer-events-none absolute bottom-16 left-6 z-10 mix-blend-exclusion max-md:w-72">
          <p className="font-medium leading-tight tracking-wide md:text-custom_6">
            O Patreon é o melhor lugar para criar uma
            <br className="max-md:hidden" /> comunidade com seus maiores fãs,
            compartilhar <br className="max-md:hidden" /> trabalhos exclusivos e
            transformar sua paixão <br className="max-md:hidden" /> em um
            negócio criativo duradouro.
          </p>
        </div>

        <div className="w-full">
          <CarouselImagesSecondSection />
        </div>
      </section>

      <ImageWithScrollEffect />

      <section className="background-2 w-full max-sm_custom_1:pb-44">
        <section className="relative overflow-hidden">
          <Image
            width={1000}
            height={1000}
            src="https://c14.patreon.com/Component_Card_11_18b523208f.png"
            alt=""
            className="absolute top-24 h-40 w-32 md:top-56 md:h-56 md:w-48 xl:top-80 xl:h-80 xl:w-80"
          />
          <Image
            width={1000}
            height={1000}
            src="https://c14.patreon.com/Component_Card_1_0135f12736.png"
            alt=""
            className="absolute h-24 w-20 max-xl:top-1/2 md:h-40 md:w-40 xl:bottom-40 xl:h-60 xl:w-60"
          />

          <Image
            width={1000}
            height={1000}
            src="https://c14.patreon.com/Component_Card_8_dbf120bf79.png"
            alt=""
            className="absolute -right-8 top-20 h-32 w-48 md:right-1/4 xl:right-1/3 xl:h-48 xl:w-60"
          />
          <Image
            width={1000}
            height={1000}
            src="https://c14.patreon.com/Component_Card_6_00ed3428aa.png"
            alt=""
            className="absolute -right-5 h-36 w-28 max-xl:top-96 max-md:top-56 md:right-0 md:h-60 md:w-40 xl:bottom-56 xl:h-96 xl:w-60"
          />

          <h2 className="pt-96 text-center text-custom_5 font-light leading-none tracking-tight mix-blend-exclusion md:pt-56 xl:pt-80">
            Completo <br /> criativo <br /> controle
          </h2>

          <div className="ml-10 mt-80 flex w-custom_3 flex-col items-start gap-4 md:ml-44 md:mt-56 xl:ml-96">
            <p className="font-light leading-tight tracking-tight mix-blend-exclusion md:text-custom_6">
              O Patreon é o seu espaço para criar o que mais te excita, áspero
              ou polido, grande ou pequeno. Centenas de milhares de criadores
              usam o Patreon para compartilhar vídeos, podcasts, textos, arte,
              música, receitas e muito mais com seus fãs mais apaixonados.
            </p>

            <Link
              href="#"
              className="bg-rise-fade group rounded-full bg-c1 px-4 py-2 font-medium text-c2 before:bg-c1 hover:text-c2 md:p-custom_1 md:px-6"
            >
              <div className="overflow-hidden">
                <span className="bg-rise-fade-content before:content-['Crie_do_seu_jeito'] group-hover:animate-rise-from-bottom">
                  Crie do seu jeito
                </span>
              </div>
            </Link>
          </div>
        </section>

        <section className="px-4 pt-40">
          <h2 className="text-custom_5 font-light leading-none tracking-tighter mix-blend-exclusion md:ml-8/100">
            Criadores. Fãs. <br /> Nada em <br /> entre.
          </h2>

          <div className="relative">
            <ContentCreatorsScrollEffect />

            <VideoScrollEffect />
          </div>
        </section>

        <section className="px-4 pt-20 max-sm_custom_1:pt-44 sm_custom_1:mt-96">
          <h2 className="flex flex-col text-custom_5 font-light leading-none tracking-tighter mix-blend-exclusion sm_custom_1:ml-8/100 xl:w-custom_4">
            <span>Transformando</span>
            <span className="sm_custom_1:pr-16 sm_custom_1:text-end">
              paixões em
            </span>
            <span className="sm_custom_1:pr-16 sm_custom_1:text-end">
              companhia
            </span>
          </h2>

          <ContentTransformScrollEffect />

          <MembershipPanelScrollEffect />
        </section>

        <div className="h-[60vh] max-sm_custom_1:hidden lg:h-[70vh]" />
      </section>
    </main>
  )
}
