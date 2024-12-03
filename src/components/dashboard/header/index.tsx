'use client'

import { HoverBackgroundIndicator } from './hover-background-Indicator'
import { mainListNavigation } from '@/constants/main-list-navigation'
import { useHoverBackground } from '@/hooks/use-hover-background'
import '@/assets/styles/utilities/bg-rise-fade.css'
import { InputHeader } from './input-header'
import { Equal } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { SubMenu } from '@/components/sub-menu'

export function Header() {
  const { hoverIndicator, handleMouseEnter, handleMouseLeave, navRef } =
    useHoverBackground()

  return (
    <header
      onMouseLeave={handleMouseLeave}
      data-value={hoverIndicator.visible}
      className="fixed left-0 top-0 z-10 w-screen data-[value=true]:text-black"
    >
      <div className="relative flex w-full items-center justify-between gap-2 p-custom_container_header max-md:flex-wrap">
        <div className="absolute left-0 top-0 flex w-full items-end max-md:hidden">
          <SubMenu
            menuIndex={hoverIndicator.index}
            hoverIndicator={hoverIndicator}
          />
        </div>

        <nav className="max-md:hidden">
          {hoverIndicator.visible && (
            <HoverBackgroundIndicator hoverIndicator={hoverIndicator} />
          )}

          <ul ref={navRef} className="flex gap-1 xl:gap-10">
            {mainListNavigation.map((item, index) => {
              const isHovered =
                hoverIndicator.visible && hoverIndicator.index === index

              return (
                <li
                  key={item}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      handleMouseEnter(index)
                    }
                  }}
                  className="bg-rise-fade group cursor-pointer px-2 py-2 font-medium before:bg-transparent hover:text-white md:py-custom_1"
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
              data-value={hoverIndicator.visible}
              className="bg-rise-fade group cursor-pointer px-2 py-2 font-medium hover:border-transparent data-[value=true]:border-black data-[value=true]:hover:text-white data-[value=true]:hover:before:bg-black md:border md:py-custom_1"
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

        <nav className="z-10 lg:flex lg:w-full lg:items-center lg:justify-center lg:pl-36">
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
                  src={`/img/logo/${hoverIndicator.visible ? 'patreon-dark' : 'patreon'}.png`}
                  alt="patreon logo marca"
                  className="h-9 w-9"
                />
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex max-md:flex-col-reverse">
          <div className="flex w-full px-2 max-md:absolute max-md:left-0 max-md:top-[4.5rem] md:w-auto lg:w-64 lg:justify-end xl:w-[26rem] 2xl:w-[30rem]">
            <InputHeader hoverIndicatorVisible={hoverIndicator.visible} />
          </div>

          <nav className="flex items-center gap-2">
            <Link
              href="#"
              data-value={hoverIndicator.visible}
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
              data-value={hoverIndicator.visible}
              className="bg-rise-fade group rounded-full bg-white px-4 py-2 font-medium text-black data-[value=true]:bg-black data-[value=true]:text-white data-[value=true]:before:bg-black md:px-6 md:py-custom_1"
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
