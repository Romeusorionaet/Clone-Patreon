'use client'

import { Search, X } from 'lucide-react'
import { useState } from 'react'
import '@/assets/styles/utilities/input-header-container.css'

export function InputHeader({
  hoverIndicatorVisible,
}: {
  hoverIndicatorVisible: boolean
}) {
  const [inputValue, setInputValue] = useState('')

  const handleCleanInput = () => {
    setInputValue('')
  }
  return (
    <div
      data-value={hoverIndicatorVisible}
      className="input-header-container group data-[value=true]:border-black"
    >
      <button className="min-h-3 min-w-3 duration-300 max-md:group-focus-within:h-8 max-md:group-focus-within:w-8 max-md:group-focus-within:text-black">
        <Search className="h-5 w-5 md:group-focus-within:text-white md:group-hover:text-white" />
      </button>
      <input
        type="text"
        placeholder="Encontre um Criador"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={() => setInputValue('')}
        className="w-full bg-transparent focus:text-white focus:outline-none max-md:text-black"
      />
      <button
        onClick={() => handleCleanInput()}
        className="hidden h-full duration-300 group-focus-within:block"
      >
        <X className="h-8 w-8 max-md:group-focus-within:text-black md:h-4 md:w-4 md:text-white" />
      </button>
    </div>
  )
}