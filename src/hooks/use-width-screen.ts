import { useEffect, useState } from 'react'

export function useWidthScreen() {
  const [widthScreen, setWidthScreen] = useState<number>(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidthScreen(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return { widthScreen }
}
