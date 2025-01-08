import '@/assets/styles/components/input-header.css'
import { Search, X } from 'lucide-react'
import { useState } from 'react'

interface Props {
  eventIndicatorVisible: boolean
  scrolled: boolean
}

export function InputHeader({ eventIndicatorVisible, scrolled }: Props) {
  const [inputValue, setInputValue] = useState('')

  const handleCleanInput = () => {
    setInputValue('')
  }
  return (
    <div
      data-value={eventIndicatorVisible}
      data-scroll={scrolled}
      className="input-header-container group focus-within:!mx-auto focus-within:!w-full data-[scroll=true]:border-c1 data-[value=true]:border-c1 max-md:mx-5/100 data-[scroll=true]:max-md:mx-4 data-[scroll=true]:max-md:w-9 data-[scroll=true]:max-md:justify-center"
    >
      <button className="min-h-3 min-w-3 duration-300 max-md:group-focus-within:h-8 max-md:group-focus-within:w-8 max-md:group-focus-within:text-c1">
        <Search className="h-5 w-5 md:group-focus-within:text-c2 md:group-hover:text-c2" />
      </button>
      <input
        type="text"
        placeholder="Encontre um Criador"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={() => setInputValue('')}
        className="w-full bg-transparent focus:outline-none md:focus:text-c2"
      />
      <button
        onClick={() => handleCleanInput()}
        className="hidden h-full duration-300 group-focus-within:block"
      >
        <X className="h-8 w-8 max-md:group-focus-within:text-c1 md:h-4 md:w-4 md:text-c2" />
      </button>
    </div>
  )
}
