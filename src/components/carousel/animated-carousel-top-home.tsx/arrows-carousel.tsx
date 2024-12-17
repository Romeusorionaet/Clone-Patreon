import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Props {
  sizeList: boolean
  onClick: () => void
}

export function ArrowControlLeft({ sizeList, onClick }: Props) {
  return (
    <div className="absolute left-1/2 top-1/2 z-20 flex h-full -translate-x-1/2 -translate-y-1/2 transform items-center justify-center p-2 max-md:hidden">
      <button
        data-list={sizeList}
        onClick={onClick}
        className="bg-red-500 data-[list=true]:hidden"
      >
        <ChevronLeft
          size={22}
          className="rounded-full text-white duration-700"
        />
      </button>
    </div>
  )
}

export function ArrowControlRight({ sizeList, onClick }: Props) {
  return (
    <div className="absolute left-1/2 top-1/2 z-20 flex h-full -translate-x-1/2 -translate-y-1/2 transform items-center justify-center p-2 max-md:hidden">
      <button
        data-list={sizeList}
        onClick={onClick}
        className="bg-red-500 data-[list=true]:hidden"
      >
        <ChevronRight
          size={22}
          className="rounded-full text-white duration-700"
        />
      </button>
    </div>
  )
}
