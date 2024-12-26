'use client'

import { CarouselImagesSecondSection } from '@/components/carousel/carousel-images-second-section'
import { AnimatedCarouselTopHome } from '@/components/carousel/animated-carousel-top-home.tsx'
import '@/assets/styles/utilities/background-1.css'

export default function Home() {
  return (
    <main>
      <AnimatedCarouselTopHome />

      <section className="background-1 relative flex h-150 w-full flex-col items-center justify-center md:h-custom_2">
        <h2 className="absolute top-0 z-10 flex h-full w-full flex-col justify-between px-6 pb-64 pt-16 text-custom_5 leading-none text-c3/70 md:pb-6">
          <span>
            Criatividade <br /> alimentado
          </span>
          <span className="text-end">
            de <br /> fandom
          </span>
        </h2>

        <div className="absolute bottom-16 left-6 z-10 w-80 md:w-129">
          <p className="text-lg font-semibold tracking-wide text-c3/70 md:text-xl">
            O Patreon é o melhor lugar para criar uma comunidade com seus
            maiores fãs, compartilhar trabalhos exclusivos e transformar sua
            paixão em um negócio criativo duradouro.
          </p>
        </div>

        <div className="z-20 w-full">
          <CarouselImagesSecondSection />
        </div>
      </section>
    </main>
  )
}
