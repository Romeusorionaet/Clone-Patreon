import { useState, useRef } from 'react'

export type HoverIndicatorType = {
  width: number
  height: number
  left: number
  top: number
  visible: boolean
  index: number | null
}

export function useHoverBackground() {
  const [hoverIndicator, setHoverIndicator] = useState<HoverIndicatorType>({
    width: 0,
    height: 0,
    left: 0,
    top: 0,
    visible: false,
    index: 0,
  })

  const navRef = useRef<HTMLUListElement | null>(null)

  const handleMouseEnter = (index: number) => {
    if (navRef.current) {
      const item = navRef.current.children[index] as HTMLElement
      const { width, height, left, top } = item.getBoundingClientRect()
      const navTop = navRef.current.getBoundingClientRect().top

      setHoverIndicator({
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
    setHoverIndicator((prev) => ({ ...prev, visible: false, index: null }))
  }

  return { hoverIndicator, handleMouseEnter, handleMouseLeave, navRef }
}