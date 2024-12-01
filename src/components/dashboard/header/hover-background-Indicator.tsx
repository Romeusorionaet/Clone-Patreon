import { HoverIndicatorType } from '@/hooks/use-hover-background'

export function HoverBackgroundIndicator({
  hoverIndicator,
}: {
  hoverIndicator: HoverIndicatorType
}) {
  return (
    <div
      className={`absolute rounded-full bg-black transition-all duration-300 ease-in-out`}
      style={{
        width: `${hoverIndicator.width}px`,
        height: `${hoverIndicator.height}px`,
        transform: `translate(${hoverIndicator.left}px, ${hoverIndicator.top}px)`,
      }}
    />
  )
}
