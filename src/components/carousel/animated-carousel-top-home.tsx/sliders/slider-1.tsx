import { ArrowDown } from 'lucide-react'
import Image from 'next/image'

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
        <div className="-mb-8 flex w-full justify-end pr-custom_3 lg:-mb-16">
          <div className="w-60 xl:w-80">
            <p className="text-custom_4 leading-snug">
              Como os criadores estão{' '}
              <span className="lg:whitespace-nowrap">
                energizando suas comunidades e o
              </span>{' '}
              que está por vir
            </p>
          </div>
        </div>

        <h1 className="inline-block w-full text-custom_3 font-extralight leading-none tracking-tighter">
          <span className="inline-block overflow-hidden">
            <span
              data-value={currentSlider === 0}
              className="inline-block -translate-y-28 duration-300 ease-in-out data-[value=true]:translate-y-0 xl:-translate-y-52"
            >
              Para seus
            </span>
          </span>
          <span className="flex items-end justify-between overflow-hidden">
            <span>
              <ArrowDown className="h-custom_3 w-custom_1" />
            </span>
            <span
              data-value={currentSlider === 0}
              className="inline-block -translate-y-28 text-end duration-500 ease-linear data-[value=true]:translate-y-0 xl:-translate-y-52"
            >
              verdadeiros fãs
            </span>
          </span>
        </h1>
      </div>
    </div>
  )
}
