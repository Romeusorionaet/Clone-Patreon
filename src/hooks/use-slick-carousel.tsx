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
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 9000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  }

  return { carouselResponsive, carouselGalleryScreen }
}
