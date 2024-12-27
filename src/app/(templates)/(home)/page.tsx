import { CarouselImagesSecondSection } from '@/components/carousel/carousel-images-second-section'
import { AnimatedCarouselTopHome } from '@/components/carousel/animated-carousel-top-home.tsx'
import '@/assets/styles/utilities/backgrounds-section.css'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <AnimatedCarouselTopHome />

      <section className="background-1 relative flex h-150 w-full flex-col items-center justify-center md_custom_2:h-custom_2">
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

      <section>
        <Image
          width={1000}
          height={1000}
          src="https://c14.patreon.com/Patreon_Website_Module3_2_X_72dpi_Kamauu1_c26920eff8.jpg"
          alt=""
        />
      </section>
    </main>
  )
}
