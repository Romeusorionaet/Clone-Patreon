'use client'

import { Search, X } from 'lucide-react'
import { useState } from 'react'

export function InputHeader() {
  const [inputValue, setInputValue] = useState('')

  const handleCleanInput = () => {
    setInputValue('')
  }
  return (
    <div className="group flex items-center gap-3 rounded-3xl border border-white p-2 duration-300 focus-within:rounded-full focus-within:bg-white focus-within:p-6">
      <Search className="duration-300 group-focus-within:h-8 group-focus-within:w-8 group-focus-within:text-black" />
      <input
        type="text"
        placeholder="Find a Creator"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={() => setInputValue('')}
        className="w-full bg-transparent text-black focus:outline-none"
      />
      <X
        onClick={() => handleCleanInput()}
        className="hidden h-10 w-10 duration-300 group-focus-within:block group-focus-within:text-black"
      />
    </div>
  )
}
