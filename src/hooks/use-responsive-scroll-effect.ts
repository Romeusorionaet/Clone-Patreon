import { useEffect, useRef, useState } from 'react'

interface ScrollEffectConfig {
  breakpoints: {
    [key: string]: {
      maxOffset: number
      visibilityRatio?: number
      minOffset?: number
    }
  }
  widthScreen: number
}

export function useResponsiveScrollEffect({
  breakpoints,
  widthScreen,
}: ScrollEffectConfig) {
  const areaRef = useRef<HTMLDivElement>(null)
  const [topValue, setTopValue] = useState(0)

  const [visibilityRatio, setVisibilityRatio] = useState(0)
  const [maxOffset, setMaxOffset] = useState(0)
  const [minOffset, setMinOffset] = useState(0)

  useEffect(() => {
    if (widthScreen <= 768) {
      setVisibilityRatio(breakpoints.small.visibilityRatio ?? 0)
      setMaxOffset(breakpoints.small.maxOffset)
      setMinOffset(breakpoints.small.minOffset ?? 0)
    } else if (widthScreen >= 1280) {
      setVisibilityRatio(breakpoints.large.visibilityRatio ?? 0)
      setMaxOffset(breakpoints.large.maxOffset)
      setMinOffset(breakpoints.large.minOffset ?? 0)
    } else {
      setVisibilityRatio(breakpoints.medium.visibilityRatio ?? 0)
      setMaxOffset(breakpoints.medium.maxOffset)
      setMinOffset(breakpoints.medium.minOffset ?? 0)
    }
  }, [widthScreen, breakpoints])

  useEffect(() => {
    const handleScroll = () => {
      const section = areaRef.current
      if (!section) return

      const { top: sectionTop, height: sectionHeight } =
        section.getBoundingClientRect()

      if (sectionTop <= window.innerHeight && sectionTop + sectionHeight >= 0) {
        const progress =
          1 -
          Math.min(
            Math.max(sectionTop / window.innerHeight, visibilityRatio),
            1,
          )
        const newTop = minOffset - progress * maxOffset
        setTopValue(newTop)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [maxOffset, visibilityRatio, minOffset])

  return { areaRef, topValue }
}
