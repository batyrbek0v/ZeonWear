// DOM-ELEMENTS
const $acceptedWrapper = document.querySelector('.accepted-wrapper')
const $deliveredWrapper = document.querySelector('.delivered-wrapper')
const $processingWrapper = document.querySelector('.processing-wrapper')
const $returnWrapper = document.querySelector('.return-wrapper')
// DOM-ELEMENTS



const acceptedOrders = [
  {
    title: 'Top Flex',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur',
    color: 'Желтый',
    size: 'XL',
    count: '1',
    url: '/assets/images/men-white-sneakers.png',
    price: '12 980 ₽',
  },
  {
    title: 'Top Flex',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur',
    color: 'Желтый',
    size: 'XL',
    count: '1',
    url: '/assets/images/men-green-sneakers.png',
    price: '12 980 ₽',
  },
  {
    title: 'Top Flex',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur',
    color: 'Желтый',
    size: 'XL',
    count: '1',
    url: '/assets/images/men-green-t-shirt.png',
    price: '12 980 ₽',
  },
  {
    title: 'Top Flex',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur',
    color: 'Желтый',
    size: 'XL',
    count: '1',
    url: '/assets/images/men-blue-t-shirt.png',
    price: '12 980 ₽',
  },
]
const deliveredOrders = [
  {
    title: 'Top Flex',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur',
    color: 'Желтый',
    size: 'XL',
    count: '1',
    url: '/assets/images/men-white-sneakers.png',
    price: '12 980 ₽',
  },
  {
    title: 'Top Flex',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur',
    color: 'Желтый',
    size: 'XL',
    count: '1',
    url: '/assets/images/men-white-sneakers.png',
    price: '12 980 ₽',
  },
  {
    title: 'Top Flex',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur',
    color: 'Желтый',
    size: 'XL',
    count: '1',
    url: '/assets/images/men-white-sneakers.png',
    price: '12 980 ₽',
  },
  {
    title: 'Top Flex',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur',
    color: 'Желтый',
    size: 'XL',
    count: '1',
    url: '/assets/images/men-white-sneakers.png',
    price: '12 980 ₽',
  },

]


window.addEventListener('load', () => {
  orderTemplate(acceptedOrders)
  orderTemplate2(deliveredOrders)
  orderTemplate3(deliveredOrders)
  orderTemplate4(deliveredOrders)
})

const orderTemplate = (clothes) => {
  const template = clothes.map(({
    title,
    subTitle,
    color,
    count,
    size,
    url,
    price
  }) => {
    return `
        <div class="order-block">
          <div class="order-block-desc-wrapper">
            <div class="order-img">
              <div class="order-img-top">
                <div class="new-order-block">
                  <p>new</p>
                </div>
                <img src="/assets/icons/men-clothe-heart.svg" alt="">
              </div>
              <img src="${url}" alt="${title}">
            </div>
            <div class="order-description">
              <div class="order-description-content">
                <h1 class="order-description-mobile">Top Flex</h1>
                <div class="order-description-flex">
                  <h1>${title}</h1>
                  <p>
                    Количество:
                    <span>${count}</span>
                  </p>
                  <h1>${price}</h1>
                </div>
                <p>${subTitle}</p>
              </div>
              <div class="order-size-color">
                <p>
                  Цвет:
                  <span>${color}</span>
                </p>
                <p>
                  Размер:
                  <span>${size}</span>
                </p>
              </div>
            </div>
          </div>
          <div class="order-description-flex-mobile">
            <p>
              Количество:
              <span>${count}</span>
            </p>
            <h1>${price}</h1>
          </div>
      </div>
    `}).join('')
  $acceptedWrapper.innerHTML = template
}
const orderTemplate2 = (clothes) => {
  const template = clothes.map(({
    title,
    subTitle,
    color,
    count,
    size,
    url,
    price
  }) => {
    return `
        <div class="order-block">
          <div class="order-block-desc-wrapper">
            <div class="order-img">
              <div class="order-img-top">
                <div class="new-order-block">
                  <p>new</p>
                </div>
                <img src="/assets/icons/men-clothe-heart.svg" alt="">
              </div>
              <img src="${url}" alt="${title}">
            </div>
            <div class="order-description">
              <div class="order-description-content">
                <h1 class="order-description-mobile">Top Flex</h1>
                <div class="order-description-flex">
                  <h1>${title}</h1>
                  <p>
                    Количество:
                    <span>${count}</span>
                  </p>
                  <h1>${price}</h1>
                </div>
                <p>${subTitle}</p>
              </div>
              <div class="order-size-color">
                <p>
                  Цвет:
                  <span>${color}</span>
                </p>
                <p>
                  Размер:
                  <span>${size}</span>
                </p>
              </div>
            </div>
          </div>
          <div class="order-description-flex-mobile">
            <p>
              Количество:
              <span>${count}</span>
            </p>
            <h1>${price}</h1>
          </div>
      </div>
    `}).join('')
  $deliveredWrapper.innerHTML = template
}
const orderTemplate3 = (clothes) => {
  const template = clothes
    .slice(0, 2)
    .map(({
      title,
      subTitle,
      color,
      count,
      size,
      url,
      price
    }) => {
      return `
        <div class="order-block">
          <div class="order-block-desc-wrapper">
            <div class="order-img">
              <div class="order-img-top">
                <div class="new-order-block">
                  <p>new</p>
                </div>
                <img src="/assets/icons/men-clothe-heart.svg" alt="">
              </div>
              <img src="${url}" alt="${title}">
            </div>
            <div class="order-description">
              <div class="order-description-content">
                <h1 class="order-description-mobile">Top Flex</h1>
                <div class="order-description-flex">
                  <h1>${title}</h1>
                  <p>
                    Количество:
                    <span>${count}</span>
                  </p>
                  <h1>${price}</h1>
                </div>
                <p>${subTitle}</p>
              </div>
              <div class="order-size-color">
                <p>
                  Цвет:
                  <span>${color}</span>
                </p>
                <p>
                  Размер:
                  <span>${size}</span>
                </p>
              </div>
            </div>
          </div>
          <div class="order-description-flex-mobile">
            <p>
              Количество:
              <span>${count}</span>
            </p>
            <h1>${price}</h1>
          </div>
      </div>
    `})
    .join('')
  $processingWrapper.innerHTML = template
}
const orderTemplate4 = (clothes) => {
  const template = clothes
    .slice(0, 2)
    .map(({
      title,
      subTitle,
      color,
      count,
      size,
      url,
      price
    }) => {
      return `
        <div class="order-block">
          <div class="order-block-desc-wrapper">
            <div class="order-img">
              <div class="order-img-top">
                <div class="new-order-block">
                  <p>new</p>
                </div>
                <img src="/assets/icons/men-clothe-heart.svg" alt="">
              </div>
              <img src="${url}" alt="${title}">
            </div>
            <div class="order-description">
              <div class="order-description-content">
                <h1 class="order-description-mobile">Top Flex</h1>
                <div class="order-description-flex">
                  <h1>${title}</h1>
                  <p>
                    Количество:
                    <span>${count}</span>
                  </p>
                  <h1>${price}</h1>
                </div>
                <p>${subTitle}</p>
              </div>
              <div class="order-size-color">
                <p>
                  Цвет:
                  <span>${color}</span>
                </p>
                <p>
                  Размер:
                  <span>${size}</span>
                </p>
              </div>
            </div>
          </div>
          <div class="order-description-flex-mobile">
            <p>
              Количество:
              <span>${count}</span>
            </p>
            <h1>${price}</h1>
          </div>
      </div>
    `})
    .join('')
  $returnWrapper.innerHTML = template
}