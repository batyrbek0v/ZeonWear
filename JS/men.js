// DOM-ELEMENTS
const $categoryWrapper = document.querySelector('.main-category-block')
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

window.addEventListener('load', () => {
  const template = category.map(({ title }) => categoryTemplate(title)).join('')
  $categoryWrapper.innerHTML = template
})


const categoryTemplate = title => `<button class="main-category-btn">${title}</button>`
