'use client'

import '@/assets/styles/utilities/Image-measurements-from-gallery-carousel.css'
import { useWidthScreen } from '@/hooks/use-width-screen'
import { Swiper, SwiperSlide } from 'swiper/react'
import '@/assets/styles/slide-slick/slick.css'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'
import 'swiper/css/bundle'

export function CarouselImagesSecondSection() {
  const { widthScreen } = useWidthScreen()

  return (
    <section className="max-md:mb-36 md:mt-20">
      <Swiper
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={widthScreen <= 768 ? 10000 : 50000}
        spaceBetween={0}
        slidesPerView={widthScreen <= 768 ? 1.1 : 3}
        loop
        modules={[Autoplay]}
      >
        <SwiperSlide className="my-auto">
          <div className="wrapper-1">
            <div className="image-measurement-1 animate-move-right">
              <Image
                width={800}
                height={800}
                src="https://c14.patreon.com/Patreon_Website_Module2_tall_2_X_72dpi_0018_Background_copy_6_b1c973e50b.jpg"
                alt=""
              />
              <button className="absolute bottom-4 left-4">button</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wrapper-2">
            <div className="image-measurement-2">
              <Image
                width={1000}
                height={1000}
                src="https://c14.patreon.com/nijmeddin_patreon_0128_2v_07298_d278984032.jpg"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wrapper-3">
            <div className="image-measurement-3 animate-move-right">
              <Image
                width={1000}
                height={1000}
                src="https://c14.patreon.com/Patreon_wesite_Module2_square_2x_72dpi_0000s_0002_Layer_1_86168b9184.jpg"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wrapper-4">
            <div className="image-measurement-4">
              <Image
                width={1000}
                height={1000}
                src="https://c14.patreon.com/Patreon_Website_Module2_tall_2_X_72dpi_0020_Background_copy_4_32fa4db95a.jpg"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="my-auto">
          <div className="wrapper-5">
            <div className="image-measurement-5">
              <Image
                width={500}
                height={500}
                src="https://c14.patreon.com/Patreon_website_Module2_2x_wide_72dpi_0012_Background_copy_17_77168ddc46.jpg"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="my-auto">
          <div className="wrapper-6">
            <div className="image-measurement-6">
              <Image
                width={1000}
                height={1000}
                src="https://c14.patreon.com/Patreon_Website_Module2_tall_2_X_72dpi_0000s_0007_Layer_0_b10904e408.jpg"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="my-auto">
          <div className="wrapper-7">
            <div className="image-measurement-7 animate-move-right">
              <Image
                width={1000}
                height={1000}
                src="https://c14.patreon.com/Patreon_Website_Module3_2_X_72dpi_kevin1_1cf0614561.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
