import { useState, useRef } from 'react'

export type EventIndicatorType = {
  width: number
  height: number
  left: number
  top: number
  visible: boolean
  index: number | null
}

export function useHoverBackground() {
  const [eventIndicator, setEventIndicator] = useState<EventIndicatorType>({
    width: 0,
    height: 0,
    left: 0,
    top: 0,
    visible: false,
    index: 0,
  })

  const navRef = useRef<HTMLUListElement | null>(null)

  const handleEventMenu = (index: number) => {
    if (navRef.current) {
      const item = navRef.current.children[index] as HTMLElement
      const { width, height, left, top } = item.getBoundingClientRect()
      const navTop = navRef.current.getBoundingClientRect().top

      setEventIndicator({
        width,
        height,
        left: left - navRef.current.offsetLeft,
        top: top - navTop,
        visible: true,
        index,
      })
    }
  }

  const handleMouseLeave = () => {
    setEventIndicator((prev) => ({ ...prev, visible: false, index: null }))
  }

  return { eventIndicator, handleEventMenu, handleMouseLeave, navRef }
}
