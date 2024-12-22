import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Props {
  onClick: () => void
}

export function ArrowControlLeft({ onClick }: Props) {
  return (
    <button onClick={onClick}>
      <ChevronLeft size={36} className="rounded-full text-white" />
    </button>
  )
}

export function ArrowControlRight({ onClick }: Props) {
  return (
    <button onClick={onClick}>
      <ChevronRight size={36} className="rounded-full text-white" />
    </button>
  )
}
