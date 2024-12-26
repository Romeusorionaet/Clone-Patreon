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

  const carouselGalleryScreen = {
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 30000,
    pauseOnHover: true,
  }

  return { carouselResponsive, carouselGalleryScreen }
}
