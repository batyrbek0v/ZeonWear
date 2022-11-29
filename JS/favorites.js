// DOM-ELEMENTS
const $wrapper = document.querySelector('.favorites-wrapper')
// DOM-ELEMENTS



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
    heartIcon: '/assets/icons/heart-fill-red.svg'
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
    heartIcon: '/assets/icons/heart-fill-red.svg'
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
    heartIcon: '/assets/icons/heart-fill-red.svg'

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
    heartIcon: '/assets/icons/heart-fill-red.svg'
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
    heartIcon: '/assets/icons/heart-fill-red.svg'

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
    heartIcon: '/assets/icons/heart-fill-red.svg'

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
    heartIcon: '/assets/icons/heart-fill-red.svg'

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
    heartIcon: '/assets/icons/heart-fill-red.svg'

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
    heartIcon: '/assets/icons/heart-fill-red.svg'

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
    heartIcon: '/assets/icons/heart-fill-red.svg'

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
    heartIcon: '/assets/icons/heart-fill-red.svg'

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
    heartIcon: '/assets/icons/heart-fill-red.svg'

  },
]


window.addEventListener('load', () => {
  menClotheTemplate(clotheBase)
})


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

  $wrapper.innerHTML = template
}
