import { resourcesMenu } from '@/constants/sub-menu-list/resources-menu'
import { creatorsMenu } from '@/constants/sub-menu-list/creators-menu'
import { featuresMenu } from '@/constants/sub-menu-list/features-menu'
import { pricesMenu } from '@/constants/sub-menu-list/prices-menu'
import { SubMenuItem } from '@/components/sub-menu/sub-menu-item'
import '@/assets/styles/components/sub-menu.css'
import { useEffect, useRef } from 'react'

export interface SubMenuProps {
  eventIndicator: { visible: boolean }
  menuIndex: number | null
}

export const SubMenu = ({ eventIndicator, menuIndex }: SubMenuProps) => {
  const submenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (eventIndicator.visible && submenuRef.current) {
        const activeSubmenu =
          submenuRef.current.querySelector<HTMLUListElement>(
            `ul[data-value="true"]`,
          )
        const firstItem = activeSubmenu?.querySelector<HTMLAnchorElement>('a')

        if (e.key === 'Enter' && firstItem) {
          firstItem.focus()
        }
      }
    }

    window.addEventListener('keydown', handleKeydown)

    return () => {
      window.removeEventListener('keydown', handleKeydown)
    }
  }, [eventIndicator.visible, menuIndex])

  return (
    <div
      inert={!eventIndicator.visible}
      data-value={eventIndicator.visible}
      className="w-full -translate-y-96 bg-white pt-custom_2 transition-all duration-500 ease-out data-[value=true]:translate-y-0 data-[value=false]:opacity-20"
    >
      <div
        data-value={eventIndicator.visible}
        className="hidden w-full items-end px-5 pb-6 data-[value=true]:flex lg:px-7 xl:px-12 xl:pb-10"
      >
        <nav ref={submenuRef} className="w-full">
          <ul
            id="submenu-creators"
            role="menubar"
            inert={menuIndex !== 0}
            data-value={menuIndex === 0}
            className="custom-width-title-creators flex w-full justify-between gap-5 data-[value=false]:hidden"
          >
            {creatorsMenu.map((section, index) => (
              <SubMenuItem
                key={index}
                title={section.title}
                items={section.items}
              />
            ))}
          </ul>

          <ul
            id="submenu-features"
            role="menubar"
            inert={menuIndex !== 1}
            data-value={menuIndex === 1}
            className="custom-width-title-features flex w-full justify-between gap-5 data-[value=false]:hidden"
          >
            {featuresMenu.map((section, index) => (
              <SubMenuItem
                key={index}
                title={section.title}
                items={section.items}
              />
            ))}
          </ul>

          <ul
            id="submenu-prices"
            role="menubar"
            inert={menuIndex !== 2}
            data-value={menuIndex === 2}
            className="flex w-full justify-between gap-5 data-[value=false]:hidden"
          >
            {pricesMenu.map((section, index) => (
              <SubMenuItem
                key={index}
                title={section.title}
                items={section.items}
              />
            ))}
          </ul>

          <ul
            id="submenu-resources"
            role="menubar"
            inert={menuIndex !== 3}
            data-value={menuIndex === 3}
            className="custom-width-title-resources flex w-full justify-between gap-5 data-[value=false]:hidden"
          >
            {resourcesMenu.map((section, index) => (
              <SubMenuItem
                key={index}
                title={section.title}
                items={section.items}
              />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
