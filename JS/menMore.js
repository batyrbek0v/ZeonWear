const $imageWrapper = document.querySelector('.product-image-wrapper')
const $listWrapper = document.querySelector('.characteristic-wrapper')
const $addToCartBtn = document.querySelector('.add-to-cartt')
const $addedPopUp = document.querySelector('.added-tto-cart-popUp')
const $addToCartBtnMobile = document.querySelector('.add-to-cart')
const $addedPopUpMobile = document.querySelector('.added-to-cart-popUp')


const imageBase = [
  {
    url: '/assets/images/menMore-img1.png'
  },
  {
    url: '/assets/images/menMore-img2.png'
  },
  {
    url: '/assets/images/menMore-img3.png'
  },
  {
    url: '/assets/images/menMore-img3.png'
  },
  {
    url: '/assets/images/menMore-img3.png'
  },
  {
    url: '/assets/images/menMore-img3.png'
  },
]

const productDescription = [
  {
    title: 'Материал верха',
    description: 'полимер,текстиль'
  },
  {
    title: 'Внутренний материал',
    description: 'текстиль'
  },
  {
    title: 'Материал подошвы',
    description: 'искуственный материал, резина'
  },
  {
    title: 'Материал стельки',
    description: 'текстиль'
  },
  {
    title: 'Сезон',
    description: 'мульти'
  },
  {
    title: 'Цвет',
    description: 'желтый'
  },
  {
    title: 'Вид спорта',
    description: 'бег'
  },
  {
    title: 'Страна производства',
    description: 'Камбоджа'
  },
  {
    title: 'Застежка',
    description: 'шнурки'
  },
  {
    title: 'Артикул',
    description: 'AS455AMKBWJ7'
  },
]

window.addEventListener('load', () => {
  imageTemplate(imageBase)
  descriptionTemplate(productDescription)
})

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",

  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 1500,

  }
});

const imageTemplate = (base) => {
  const template = base.map(({ url }) => {
    return `
    <div class="product-image">
      <img src="${url}" alt="Joma top-flex sneakers">
    </div>
    `
  }).join('')

  $imageWrapper.innerHTML = template

}

const descriptionTemplate = (base) => {
  const template = base.map(({ title, description }) => {
    return `
      <div class="characteristic-box">
        <div class="characteristic-box-title">
          <p>${title}:</p>
          <div class="bordered-box"></div>
        </div>
        <div class="characteristic-desc">
          <p>${description}</p>
        </div>
      </div>
    `
  }).join('')

  $listWrapper.innerHTML = template
}

$addToCartBtn.addEventListener('click', e => {
  e.preventDefault()
  $addedPopUp.classList.toggle('added')

  setTimeout(() => {
    $addedPopUp.classList.remove('added')
  }, 2000)

})

$addToCartBtnMobile.addEventListener('click', e => {
  e.preventDefault()
  $addedPopUpMobile.classList.toggle('added')

  setTimeout(() => {
    $addedPopUpMobile.classList.remove('added')
  }, 2000)
})