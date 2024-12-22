import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Props {
  onClick: () => void
}

export function ArrowControlLeft({ onClick }: Props) {
  return (
    <button onClick={onClick} className="hover:-translate-x-1">
      <ChevronLeft size={40} className="rounded-full text-white" />
    </button>
  )
}

export function ArrowControlRight({ onClick }: Props) {
  return (
    <button onClick={onClick} className="hover:translate-x-1">
      <ChevronRight size={40} className="rounded-full text-white" />
    </button>
  )
}
