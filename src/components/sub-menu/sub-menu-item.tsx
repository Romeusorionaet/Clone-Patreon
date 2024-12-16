import Link from 'next/link'

interface Props {
  title: string
  items: string[]
}

export const SubMenuItem = ({ title, items }: Props) => (
  <li role="menuitem" className="w-full">
    <Link href="#" className="group inline-block text-custom_2 font-medium">
      {title}
      <span className="ml-1.5 inline-block whitespace-nowrap text-custom_base_text duration-300 after:content-['->'] group-hover:translate-x-1" />
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
