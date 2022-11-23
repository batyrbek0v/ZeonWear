const $textArea = document.querySelector('.posting-text-area')
const $letterCount = document.querySelector('.posting-word-count')
// SLIDER
const $sliderWrapper = document.querySelector('.setClothes-slider-wrapper')
const $descWrapper = document.querySelector('.right-side-description-template')
const $colorWrapper = document.querySelector('.right-side-color-wrapper')
const $colorWrapper2 = document.querySelector('.right-side-color-wrapperr')



const clothesDescription = [
  {
    type: 'Футболка',
    title: 'Professional II',
    subTitle: 'TORS2102IN',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget elit odio tortor hac at eget ac volutpat convallis. Pretium id sociis donec dui praesent. '
  },
  {
    type: 'Трико',
    title: 'Professional II',
    subTitle: 'TORS2102IN',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget elit odio tortor hac at eget ac volutpat convallis. Pretium id sociis donec dui praesent.'
  },
  {
    type: 'Шорты',
    title: 'Professional II',
    subTitle: 'TORS2102IN',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget elit odio tortor hac at eget ac volutpat convallis. Pretium id sociis donec dui praesent.'
  },
  {
    type: 'Сумка',
    title: 'Professional II',
    subTitle: 'TORS2102IN',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget elit odio tortor hac at eget ac volutpat convallis. Pretium id sociis donec dui praesent.'
  },
  {
    type: 'Спортивка',
    title: 'Professional II',
    subTitle: 'TORS2102IN',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget elit odio tortor hac at eget ac volutpat convallis. Pretium id sociis donec dui praesent.'
  },
]

const colors = [
  {
    HEX: '#171717'
  },
  {
    HEX: '#1D9F22'
  },
  {
    HEX: '#FD9B08'
  },
  {
    HEX: '#FFFFFF'
  },
  {
    HEX: '#C398F9'
  },
  {
    HEX: '#B5CAF0'
  },
  {
    HEX: '#BEA461'
  },
  {
    HEX: '#1D889F'
  },
  {
    HEX: '#B4AEA5'
  },
]
window.addEventListener('load', () => {
  clothesDescriptionTemplate(clothesDescription)
  colorTemplate(colors)
  colorTemplatee(colors)

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
var swiper = new Swiper(".setClothes-left-side-mobile", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});

$textArea.addEventListener('input', () => {
  $letterCount.textContent = $textArea.value.length
})


const clothesDescriptionTemplate = (base) => {
  const template = base.map(({ type, title, subTitle, content }) => {
    return `
        <div class="right-side-description-block">
          <div class="right-side-description-top">
            <h1>${type}</h1>
            <p>${title}</p>
            <p>${subTitle}</p>
          </div>
          <div class="right-side-description-content">
            <p>${content}</p>
          </div>
      </div>
    `
  }).join('')

  $descWrapper.innerHTML = template

}
const colorTemplate = (color) => {
  const template = color.map(({ HEX }) => {
    return `
      <div class="right-side-color" style = "background: ${HEX} ;" ></div >
      `
  }).join('')
  $colorWrapper.innerHTML = template
}
const colorTemplatee = (color) => {
  const template = color.map(({ HEX }) => {
    return `
      <div class="right-side-color" style = "background: ${HEX} ;" ></div >
      `
  }).join('')
  $colorWrapper2.innerHTML = template
}