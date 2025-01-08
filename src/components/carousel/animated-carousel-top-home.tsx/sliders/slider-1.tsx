import Image from 'next/image'
import Link from 'next/link'

interface Props {
  currentSlider?: number
}
export function Slider1({ currentSlider }: Props) {
  return (
    <div className="h-custom_1 w-full">
      <Image
        width={1000}
        height={1000}
        src="https://c14.patreon.com/June_Website_Photos_homepage_1864374e72.jpg"
        alt=""
        className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
      />

      <div className="flex h-full flex-col items-center justify-end px-6 pb-6 xl:px-10">
        <div className="flex w-full flex-col items-end justify-end gap-4 overflow-hidden max-md:mb-20 max-md:font-medium md:-mb-8 md:pr-custom_3 lg:-mb-16">
          <div className="w-60 xl:w-80">
            <p
              data-value={currentSlider === 0}
              className="-translate-y-28 text-custom_4 leading-snug duration-500 ease-in-out data-[value=true]:translate-y-0"
            >
              Como os criadores estão{' '}
              <span className="lg:whitespace-nowrap">
                energizando suas comunidades e o
              </span>{' '}
              que está por vir
            </p>
          </div>
          <Link
            href="#"
            data-value={currentSlider === 0}
            className="inline-block w-28 rounded-md bg-c2 p-2 text-center text-xs text-c1 opacity-0 duration-500 data-[value=true]:opacity-100 lg:w-32 lg:font-normal"
          >
            Saiba mais
          </Link>
        </div>

        <h1 className="inline-block text-6xl font-extralight leading-none tracking-tighter md:w-full md:text-custom_3">
          <span className="inline-block overflow-hidden">
            <span
              data-value={currentSlider === 0}
              className="inline-block -translate-y-28 duration-300 ease-in-out data-[value=true]:translate-y-0 lg:-translate-y-44 xl:-translate-y-52"
            >
              Para seus
            </span>
          </span>
          <span className="flex items-end justify-end overflow-hidden">
            <span
              data-value={currentSlider === 0}
              className="inline-block -translate-y-28 text-end duration-500 ease-linear data-[value=true]:translate-y-0 lg:-translate-y-44 xl:-translate-y-52"
            >
              verdadeiros fãs
            </span>
          </span>
        </h1>
      </div>
    </div>
  )
}
