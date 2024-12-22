import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Slider7() {
  return (
    <div className="h-custom_1 w-full">
      <video
        preload="none"
        loop={true}
        autoPlay={true}
        muted
        playsInline
        src="https://c14.patreon.com/Real_Ones_V1_Without_Overlay_5mb_1_7b4cb9fe23.mp4"
        poster="https://c14.patreon.com/large_Patreon_Website_Hero_2_X_72dpi_jon_854d9d12c9.jpg"
        className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
      ></video>

      <div className="flex h-full flex-col items-center justify-end px-6 pb-6 xl:px-10">
        <Link
          href="#"
          className="group z-10 -mb-custom_3 flex w-full justify-end"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="h-custom_4 w-custom_2 rounded-full bg-blue-500 hover:bg-black">
              <Image
                width={200}
                height={200}
                src="https://c14.patreon.com/thumbnail_Patreon_Website_Hero_2_X_72dpi_jon_854d9d12c9.jpg"
                alt="Real Ones is diving deep into the biggest issues of our time"
                className="h-full w-full rounded-full object-cover"
              />
            </div>

            <p className="text-custom_4 leading-snug">
              Real Ones is diving deep into the <br /> biggest issues of our
              time
              <span className="ml-1.5 inline-block whitespace-nowrap duration-300 after:content-['->'] group-hover:translate-x-1 group-focus:translate-x-1" />
            </p>
          </div>
        </Link>

        <h1 className="inline-block w-full text-custom_3 font-extralight leading-none tracking-tighter">
          <span>Fale </span>
          <div className="flex items-end justify-between">
            <div>
              <ArrowDown className="h-custom_3 w-custom_1" />
            </div>
            <span className="text-end">volumes</span>
          </div>
        </h1>
      </div>
    </div>
  )
}
