import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Props {
  onClick: () => void
}

export function ArrowControlLeft({ onClick }: Props) {
  return (
    <button onClick={onClick} className="hover:-translate-x-1">
      <ChevronLeft className="h-8 w-8 rounded-full text-white md:h-10 md:w-10" />
    </button>
  )
}

export function ArrowControlRight({ onClick }: Props) {
  return (
    <button onClick={onClick} className="hover:translate-x-1">
      <ChevronRight className="h-8 w-8 rounded-full text-white md:h-10 md:w-10" />
    </button>
  )
}
