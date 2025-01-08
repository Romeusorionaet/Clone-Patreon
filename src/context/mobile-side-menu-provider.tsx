import { ReactNode, createContext, useEffect, useState } from 'react'

interface MobileSideMenuContextType {
  sideMenuIsOpen: boolean
  handleSideMenu: () => void
}

interface MobileSideMenuFormContextProps {
  children: ReactNode
}

export const MobileSideMenuFormContext = createContext(
  {} as MobileSideMenuContextType,
)

export function MobileSideMenuFormContextProvider({
  children,
}: MobileSideMenuFormContextProps) {
  const [sideMenuIsOpen, setSideMenuIsOpen] = useState(false)

  const handleSideMenu = () => {
    setSideMenuIsOpen((prevState) => !prevState)
  }

  useEffect(() => {
    if (sideMenuIsOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [sideMenuIsOpen])

  return (
    <MobileSideMenuFormContext.Provider
      value={{ sideMenuIsOpen, handleSideMenu }}
    >
      {children}
    </MobileSideMenuFormContext.Provider>
  )
}
