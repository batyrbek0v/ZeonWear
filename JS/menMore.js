const $imageWrapper = document.querySelector('.product-image-wrapper')
const $listWrapper = document.querySelector('.characteristic-wrapper')
const $addToCartBtn = document.querySelector('.add-to-cartt')
const $addedPopUp = document.querySelector('.added-tto-cart-popUp')
const $addToCartBtnMobile = document.querySelector('.add-to-cart')
const $addedPopUpMobile = document.querySelector('.added-to-cart-popUp')
const $cardsWrapper = document.querySelector('.swiper-wrapper-cards')






const $closeClothesSizeModal = document.querySelector('.close-clothes-size-modal')
const $clotheSizesModalMobile = document.querySelector('.clothe-sizes-block')
const $showClothesSize = document.querySelector('.show-clothes-size')
const $clothesSizeTable = document.querySelector('.clothes-size-table')
const $clothesSizeСontainer = document.querySelector('.clothes-size-container')
const $overley = document.querySelector('.overley')



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


const clotheBase = [
  {
    id: 1,
    title: 'Top Flex',
    description: 'Lorem ipsum dolar sit amet, consectetur',
    price: '12 980',
    delPrice: '11 033',
    isNew: false,
    image: '/assets/images/men-white-sneakers.png',
    lineIcon: '/assets/icons/men-clothe-price-line.svg',
    heartIcon: '/assets/icons/men-clothe-heart.svg'
  },
  {
    id: 2,
    title: 'Top Flex',
    description: 'Lorem ipsum dolar sit amet, consectetur',
    price: '12 980',
    delPrice: '11 033',
    isNew: false,
    image: '/assets/images/men-white-sneakers.png',
    lineIcon: '/assets/icons/men-clothe-price-line.svg',
    heartIcon: '/assets/icons/men-clothe-heart.svg'
  },
  {
    id: 3,
    title: 'Top Flex',
    description: 'Lorem ipsum dolar sit amet, consectetur',
    price: '12 980',
    delPrice: '11 033',
    isNew: false,
    image: '/assets/images/men-white-sneakers.png',
    lineIcon: '/assets/icons/men-clothe-price-line.svg',
    heartIcon: '/assets/icons/men-clothe-heart.svg'
  },
  {
    id: 4,
    title: 'Top Flex',
    description: 'Lorem ipsum dolar sit amet, consectetur',
    price: '12 980',
    delPrice: '11 033',
    isNew: false,
    image: '/assets/images/men-white-sneakers.png',
    lineIcon: '/assets/icons/men-clothe-price-line.svg',
    heartIcon: '/assets/icons/men-clothe-heart.svg'
  },
  {
    id: 5,
    title: 'Top Flex',
    description: 'Lorem ipsum dolar sit amet, consectetur',
    price: '12 980',
    delPrice: '11 033',
    isNew: false,
    image: '/assets/images/men-white-sneakers.png',
    lineIcon: '/assets/icons/men-clothe-price-line.svg',
    heartIcon: '/assets/icons/men-clothe-heart.svg'
  },
  {
    id: 6,
    title: 'Top Flex',
    description: 'Lorem ipsum dolar sit amet, consectetur',
    price: '12 980',
    delPrice: '11 033',
    isNew: false,
    image: '/assets/images/men-white-sneakers.png',
    lineIcon: '/assets/icons/men-clothe-price-line.svg',
    heartIcon: '/assets/icons/men-clothe-heart.svg'
  },
  {
    id: 7,
    title: 'Top Flex',
    description: 'Lorem ipsum dolar sit amet, consectetur',
    price: '12 980',
    delPrice: '11 033',
    isNew: false,
    image: '/assets/images/men-white-sneakers.png',
    lineIcon: '/assets/icons/men-clothe-price-line.svg',
    heartIcon: '/assets/icons/men-clothe-heart.svg'
  },
]


const clotheSize = [
  {
    sizes: [
      {
        size: '36',
      },
      {
        size: '37',
      },
      {
        size: '37.5',
      },
      {
        size: '38',
      },
      {
        size: '39',
      },
      {
        size: '40'
      },
      {
        size: '40.5',
      },
      {
        size: '41',
      },
      {
        size: '42',
      },
      {
        size: '42.5',
      },
      {
        size: '43',
      },
      {
        size: '43.5',
      },
      {
        size: '44',
      },
      {
        size: '44.5',
      },
      {
        size: '45',
      },
      {
        size: '46',
      },
    ]
  },
  {
    sizes: [
      {
        size: '4.5',
      },
      {
        size: '5',
      },
      {
        size: '5.5',
      },
      {
        size: '6',
      },
      {
        size: '6.5',
      },
      {
        size: '7',
      },
      {
        size: '7.5'
      },
      {
        size: '8',
      },
      {
        size: '8.5',
      },
      {
        size: '9',
      },
      {
        size: '9.5',
      },
      {
        size: '10',
      },
      {
        size: '10.5',
      },
      {
        size: '11',
      },
      {
        size: '11.5',
      },
      {
        size: '12',
      },
    ]
  },
  {
    sizes: [
      {
        size: '23',
      },
      {
        size: '23.5',
      },
      {
        size: '24',
      },
      {
        size: '24.5',
      },
      {
        size: '25',
      },
      {
        size: '25.5',
      },
      {
        size: '26'
      },
      {
        size: '26.5',
      },
      {
        size: '27',
      },
      {
        size: '27.5',
      },
      {
        size: '28',
      },
      {
        size: '28.5',
      },
      {
        size: '29',
      },
      {
        size: '30',
      },
      {
        size: '30',
      },
      {
        size: '30.5',
      },
    ]
  },
  {
    sizes: [
      {
        size: '23',
      },
      {
        size: '23.5',
      },
      {
        size: '24',
      },
      {
        size: '24.5',
      },
      {
        size: '25',
      },
      {
        size: '25.5',
      },
      {
        size: '26'
      },
      {
        size: '26.5',
      },
      {
        size: '27',
      },
      {
        size: '27.5',
      },
      {
        size: '28',
      },
      {
        size: '28.5',
      },
      {
        size: '29',
      },
      {
        size: '30',
      },
      {
        size: '30',
      },
      {
        size: '30.5',
      },
    ]
  },
]



window.addEventListener('load', () => {
  imageTemplate(imageBase)
  descriptionTemplate(productDescription)
  menClotheTemplate(clotheBase)
  // clothesSizeTemplate(clotheSize)
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

var swiper2 = new Swiper(".mySwiperr", {
  slidesPerView: "auto",
  spaceBetween: 12,
  keyboard: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
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


const menClotheTemplate = (clothe) => {
  const template = clothe.map(
    ({
      id,
      title,
      description,
      price,
      delPrice,
      sale,
      isNew,
      image,
      lineIcon,
      heartIcon
    }) =>
      `
    <div class="swiper-slide men-clothe-block">
      <div class=${isNew ? "men-clothe-top-isNew" : "men-clothe-top"}>
        <div class=${isNew ? "men-clothe-new-block" : "notNew"}>
          <p>NEW</p>
        </div>
        <div class="men-clothe-top-favorite">
          <img src="${heartIcon}" alt="Heart-Icon">
        </div>
      </div>
      <div class="men-clothe-image">
        <img src="${image}" alt="men-clothes">
      </div>
      <div class="men-clothe-footer">
        <div class="men-clothe-description">
          <h1>${title}</h1>
          <p>${description}</p>
        </div>
        <div class=${!sale ? "men-clothe-price" : "men-clothe-price-with-sale"}>
          <strong>${price} &#8381</strong>
          <img src="${lineIcon}" alt="Line-Icons">
          <span><del>${delPrice}</del> &#8381</span>
          ${sale ? `<img src="${lineIcon}">` : ''}
          ${sale ? `<span>${sale}%</span>` : ''}
        </div>
      </div>
   </div>
  `
  ).join('')

  $cardsWrapper.innerHTML = template
}

// 




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


//const showClothesSizePopUp = () => {
  //   $clothesSizeСontainer.classList.toggle('active')
  //   $overley.classList.toggle('active')
  // }
  

// $showClothesSize.addEventListener('click', e => {
//   e.preventDefault()

//   $clothesSizeСontainer.classList.toggle('active')
//   $overley.classList.toggle('active')
// })

// $closeClothesSizeModal.addEventListener('click', e => {
//   e.preventDefault()

//   $overley.classList.remove('active')
//   $clothesSizeСontainer.classList.remove('active')
// })
// const clothesSizeTemplate = (sizes) => {
//   const template = `
//   <div class="size-code-block" >
//     <div class="size-code-inner">
//       <div class="sizeCode">EUR</div>
//       <div class="sizeCode">US</div>
//       <div class="sizeCode">CM</div>
//       <div class="sizeCode">UK</div>
//     </div>
//     <div class="sizes-container">
//       ${sizes.map(({ sizes }) => `
//         <div class="sizes-block">
//           ${sizes.map(item => `<div>${item.size}</div>`
//   ).join('')}
//         </div>
//       `).join('')}
//     </div>
//   </div>
//   `

//   $clothesSizeTable.innerHTML = template
// }