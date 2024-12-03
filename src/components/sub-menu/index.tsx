import { useEffect, useRef } from 'react'
import { SubMenuItem } from '@/components/sub-menu/sub-menu-item'
import { subMenuCreatorsData } from '@/constants/sub-menu-creators-data'

export interface SubMenuProps {
  hoverIndicator: { visible: boolean }
  menuIndex: number | null
}

export const SubMenu = ({ hoverIndicator, menuIndex }: SubMenuProps) => {
  const submenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (hoverIndicator.visible && submenuRef.current) {
      const firstItem = submenuRef.current.querySelector<HTMLAnchorElement>('a')
      firstItem?.focus()
    }
  }, [hoverIndicator.visible])

  return (
    <div
      ref={submenuRef}
      aria-hidden={!hoverIndicator.visible}
      data-value={hoverIndicator.visible}
      className="w-full -translate-y-96 bg-white pt-custom_2 transition-all duration-500 ease-out data-[value=true]:translate-y-0 data-[value=false]:opacity-20"
    >
      <div
        data-value={hoverIndicator.visible}
        className="hidden w-full items-end px-5 pb-6 data-[value=true]:flex lg:px-7 xl:px-12 xl:pb-10"
      >
        <nav className="w-full">
          <ul
            role="menubar"
            aria-hidden={!hoverIndicator.visible}
            data-value={menuIndex === 0}
            className="flex w-full justify-between gap-5 data-[value=false]:hidden"
          >
            {subMenuCreatorsData.map((section, index) => (
              <div key={index}>
                <SubMenuItem title={section.title} items={section.items} />
              </div>
            ))}
          </ul>

          <ul
            role="menubar"
            aria-hidden={!hoverIndicator.visible}
            data-value={menuIndex === 1}
            className="flex data-[value=false]:hidden"
          >
            <li>teste</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
