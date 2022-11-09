// DOM-ELEMENTS

const $navList = document.querySelector('.nav-bottom-list')
const $navList2 = document.querySelector('.nav-bottom-list2')
const $passwordIcon = document.querySelector('.password-icon')
const $hidePassword = document.querySelector('.hide')
const $password = document.querySelector('.password-input')
const $registCheckbox = document.querySelector('.regist-chekbox')
// DOM-ELEMENTS



const navRoutes = [
  {
    id: 1,
    title: 'Новинки',
    route: '/new'
  },
  {
    id: 2,
    title: 'Команды',
    route: '/team'
  },
  {
    id: 3,
    title: 'Мужчинам',
    route: '/pages/men'
  },
  {
    id: 4,
    title: 'Женщинам',
    route: '/women'
  },
  {
    id: 5,
    title: 'Дети',
    route: '/kids'
  },
  {
    id: 6,
    title: 'Распродажа',
    route: '/sales'
  },
]

window.addEventListener('load', () => {

  const links = navRoutes.slice(0, 3)
    .map(({ id, title, route }) => {
      return routeTemplate(title, route)
    }).join('')

  $navList.innerHTML = links

  const links2 = navRoutes.slice(3)
    .map(({ title, route }) => {
      return routeTemplate(title, route)
    }).join('')

  $navList2.innerHTML = links2
  // .ariaChecked = 'checked'
  console.log($registCheckbox);
})


const routeTemplate = (title, route) => `<li><a href="${route}">${title}</a></li>`



$passwordIcon.addEventListener('click', e => {
  e.preventDefault()

  $passwordIcon.style.display = 'none'
  $hidePassword.classList.toggle('show')
  $password.setAttribute('type', 'text')

})

$hidePassword.addEventListener('click', e => {
  e.preventDefault()

  $passwordIcon.style.display = 'block'
  $hidePassword.classList.toggle('show')
  $password.setAttribute('type', 'password')
})
