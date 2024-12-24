import { ArrowMoveDown } from '@/components/animated-components/arrow-move-down'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  currentSlider?: number
}
export function Slider2({ currentSlider }: Props) {
  return (
    <div className="h-custom_1 w-full">
      <Image
        width={1000}
        height={1000}
        src="https://c14.patreon.com/fhd_Patreon_Website_Hero_2_X_72dpi_jade2_ec15d86e4d.jpg"
        alt=""
        className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
      />

      <div className="flex h-full flex-col items-center justify-end px-6 pb-6 xl:px-10">
        <Link
          href="#"
          className="group mb-6 flex w-full overflow-hidden md:-mb-custom_2 md:justify-end"
        >
          <div
            data-value={currentSlider === 1}
            className="flex -translate-y-28 items-center justify-between gap-3 duration-1000 ease-in-out data-[value=true]:translate-y-0"
          >
            <div className="h-custom_4 w-custom_2 rounded-full bg-blue-500 hover:bg-black">
              <Image
                width={200}
                height={200}
                src="https://c14.patreon.com/thumbnail_Patreon_Website_Hero_2_X_72dpi_jade3_26709904ce.jpg"
                alt="Jade Novah is fusing her loves of music, writing, and comedy"
                className="h-full w-full rounded-full object-cover"
              />
            </div>

            <p className="text-custom_4 leading-snug max-md:font-medium">
              Jade Novah is fusing her loves of <br />
              music, writing, and comedy
              <span className="ml-1.5 inline-block whitespace-nowrap duration-300 after:content-['->'] group-hover:translate-x-1 group-focus:translate-x-1" />
            </p>
          </div>
        </Link>

        <h1 className="inline-flex w-full flex-col text-6xl font-extralight leading-none tracking-tighter md:text-custom_3">
          <span className="inline-block overflow-hidden py-3 xl:py-4">
            <span
              data-value={currentSlider === 1}
              className="inline-block -translate-y-64 duration-300 ease-in-out data-[value=true]:translate-y-0 xl:-translate-y-132"
            >
              Seu mais <br /> selvagem
            </span>
          </span>
          <span className="flex items-end justify-between overflow-hidden">
            <Link
              href="#"
              className="-ml-16 inline-block w-40 xl:-ml-32 xl:w-80"
            >
              <ArrowMoveDown />
            </Link>
            <span
              data-value={currentSlider === 1}
              className="inline-block -translate-y-64 text-end duration-500 ease-linear data-[value=true]:translate-y-0 xl:-translate-y-132"
            >
              realidade <br /> criativa
            </span>
          </span>
        </h1>
      </div>
    </div>
  )
}
