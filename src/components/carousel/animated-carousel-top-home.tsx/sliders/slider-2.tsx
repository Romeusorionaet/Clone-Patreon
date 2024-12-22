import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Slider2() {
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
          className="group z-10 -mb-custom_2 flex w-full justify-end"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="h-custom_4 w-custom_2 rounded-full bg-blue-500 hover:bg-black">
              <Image
                width={200}
                height={200}
                src="https://c14.patreon.com/thumbnail_Patreon_Website_Hero_2_X_72dpi_jade3_26709904ce.jpg"
                alt="Jade Novah is fusing her loves of music, writing, and comedy"
                className="h-full w-full rounded-full object-cover"
              />
            </div>

            <p className="text-custom_4 leading-snug">
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
  )
}
