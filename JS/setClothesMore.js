const $textArea = document.querySelector('.posting-text-area')
const $letterCount = document.querySelector('.posting-word-count')
// SLIDER
const $sliderWrapper = document.querySelector('.setClothes-slider-wrapper')



$textArea.addEventListener('input', () => {
  $letterCount.textContent = $textArea.value.length

})




var swiper = new Swiper(".setClothesSwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mini-swiper", {
  slidesPerView: 6,
  spaceBetween: 0,
  spaceBetween: 10,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});