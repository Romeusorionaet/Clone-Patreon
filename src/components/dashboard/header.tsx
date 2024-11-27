import { Equal } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { InputHeader } from './input-header'

export function Header() {
  return (
    <header className="fixed left-0 top-0 w-screen">
      <div className="flex w-full justify-between p-4">
        <div className="flex items-center gap-4">
          <Equal className="h-10 w-10" />
          <Image
            width={200}
            height={200}
            src="/img/logo/patreon.png"
            alt="patreon logo marca"
            className="h-10 w-10"
          />
        </div>

        <nav className="flex items-center gap-4 text-lg">
          <Link href="#">Log in</Link>
          <Link href="#" className="rounded-3xl bg-white p-3 text-black">
            Get Started
          </Link>
        </nav>
      </div>

      <div className="px-6">
        <InputHeader />
      </div>
    </header>
  )
}
