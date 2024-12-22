'use client'

import { HoverBackgroundIndicator } from './hover-background-Indicator'
import { mainListNavigation } from '@/constants/main-list-navigation'
import { useHoverBackground } from '@/hooks/use-hover-background'
import '@/assets/styles/utilities/bg-rise-fade.css'
import { SubMenu } from '@/components/sub-menu'
import { InputHeader } from './input-header'
import { Equal } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  const { eventIndicator, handleEventMenu, handleMouseLeave, navRef } =
    useHoverBackground()

  return (
    <header
      onMouseLeave={handleMouseLeave}
      data-value={eventIndicator.visible}
      className="fixed left-0 top-0 z-20 w-screen data-[value=true]:text-black"
    >
      <div className="relative flex w-full items-center justify-between gap-2 p-custom_container_header max-md:flex-wrap">
        <div className="absolute left-0 top-0 flex w-full items-end max-md:hidden">
          <SubMenu
            menuIndex={eventIndicator.index}
            eventIndicator={eventIndicator}
          />
        </div>

        <nav className="max-md:hidden">
          {eventIndicator.visible && (
            <HoverBackgroundIndicator eventIndicator={eventIndicator} />
          )}

          <ul ref={navRef} className="flex gap-0.5 lg:gap-2">
            {mainListNavigation.map((item, index) => {
              const isHovered =
                eventIndicator.visible && eventIndicator.index === index

              return (
                <li
                  key={item}
                  onMouseEnter={() => handleEventMenu(index)}
                  onClick={() => handleEventMenu(index)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      handleEventMenu(index)
                    }
                  }}
                  className="bg-rise-fade group cursor-pointer font-medium before:bg-transparent hover:text-white md:py-custom_1"
                >
                  <Link href="#">
                    <div className="overflow-hidden">
                      <span
                        data-content={item}
                        data-value={isHovered}
                        className={`bg-rise-fade-content before:content-[attr(data-content)] group-hover:animate-rise-from-bottom data-[value=true]:text-white`}
                      >
                        {item}
                      </span>
                    </div>
                  </Link>
                </li>
              )
            })}
            <li
              data-value={eventIndicator.visible}
              className="bg-rise-fade group cursor-pointer font-medium hover:border-transparent data-[value=true]:border-black data-[value=true]:hover:text-white data-[value=true]:hover:before:bg-black md:border"
            >
              <Link href="#">
                <div className="overflow-hidden">
                  <span className="bg-rise-fade-content before:content-['Atualizações'] group-hover:animate-rise-from-bottom">
                    Atualizações
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="z-10 lg:flex lg:w-full lg:items-center lg:justify-center">
          <ul className="flex items-center gap-3">
            <li className="max-md_middle:hidden">
              <Link
                href="#"
                className="text-custom_patreon font-medium uppercase tracking-wider"
              >
                pantreon
              </Link>
            </li>
            <li className="md:hidden">
              <Link href="#">
                <Equal className="h-7.5 w-7.5" />
              </Link>
            </li>
            <li className="md_middle:hidden">
              <Link href="#">
                <Image
                  width={200}
                  height={200}
                  src={`/img/logo/${eventIndicator.visible ? 'patreon-dark' : 'patreon'}.png`}
                  alt="patreon logo marca"
                  className="h-9 w-9"
                />
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex max-md:flex-col-reverse">
          <div className="flex w-full px-2 max-md:absolute max-md:left-0 max-md:top-[4.5rem] md:w-auto lg:w-64 lg:justify-end 2xl:w-96">
            <InputHeader eventIndicatorVisible={eventIndicator.visible} />
          </div>

          <nav className="flex items-center gap-2">
            <Link
              href="#"
              data-value={eventIndicator.visible}
              className="bg-rise-fade group px-3 py-2 data-[value=true]:border-black data-[value=true]:text-black data-[value=true]:hover:text-white data-[value=true]:hover:before:bg-black md:border md:p-custom_1 md:text-white"
            >
              <div className="overflow-hidden">
                <span className="bg-rise-fade-content before:content-['Faça_o_login'] group-hover:animate-rise-from-bottom">
                  Faça o login
                </span>
              </div>
            </Link>
            <Link
              href="#"
              data-value={eventIndicator.visible}
              className="bg-rise-fade group rounded-full bg-white px-4 py-2 font-medium text-black data-[value=true]:bg-black data-[value=true]:text-white data-[value=true]:before:bg-black md:p-custom_1 md:px-6"
            >
              <div className="overflow-hidden">
                <span className="bg-rise-fade-content before:content-['Comece'] group-hover:animate-rise-from-bottom">
                  Comece
                </span>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
