import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Slider3() {
  return (
    <div className="h-custom_1 w-full">
      <video
        preload="none"
        loop={true}
        autoPlay={true}
        muted
        playsInline
        src="https://c14.patreon.com/Ross_Draws_V4_No_Overlay_5mb_88c6c740c0.mp4"
        poster="https://c14.patreon.com/large_hero_ross_draws_poster_7a57cbd891.jpg"
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
                src="https://c14.patreon.com/thumbnail_hero_ross_draws_poster_7a57cbd891.jpg"
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

        <h1 className="inline-block w-full text-custom_3 font-extralight leading-none tracking-tighter">
          <span>Faça isso </span>
          <div className="flex items-end justify-between">
            <div>
              <ArrowDown className="h-custom_3 w-custom_1" />
            </div>
            <span className="text-end">fazendo arte</span>
          </div>
        </h1>
      </div>
    </div>
  )
}
