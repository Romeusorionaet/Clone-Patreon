'use client'

import { subMenuFooter } from '@/constants/sub-meu-footer'
import { Minus, Plus } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export function SubMenuFooter() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <nav>
      <div className="flex flex-col gap-5 px-6 md:hidden">
        {subMenuFooter.map((section, index) => (
          <ul key={index}>
            <li>
              <button
                onClick={() => handleToggle(index)}
                className="flex cursor-pointer items-center gap-2 text-2xl font-light"
              >
                {section.title}
                {activeIndex === index ? (
                  <Minus size={16} />
                ) : (
                  <Plus size={16} />
                )}
              </button>
            </li>
            {activeIndex === index && (
              <ul className="mt-2 space-y-1">
                {section.items.map((item, i) => (
                  <li key={i} className="opacity-50">
                    <Link href="#">{item}</Link>
                  </li>
                ))}
              </ul>
            )}
          </ul>
        ))}
      </div>

      <div className="flex w-full justify-between gap-4/100 max-md:hidden">
        {subMenuFooter.map((section, index) => (
          <ul key={index} className="w-18/100">
            <li>{section.title}</li>
            <ul className="mt-4 space-y-1 opacity-50 xl:mt-6">
              {section.items.map((item, i) => (
                <li key={i}>
                  <Link href="#">{item}</Link>
                </li>
              ))}
            </ul>
          </ul>
        ))}
      </div>
    </nav>
  )
}
