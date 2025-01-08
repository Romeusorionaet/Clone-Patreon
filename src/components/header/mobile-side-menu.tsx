import { MobileSideMenuFormContext } from '@/context/mobile-side-menu-provider'
import { ArrowLeft, CornerDownRight, Plus, X } from 'lucide-react'
import { AppStoreLinks } from '../app-store-links'
import { useContext, useState } from 'react'
import Link from 'next/link'

export function MobileSideMenu() {
  const { sideMenuIsOpen, handleSideMenu } = useContext(
    MobileSideMenuFormContext,
  )

  const [menuItem, setMenuItem] = useState<string>('')
  const [subMenuIsOpen, setSubMenuIsOpen] = useState(false)

  const handleSubMenuAside = (item: string) => {
    setMenuItem(item)
    setSubMenuIsOpen((prevState) => !prevState)
  }

  return (
    <aside
      aria-label="Menu lateral"
      data-value={sideMenuIsOpen}
      className="absolute z-30 w-full bg-c1 text-c2 duration-300 data-[value=false]:-ml-100/100"
    >
      <aside
        aria-label="Sub Menu lateral"
        data-value={subMenuIsOpen}
        className="absolute z-40 w-full bg-c1 text-c2 duration-300 data-[value=false]:-ml-100/100"
      >
        <div className="relative w-full pt-5">
          <h1 className="text-center text-lg">{menuItem}</h1>
          <button
            onClick={() => handleSubMenuAside('')}
            className="absolute left-3 top-2"
          >
            <ArrowLeft size={44} />
          </button>
        </div>

        <nav className="h-screen w-full overflow-auto px-4 pb-32">
          <ul
            data-value={menuItem === 'Criadores'}
            className="mt-12 space-y-3 text-2xl data-[value=false]:hidden"
          >
            <li>Podcasters</li>
            <li>Criadores de vídeo</li>
            <li>Músicos</li>
            <li>Artistas</li>
            <li>Desenvolvedores de jogos</li>
          </ul>

          <ul
            data-value={menuItem === 'Características'}
            className="mt-12 space-y-3 text-2xl data-[value=false]:hidden"
          >
            <li>Crie do seu jeito</li>
            <li>Cie uma comunidade real</li>
            <li>Expanda seu alcance</li>
            <li>Obtenha suporte comercial</li>
            <li>
              Ganhar de forma fácil
              <ul className="mt-6 space-y-2 opacity-50">
                <li className="flex">
                  <CornerDownRight size={18} /> Administre uma associação
                </li>
                <li className="flex">
                  <CornerDownRight size={18} /> Venda produtos digitais
                </li>
              </ul>
            </li>
          </ul>

          <ul
            data-value={menuItem === 'Recursos'}
            className="mt-12 space-y-3 text-2xl data-[value=false]:hidden"
          >
            <li>
              Hub de criadores
              <ul className="mt-6 space-y-2 opacity-50">
                <li className="flex">
                  <CornerDownRight size={18} /> Recursos para começar
                </li>
                <li className="flex">
                  <CornerDownRight size={18} /> Aumente sua associação
                </li>
                <li className="flex">
                  <CornerDownRight size={18} /> Conecte-se com criadores
                </li>
              </ul>
            </li>
            <li>
              Redação
              <ul className="mt-6 space-y-2 opacity-50">
                <li className="flex">
                  <CornerDownRight size={18} /> Sede do Patreon
                </li>
                <li className="flex">
                  <CornerDownRight size={18} /> Leia as últimas atualizações da
                  política
                </li>
                <li className="flex">
                  <CornerDownRight size={18} /> Explore as atualizações do
                  produto
                </li>
              </ul>
            </li>
            <li>
              Centro de ajuda
              <ul className="mt-6 space-y-2 opacity-50">
                <li className="flex">
                  <CornerDownRight size={18} /> Começando
                </li>
                <li className="flex">
                  <CornerDownRight size={18} /> Pagamentos do Patreon
                </li>
                <li className="flex">
                  <CornerDownRight size={18} /> Gestão de membros
                </li>
                <li className="flex">
                  <CornerDownRight size={18} /> Engajamento do conteúdo &
                </li>
              </ul>
            </li>
            <li>Integrações com Partners & Móvel</li>
          </ul>
        </nav>
      </aside>

      <div className="h-screen w-full px-4">
        <div className="relative w-full pt-5">
          <h1 className="text-center text-xs uppercase">patreon</h1>

          <button
            onClick={() => handleSideMenu()}
            className="absolute right-3 top-2 z-40"
          >
            <X size={44} />
          </button>
        </div>

        <ul className="mt-14 space-y-3 text-2xl">
          <li>
            <button
              onClick={() => handleSubMenuAside('Criadores')}
              className="flex items-center gap-1"
            >
              Criadores <Plus size={16} />
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSubMenuAside('Características')}
              className="flex items-center gap-1"
            >
              Características <Plus size={16} />
            </button>
          </li>
          <li>
            <Link href="#">Preços</Link>
          </li>
          <li>
            <button
              onClick={() => handleSubMenuAside('Recursos')}
              className="flex items-center gap-1"
            >
              Recursos <Plus size={16} />
            </button>
          </li>
          <li>
            <Link
              href="#"
              className="inline-block w-56 rounded-full border px-5 py-4 text-center"
            >
              Atualizações
            </Link>
          </li>
        </ul>

        <div className="mt-48">
          <Link
            href="#"
            className="inline-block w-full rounded-full border bg-c2 p-4 text-center text-c1"
          >
            Comece
          </Link>

          <AppStoreLinks />
        </div>
      </div>
    </aside>
  )
}
