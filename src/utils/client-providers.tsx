'use client'

import { MobileSideMenuFormContextProvider } from '@/context/mobile-side-menu-provider'
import LocomotiveScroll, { ILocomotiveScrollOptions } from 'locomotive-scroll'
import { ReactNode, useEffect, useRef } from 'react'

interface CustomLocomotiveScrollOptions extends ILocomotiveScrollOptions {
  el?: HTMLElement | null
}

export default function ClientProviders({ children }: { children: ReactNode }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!scrollContainerRef.current) return

    const locomotiveScroll = new LocomotiveScroll({
      el: scrollContainerRef.current,
      smooth: true,
    } as CustomLocomotiveScrollOptions)

    return () => {
      locomotiveScroll.destroy()
    }
  }, [])

  return (
    <div ref={scrollContainerRef}>
      <MobileSideMenuFormContextProvider>
        {children}
      </MobileSideMenuFormContextProvider>
    </div>
  )
}
