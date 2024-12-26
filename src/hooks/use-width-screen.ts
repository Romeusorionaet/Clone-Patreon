'use client'

import { useEffect, useState } from 'react'

export function useWidthScreen() {
  const [widthScreen, setWidthScreen] = useState<number>(window.innerWidth)

  useEffect(() => {
    setWidthScreen(window.innerWidth)

    window.onresize = () => {
      setWidthScreen(window.innerWidth)
    }
  }, [widthScreen])

  return { widthScreen }
}
