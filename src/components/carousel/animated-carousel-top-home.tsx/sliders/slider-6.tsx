import Image from 'next/image'
import Link from 'next/link'

interface Props {
  currentSlider?: number
}
export function Slider6({ currentSlider }: Props) {
  return (
    <div className="h-custom_1 w-full">
      <Image
        width={1000}
        height={1000}
        src="https://c14.patreon.com/fhd_Patreon_Website_Hero_2_X_72dpi_aab334416a.jpg"
        alt=""
        className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
      />

      <div className="flex h-full flex-col items-center justify-end px-6 pb-6 xl:px-10">
        <Link
          href="#"
          className="group z-10 mb-6 flex w-full overflow-hidden md:-mb-custom_3 md:justify-end"
        >
          <div
            data-value={currentSlider === 5}
            className="flex -translate-y-28 items-center justify-between gap-3 duration-1000 ease-in-out data-[value=true]:translate-y-0"
          >
            <div className="h-custom_4 w-custom_2 rounded-full bg-blue-500 hover:bg-black">
              <Image
                width={200}
                height={200}
                src="https://c14.patreon.com/thumbnail_Screenshot_2024_09_17_at_2_44_12_PM_7b168cb920.png"
                alt="Tim Chantarangsu is dropping podcast episodes and spitting fire"
                className="h-full w-full rounded-full object-cover"
              />
            </div>

            <p className="text-custom_4 leading-snug max-md:font-medium">
              Tim Chantarangsu is dropping <br /> podcast episodes and spitting
              <br /> fire
              <span className="ml-1.5 inline-block whitespace-nowrap duration-300 after:content-['->'] group-hover:translate-x-1 group-focus:translate-x-1" />
            </p>
          </div>
        </Link>

        <h1 className="inline-block w-full text-6xl font-extralight leading-none tracking-tighter md:text-custom_3">
          <span className="inline-block overflow-hidden">
            <span
              data-value={currentSlider === 5}
              className="inline-block -translate-y-32 duration-300 ease-in-out data-[value=true]:translate-y-0 xl:-translate-y-64"
            >
              Criador
            </span>
          </span>
          <span className="flex items-end justify-end overflow-hidden">
            <span
              data-value={currentSlider === 5}
              className="inline-block -translate-y-56 text-end duration-500 ease-linear data-[value=true]:translate-y-0 xl:-translate-y-132"
            >
              agora é <br className="md:hidden" /> uma <br /> carreira
            </span>
          </span>
        </h1>
      </div>
    </div>
  )
}
