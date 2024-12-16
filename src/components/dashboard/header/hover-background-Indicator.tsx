import { EventIndicatorType } from '@/hooks/use-hover-background'

export function HoverBackgroundIndicator({
  eventIndicator,
}: {
  eventIndicator: EventIndicatorType
}) {
  return (
    <div
      className={`absolute rounded-full bg-black transition-all duration-300 ease-in-out`}
      style={{
        width: `${eventIndicator.width}px`,
        height: `${eventIndicator.height}px`,
        transform: `translate(${eventIndicator.left}px, ${eventIndicator.top}px)`,
      }}
    />
  )
}
