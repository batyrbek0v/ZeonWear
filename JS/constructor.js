const $listWrapper = document.querySelector('.const-sidebar-list-wrapper')
const $colorWrapper = document.querySelector('.const-filter-color-wrapper')

const filterList = [
  {
    listTitle: 'Виды спорта',
    list: [
      {
        id: 1,
        list: 'Футбол',
      },
      {
        id: 2,
        list: 'Мини-футбол',
      },
      {
        id: 3,
        list: 'Волейбол',
      },
      {
        id: 4,
        list: 'Легкая атлетика',
      },
      {
        id: 6,
        list: 'Гандбол',
      },
      {
        id: 7,
        list: 'Фитнес',
      },
      {
        id: 8,
        list: 'Регби',
      },
      {
        id: 9,
        list: 'Йога',
      },
    ]
  },

]
const color = [
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
  menFilterListTemplate(filterList)
  colorTemplate(color)
})


const swiperOutfit = new Swiper('.swiper-outfit-slider', {
  slidesPerView: 5,
  spaceBetween: 40,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  slidesOffsetBefore: -10,
  slideToClickedSlide: true,
  simulateTouch: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    '320': {
      slidesPerView: 1,
    },
    '768': {
      slidesPerView: 3,
    },
    '1200': {
      slidesPerView: 5,
    },
  },
});

const swiperOutfitShort = new Swiper('.swiper-outfit-short', {
  slidesPerView: 5,
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  slidesOffsetBefore: 38,
  slideToClickedSlide: true,
  simulateTouch: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    '320': {
      slidesPerView: 1,
      slidesOffsetBefore: 25,

    },
    '768': {
      slidesPerView: 3,
    },
    '1200': {
      slidesPerView: 5,
    },
  },
});

const swiperOutfitFoot = new Swiper('.swiper-outfit-foot', {
  slidesPerView: 5,
  spaceBetween: 50,
  centeredSlides: true,
  loop: true,
  slidesOffsetBefore: 18,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  slideToClickedSlide: true,
  simulateTouch: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    '320': {
      slidesPerView: 1,
      slidesOffsetBefore: 22,
    },
    '767': {
      slidesPerView: 3,
    },
    '1200': {
      slidesPerView: 5,
      slidesOffsetBefore: 12,
    },
  },
});

const menFilterListTemplate = (menList) => {
  const template = menList.map(({ listTitle, list }) =>
    `
      <div class="const-sidebar-filter-list">
        <div class="const-sidebar-filter-title">
          <h1>${listTitle}</h1>
          <img src="/assets/icons/arrow-down-filter.svg" alt="arrow-down">
        </div>
        ${list.map(item =>
      `
        <label>
          <input type="checkbox" class="const-sidebar-filter-checkbox">
          ${item.list}
        </label>
      `).join('')}
      </div >
    `
  ).join('')

  $listWrapper.innerHTML = template
}

const colorTemplate = (color) => {
  const template = color.map(({ HEX }) => `
    <div class="const-filter-color" style="background: ${HEX} ;"></div>
  `).join('')
  $colorWrapper.innerHTML = template
}


