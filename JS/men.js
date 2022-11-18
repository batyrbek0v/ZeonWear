// DOM-ELEMENTS
const $categoryWrapper = document.querySelector('.main-category-block')
const $templateContainer = document.querySelector('.men-template-container')
const $menFilterWrapper = document.querySelector('.men-filter-list-wrapper')
const $menFilterColorWrapper = document.querySelector('.men-filter-color-wrapper')
const $menFilterPopUpMobile = document.querySelector('.filter-modal-mobile')
const $showModalBtn = document.querySelector('.show-modal')
const $showModalMobile = document.querySelector('.show-sort-modal-mobile')
const $sortModal = document.querySelector('.men-right-side-top-modal')
const $sortModalMobile = document.querySelector('.men-right-side-top-modal-mobile')
const $showFilterMobile = document.querySelector('.show-filter-modal-mobile')
const $showClothesSize = document.querySelector('.show-clothes-size')
const $clothesSizeTable = document.querySelector('.clothes-size-table')
const $clothesSizeСontainer = document.querySelector('.clothes-size-container')
const $closeClothesSizeModal = document.querySelector('.close-clothes-size-modal')
const $clotheSizesModalMobile = document.querySelector('.clothe-sizes-block')
const $overley = document.querySelector('.overley')
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
  const template = category.map(({ title }) => categoryTemplate(title)).join('')

  $categoryWrapper.innerHTML = template

  menClotheTemplate(clotheBase)
  menFilterListTemplate(filterList)
  menFilterColorTemplate(filterColor)
  clothesSizeTemplate(clotheSize)
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

const modalTemplate = () => {
  const template = `
  <p>Сортировать по:</p>
  <label>
    <input type="radio" name="sorting">
    Популярности
  </label>
  <label>
    <input type="radio" name="sorting">
    Цене
  </label>
  <label>
    <input type="radio" name="sorting">
    Новинкам
  </label>
  <label>
    <input type="radio" name="sorting">
    Скидкам
  </label>
  <label>
    <input type="radio" name="sorting">
    Рекомендованные
  </label>
  `
  $sortModal.innerHTML = template
  $sortModalMobile.innerHTML = template
}

const filterMobilePopUpTemplate = (HEX, filterList) => {

  const template =
    `
    <div class="men-sidebar-filter-block">
      <div class="close-filter-modal">
        <img src="/assets/icons/closeFilterModal.svg" alt="splash icon" onclick="closeMobileFilterPopUp()">
        <p>Фильтры</p>
      </div>
      <div class="men-filter-list-wrapper">
        ${filterList.map(({ listTitle, list }) => `
          <div class="men-sidebar-filter-list">
              <div class="men-sidebar-filter-title">
                <p>${listTitle}</p>
                <img src="/assets/icons/arrow-down-filter.svg" alt="arrow-down">
              </div>
              ${list.map(item => `
                <label>
                  <input type="checkbox" class="men-filter-checkbox">
                  ${item.list}
                </label>
            `).join('')}
          </div >
        `).join('')}
      </div>
      <div class="men-filter-block">
        <div class="men-sidebar-filter-title">
          <p>Бренд</p>
          <img src="/assets/icons/arrow-down-filter.svg" alt="arrow-down">
        </div>
        <label>
          <input type="search" class="men-filter-search" placeholder="Я ищу...">
        </label>
      </div>
      <div class="men-filter-block">
        <div class="men-sidebar-filter-title">
          <p>Цена</p>
          <img src="/assets/icons/arrow-down-filter.svg" alt="arrow-down">
        </div>
        <div class="men-filter-sort-block">
          <div class="left-sort">
            <label>
              Oт
              <input type="text">
            </label>
          </div>
          <div class="right-sort">
            <label>
              До
              <input type="text">
            </label>
          </div>
        </div>
      </div>
      <div class="men-filter-block">
        <div class="men-sidebar-filter-title">
          <p>Размер</p>
          <img src="/assets/icons/arrow-down-filter.svg" alt="arrow-down">
        </div>
        <div class="men-filter-size-block">
          <div class="men-filter-size-countries">
            <div>
              <span class="active">EU</span>
            </div>
            <div><span>US</span></div>
            <div><span>JP</span></div>
            <div><span>RU</span></div>
          </div>
          <div class="men-filter-size-btns">
            <button>38</button>
            <button>39</button>
            <button>40</button>
            <button>40,5</button>
            <button>41</button>
            <button>42</button>
            <button>42,5</button>
            <button>43</button>
            <button>43,5</button>
            <button>44</button>
            <button>44,5</button>
            <button>45</button>
            <button>46</button>
            <button>47</button>
          </div>
          <p onclick="showClothesSizePopUp()">Таблица размеров</p>
        </div>
      </div>
      <div class="men-filter-list-wrapper">
        <div class="men-sidebar-filter-title second">
          <p>Материал</p>
          <img src="/assets/icons/arrow-down-filter.svg" alt="arrow-down">
        </div>
        <div class="men-sidebar-filter-list">
          <label>
            <input type="checkbox" class="men-filter-checkbox">
            Искусcтвенная кожа
          </label>
          <label>
            <input type="checkbox" class="men-filter-checkbox">
            Натуральная замша
          </label>
          <label>
            <input type="checkbox" class="men-filter-checkbox">
            Натуральная кожа
          </label>
          <label>
            <input type="checkbox" class="men-filter-checkbox">
            Натуральный нубук
          </label>
          <label>
            <input type="checkbox" class="men-filter-checkbox">
            Нубук
          </label>
          <label>
            <input type="checkbox" class="men-filter-checkbox">
            Полиуретан
          </label>
        </div>
      </div>
      <div class="men-filter-block">
        <div class="men-sidebar-filter-title">
          <p>Цвет</p>
          <img src="/assets/icons/arrow-down-filter.svg" alt="arrow-down">
        </div>
        <div class="men-filter-color-wrapper">
          ${HEX.map(({ HEX }) => `
            <div class="men-filter-color" style="background: ${HEX} ;"></div>
          `).join('')}
        </div>
      </div>
    
    </div>
    <div class="filter-mobile-bottom-btn">
      <button onclick="closeMobileFilterPopUp()">Применить</button>
    </div>
    `

  $menFilterPopUpMobile.innerHTML = template
}

const clothesSizeTemplate = (sizes) => {
  const template = `
  <div class="size-code-block" >
    <div class="size-code-inner">
      <div class="sizeCode">EUR</div>
      <div class="sizeCode">US</div>
      <div class="sizeCode">CM</div>
      <div class="sizeCode">UK</div>
    </div>
    <div class="sizes-container">
      ${sizes.map(({ sizes }) => `
        <div class="sizes-block">
          ${sizes.map(item => `<div>${item.size}</div>`
  ).join('')}
        </div>
      `).join('')}
    </div>
  </div>
  `

  $clothesSizeTable.innerHTML = template
}

const closeMobileFilterPopUp = () => {
  $menFilterPopUpMobile.classList.remove('showFilterPopUpMobile')
}


const showClothesSizePopUp = () => {
  $clothesSizeСontainer.classList.toggle('active')
  $overley.classList.toggle('active')
}


$showModalBtn.addEventListener('click', e => {
  e.preventDefault()
  modalTemplate()

  $sortModal.classList.toggle('showingModal')
})

$showModalMobile.addEventListener('click', e => {
  e.preventDefault()
  $showModalMobile.classList.toggle('active')
  $sortModalMobile.classList.toggle('showModalMobile')
  modalTemplate()
})

$showFilterMobile.addEventListener('click', e => {
  e.preventDefault()

  $menFilterPopUpMobile.classList.toggle('showFilterPopUpMobile')

  filterMobilePopUpTemplate(filterColor, filterList)
})


$showClothesSize.addEventListener('click', e => {
  e.preventDefault()

  $clothesSizeСontainer.classList.toggle('active')
  $overley.classList.toggle('active')
})

$closeClothesSizeModal.addEventListener('click', e => {
  e.preventDefault()

  $overley.classList.remove('active')
  $clothesSizeСontainer.classList.remove('active')
})

$clotheSizesModalMobile.addEventListener('click', e => {
  $overley.classList.remove('active')
  $clothesSizeСontainer.classList.remove('active')
})
