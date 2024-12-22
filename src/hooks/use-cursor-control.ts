import { useState } from 'react'

export function useCursorControl() {
  const [isCursorActive, setCursorActive] = useState(true)

  const activateCursor = () => setCursorActive(true)
  const deactivateCursor = () => setCursorActive(false)

  return {
    isCursorActive,
    activateCursor,
    deactivateCursor,
  }
}
