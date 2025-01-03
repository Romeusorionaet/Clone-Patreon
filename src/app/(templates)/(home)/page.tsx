import { CarouselImagesSecondSection } from '@/components/carousel/carousel-images-second-section'
import { AnimatedCarouselTopHome } from '@/components/carousel/animated-carousel-top-home.tsx'
import { ImageWithScrollEffect } from '@/components/scroll-effect/image-with-scroll-effect'
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
            alt="your vip pass"
            className="absolute top-24 h-40 w-32 md:top-56 md:h-56 md:w-48 xl:top-80 xl:h-80 xl:w-80"
          />
          <Image
            width={1000}
            height={1000}
            src="https://c14.patreon.com/Component_Card_1_0135f12736.png"
            alt="chelsea devantez's"
            className="absolute h-24 w-20 max-xl:top-1/2 md:h-40 md:w-40 xl:bottom-40 xl:h-60 xl:w-60"
          />

          <Image
            width={1000}
            height={1000}
            src="https://c14.patreon.com/Component_Card_8_dbf120bf79.png"
            alt="A visual odyssey"
            className="absolute -right-8 top-20 h-32 w-48 md:right-1/4 xl:right-1/3 xl:h-48 xl:w-60"
          />
          <Image
            width={1000}
            height={1000}
            src="https://c14.patreon.com/Component_Card_6_00ed3428aa.png"
            alt="chronicles of a hip-hop"
            className="absolute -right-5 h-36 w-28 max-xl:top-96 max-md:top-56 md:right-0 md:h-60 md:w-40 xl:bottom-56 xl:h-96 xl:w-60"
          />

          <h2 className="pt-96 text-center text-custom_5 font-light leading-none tracking-tight mix-blend-exclusion md:pt-56 xl:pt-80">
            Completo <br /> criativo <br /> controle
          </h2>

          <div className="ml-10 mt-80 flex w-custom_3 flex-col items-start gap-4 md:ml-44 md:mt-56 xl:ml-96">
            <p className="leading-tight tracking-tight text-c1 md:text-custom_6">
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

        <section className="px-4 pt-40 md:px-4/100 xl:px-5/100">
          <h2 className="md:ml-8/100 text-custom_5 font-light leading-none tracking-tighter mix-blend-exclusion md:ml-5/100">
            Criadores. Fãs. <br /> Nada em <br /> entre.
          </h2>

          <div className="flex justify-between max-md:flex-col md:pl-[14%] xl:pl-[13%]">
            <div
              data-scroll
              data-scroll-speed={-0.04}
              className="flex flex-col items-start gap-6 max-md:mt-10 md:mt-10 md:w-1/2"
            >
              <div className="space-y-4 text-sm leading-tight tracking-tight text-c1 md:w-70/100 md:text-custom_10">
                <p>
                  O Patreon oferece uma linha direta de acesso à sua comunidade
                  de fãs, sem anúncios ou algoritmos no caminho.
                </p>

                <p>
                  Por meio de bate-papos em grupo em tempo real, comentários,
                  DMs e até mesmo diretamente por e-mail, você pode se conectar
                  de forma mais profunda e direta com sua comunidade aqui do que
                  em qualquer outro lugar.
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

            <div
              data-scroll
              data-scroll-speed={0.2}
              className="max-md:mt-10 md:-mt-[30%] md:h-custom_8 md:w-custom_6"
            >
              <video
                preload="none"
                loop
                autoPlay
                muted
                playsInline
                src="https://c14.patreon.com/1_Chelsea_1161fe215b.mp4"
                className="h-full w-full rounded-3xl object-fill"
              />
            </div>
          </div>
        </section>

        <section className="px-4 pt-20 max-md:pt-44 md:mt-32 md:px-4/100 xl:px-5/100">
          <h2 className="flex flex-col text-custom_5 font-light leading-none tracking-tighter mix-blend-exclusion md:ml-5/100 xl:w-custom_4">
            <span>Transformando</span>
            <span className="md:pr-16 sm_custom_1:text-end">paixões em</span>
            <span className="md:pr-16 sm_custom_1:text-end">companhia</span>
          </h2>

          <div className="flex space-y-10 max-md:flex-col-reverse md:gap-10/100 md:pl-14/100">
            <div
              data-scroll
              data-scroll-speed={0.1}
              className="max-md:mt-24 md:-mt-15/100 md:h-custom_7 md:w-custom_5"
            >
              <Image
                width={1000}
                height={1000}
                src="https://c14.patreon.com/Mobile_Insights_931320bfbd.png"
                alt="Painel de associação"
                className="h-full w-full rounded-3xl"
              />
            </div>

            <div
              data-scroll
              data-scroll-speed={-0.04}
              className="flex w-full items-start"
            >
              <div className="flex w-full gap-16 text-c1 max-md:flex-col md:w-95/100 md_custom_1:gap-24 xl:w-70/100">
                <div className="flex flex-col items-start gap-6">
                  <h3 className="text-custom_11 font-medium max-md:text-2xl">
                    Mais formas de ganhar
                  </h3>

                  <p className="leading-tight">
                    No Patreon, você pode construir um negócio duradouro fora do
                    ecossistema baseado em anúncios, com fontes de receita que
                    vão desde a associação para oferecer benefícios contínuos
                    até lojas on-line para vender vídeos individuais, episódios
                    de podcast e muito mais.
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
                    O Patreon não serve apenas para o crescimento criativo, é
                    também para o crescimento profissional. Obtenha análises
                    detalhadas sobre seus fãs, explore ferramentas poderosas de
                    gerenciamento de relacionamento e explore uma crescente
                    comunidade de criadores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="h-[60vh] max-sm_custom_1:hidden lg:h-[70vh]" />
      </section>
    </main>
  )
}
