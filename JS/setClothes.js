
// DOM-ELEMENTS

$templateContainer = document.querySelector('.setClothes-template-container')

// DOM-ELEMENTS-END


const clotheBase = [
  {
    id: 1,
    title: 'Top Flex',
    description: 'Lorem ipsum dolar sit amet, consectetur',
    price: '12 980',
    delPrice: '11 033',
    isNew: true,
    image: '/assets/images/blackComplectClothes.png',
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
    image: '/assets/images/blackComplectClothes.png',
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
    image: '/assets/images/blackComplectClothes.png',
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
    image: '/assets/images/blackComplectClothes.png',
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
    image: '/assets/images/blackComplectClothes.png',
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
    image: '/assets/images/blackComplectClothes.png',
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
    image: '/assets/images/blackComplectClothes.png',
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
    image: '/assets/images/blackComplectClothes.png',
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
    image: '/assets/images/blackComplectClothes.png',
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
    image: '/assets/images/blackComplectClothes.png',
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
    image: '/assets/images/blackComplectClothes.png',
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
    image: '/assets/images/blackComplectClothes.png',
    lineIcon: '/assets/icons/men-clothe-price-line.svg',
    heartIcon: '/assets/icons/men-clothe-heart.svg'

  },
]

window.addEventListener('load', () => {
  menClotheTemplate(clotheBase)
})

// const wordCounter = (str) => {
//   const text = $textField.value.trim()

//   const words = text.split(' ')

//   $letter.innerText = words.length;
// }

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

