export function useSlickCarousel() {
  const carouselResponsive = {
    fade: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    waitForAnimate: false,
  }

  return { carouselResponsive }
}
