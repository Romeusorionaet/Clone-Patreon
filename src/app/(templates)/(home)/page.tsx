'use client'

import { AnimatedCarouselTopHome } from '@/components/carousel/animated-carousel-top-home.tsx'
import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <AnimatedCarouselTopHome>
        <div className="h-custom_1 w-full">
          <Image
            width={1000}
            height={1000}
            src="https://c14.patreon.com/June_Website_Photos_homepage_1864374e72.jpg"
            alt="Slide"
            className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
          />

          <div className="flex h-full flex-col items-center justify-end px-6 pb-6 xl:px-10">
            <div className="-mb-8 flex w-full justify-end pr-custom_3 font-medium lg:-mb-16">
              <div className="w-60 xl:w-80">
                <p className="text-custom_4">
                  Como os criadores estão{' '}
                  <span className="lg:whitespace-nowrap">
                    energizando suas comunidades e o
                  </span>{' '}
                  que está por vir
                </p>
              </div>
            </div>

            <h1 className="inline-block w-full text-custom_3 font-extralight leading-none tracking-tighter">
              <span>Para seus </span>
              <div className="flex items-end justify-between">
                <div>
                  <ArrowDown className="h-custom_3 w-custom_1" />
                </div>
                <span className="text-end">verdadeiros fãs</span>
              </div>
            </h1>
          </div>
        </div>

        <div className="h-custom_1 w-full">
          <Image
            width={1000}
            height={1000}
            src="https://c14.patreon.com/fhd_Patreon_Website_Hero_2_X_72dpi_jade2_ec15d86e4d.jpg"
            alt="Slide"
            className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
          />

          <div className="flex h-full flex-col items-center justify-end px-6 pb-6 xl:px-10">
            <Link
              href="#"
              className="group z-10 -mb-custom_2 flex w-full justify-end font-light"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="h-custom_4 w-custom_2 rounded-full bg-blue-500 hover:bg-black">
                  <Image
                    width={200}
                    height={200}
                    src="https://c14.patreon.com/thumbnail_Patreon_Website_Hero_2_X_72dpi_jade3_26709904ce.jpg"
                    alt="Slide"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>

                <p className="text-custom_4">
                  Jade Novah is fusing her loves of <br /> music, writing, and
                  comedy
                  <span className="ml-1.5 inline-block whitespace-nowrap duration-300 after:content-['->'] group-hover:translate-x-1 group-focus:translate-x-1" />
                </p>
              </div>
            </Link>

            <h1 className="inline-flex w-full flex-col text-custom_3 font-extralight leading-none tracking-tighter">
              Seu mais
              <span>selvagem</span>
              <div className="flex items-end justify-between">
                <div>
                  <ArrowDown className="h-custom_3 w-custom_1" />
                </div>
                <span className="text-end">
                  realidade <br /> criativa
                </span>
              </div>
            </h1>
          </div>
        </div>
      </AnimatedCarouselTopHome>
    </div>
  )
}
