// DOM-ELEMENTS
const $categoryWrapper = document.querySelector('.main-category-block')
const $templateContainer = document.querySelector('.men-template-container')
const $menFilterWrapper = document.querySelector('.men-filter-list-wrapper')
const $menFilterColorWrapper = document.querySelector('.men-filter-color-wrapper')
// DOM-ELEMENTS




const category = [
  {
    title: 'Бутсы'
  },
  {
    title: 'Мини-футбол'
  },
  {
    title: 'Фитнес'
  },
  {
    title: 'Обувь'
  },
  {
    title: 'Йога'
  },
  {
    title: 'Майки и футболки'
  },
  {
    title: 'Куртки и жилеты'
  },
  {
    title: 'Спортивные костюмы'
  },
  {
    title: 'Головной убор'
  },
  {
    title: 'Мячи'
  },
  {
    title: 'Бутсы'
  },
]


const clotheBase = [
  {
    id: 1,
    title: 'Top Flex',
    description: 'Lorem ipsum dolar sit amet, consectetur',
    price: '12 980',
    delPrice: '11 033',
    isNew: true,
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
    image: '/assets/images/men-yellow-t-shirt.png',
    lineIcon: '/assets/icons/men-clothe-price-line.svg',
    heartIcon: '/assets/icons/men-clothe-heart.svg'
  },
  {
    id: 3,
    title: 'Top Flex',
    description: 'Lorem ipsum dolar sit amet, consectetur',
    price: '12 980',
    delPrice: '11 033',
    sale: '15',
    isNew: true,
    image: '/assets/images/men-blue-t-shirt.png',
    lineIcon: '/assets/icons/men-clothe-price-line.svg',
    heartIcon: '/assets/icons/men-clothe-heart.svg'

  },
  {
    id: 4,
    title: 'Top Flex',
    description: 'Lorem ipsum dolar sit amet, consectetur',
    price: '12 980',
    delPrice: '11 033',
    sale: '15',
    isNew: false,
    image: '/assets/images/men-green-sneakers.png',
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
    image: '/assets/images/men-red-sneakers.png',
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
    image: '/assets/images/men-green-t-shirt.png',
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
    image: '/assets/images/men-yellow-t-shirt.png',
    lineIcon: '/assets/icons/men-clothe-price-line.svg',
    heartIcon: '/assets/icons/men-clothe-heart.svg'

  },
  {
    id: 8,
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
    id: 9,
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
    id: 10,
    title: 'Top Flex',
    description: 'Lorem ipsum dolar sit amet, consectetur',
    price: '12 980',
    delPrice: '11 033',
    isNew: false,
    image: '/assets/images/men-red-sneakers.png',
    lineIcon: '/assets/icons/men-clothe-price-line.svg',
    heartIcon: '/assets/icons/men-clothe-heart.svg'

  },
  {
    id: 11,
    title: 'Top Flex',
    description: 'Lorem ipsum dolar sit amet, consectetur',
    price: '12 980',
    delPrice: '11 033',
    isNew: false,
    image: '/assets/images/men-blue-t-shirt.png',
    lineIcon: '/assets/icons/men-clothe-price-line.svg',
    heartIcon: '/assets/icons/men-clothe-heart.svg'

  },
  {
    id: 12,
    title: 'Top Flex',
    description: 'Lorem ipsum dolar sit amet, consectetur',
    price: '12 980',
    delPrice: '11 033',
    isNew: false,
    image: '/assets/images/men-red-sneakers.png',
    lineIcon: '/assets/icons/men-clothe-price-line.svg',
    heartIcon: '/assets/icons/men-clothe-heart.svg'

  },
]

const filterList = [
  {
    listTitle: 'Категория',
    list: [
      {
        id: 1,
        list: 'Футболка',
      },
      {
        id: 2,
        list: 'Шорты',
      },
      {
        id: 3,
        list: 'Трико',
      },
      {
        id: 4,
        list: 'Обувь',
      },
      {
        id: 6,
        list: 'Спортивка',
      },
      {
        id: 7,
        list: 'Головной убор',
      },
    ]
  },
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

const filterColor = [
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
  const template = category.map(({ title }) => categoryTemplate(title)).join('')

  $categoryWrapper.innerHTML = template

  menClotheTemplate(clotheBase)
  menFilterListTemplate(filterList)
  menFilterColorTemplate(filterColor)

})


const categoryTemplate = title => `<button class="main-category-btn">${title}</button>`


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
    <div class="men-clothe-block">
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

  $templateContainer.innerHTML = template
}

const menFilterListTemplate = (menList) => {
  const template = menList.map(({ listTitle, list }) =>
    `
      <div class="men-sidebar-filter-list">
        <div class="men-sidebar-filter-title">
          <h1>${listTitle}</h1>
          <img src="/assets/icons/arrow-down-filter.svg" alt="arrow-down">
        </div>
        ${list.map(item =>
      `
        <label>
          <input type="checkbox" class="men-filter-checkbox">
          ${item.list}
        </label>
      `).join('')}
      </div >
    `
  ).join('')

  $menFilterWrapper.innerHTML = template
}

const menFilterColorTemplate = (color) => {
  const template = color.map(({ HEX }) => `
    <div class="men-filter-color" style="background: ${HEX} ;"></div>
  `).join('')
  $menFilterColorWrapper.innerHTML = template
}