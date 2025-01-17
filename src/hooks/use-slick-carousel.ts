export function useSlickCarousel() {
  const carouselResponsive = {
    fade: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    waitForAnimate: false,
    autoplaySpeed: 5000,
    cssEase: 'linear',
  }

  return { carouselResponsive }
}
