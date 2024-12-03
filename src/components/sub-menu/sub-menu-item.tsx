import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface Props {
  title: string
  items: string[]
}

export const SubMenuItem = ({ title, items }: Props) => (
  <li role="menuitem">
    <Link
      href="#"
      className="inline-table w-28 text-sm font-medium md_middle:w-full xl:text-lg"
    >
      {title} <ArrowRight className="inline h-4 w-4" />
    </Link>

    <ul
      className="submenu mt-custom_1 flex w-full min-w-32 max-w-72 flex-col gap-custom_1"
      role="menu"
    >
      {items.map((item, index) => (
        <li
          key={index}
          role="menuitem"
          className="text-custom_1 opacity-50 duration-300 hover:opacity-100"
        >
          <Link href="#">{item}</Link>
        </li>
      ))}
    </ul>
  </li>
)
