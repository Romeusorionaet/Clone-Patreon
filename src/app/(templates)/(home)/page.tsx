import { AnimatedCarouselTopHome } from '@/components/carousel/animated-carousel-top-home.tsx'

export default function Home() {
  const test = [
    'https://wallpapercave.com/wp/wp8881504.jpg',
    'https://wallpapercave.com/wp/wp2506797.jpg',
    'https://wallpapercave.com/wp/wp4980156.jpg',
  ]
  return (
    <div className="h-custom_1 w-full">
      <AnimatedCarouselTopHome content={test} />
    </div>
  )
}
