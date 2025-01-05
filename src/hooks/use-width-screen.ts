import { useEffect, useState } from 'react'

export function useWidthScreen() {
  const [widthScreen, setWidthScreen] = useState<number>(0)

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
