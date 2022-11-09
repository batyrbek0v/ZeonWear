// DOM-ELEMENTS
const $navList = document.querySelector('.nav-bottom-list')
const $navList2 = document.querySelector('.nav-bottom-list2')
const $categoryWrapper = document.querySelector('.main-category-block')
const $brandWrapper = document.querySelector('.main-brand-wrapper')


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
		route: '/men'
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

const brand = [
	{
		url: '/assets/images/joma.png'
	},
	{
		url: '/assets/images/puma.png'
	},
	{
		url: '/assets/images/adidas.png'
	},
	{
		url: '/assets/images/asics.png'
	},
	{
		url: '/assets/images/reebok.png'
	},
	{
		url: '/assets/images/nike.png'
	},
]

window.addEventListener('load', () => {

	// CATEGORY TEMPLATE (ОБУВЬ ,МЯЧИ, БУТСЫ...)
	const template = category.map(({ title }) => categoryTemplate(title)).join('')
	$categoryWrapper.innerHTML = template

	// BRAND TEMPLATE (JOMA,PUMA,NIKE...)
	const brandTemplatte = brand.map(item => brandTemplate(item.url)).join('')
	$brandWrapper.innerHTML = brandTemplatte

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


})


const categoryTemplate = title => `<button class="main-category-btn">${title}</button>`

const brandTemplate = url => `<div><img src="${url}" alt="brand"></div>`
const routeTemplate = (title, route) => `<li><a href="${route}">${title}</a></li>`



let swiper = new Swiper(".mySwiper", {
	// slidesPerView: 1,
	slidesPerView: 5,
	centeredSlides: true,
	loop: true,
	keyboard: {
		enabled: true,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

let swiperr = new Swiper(".mySwiperr", {
	effect: "cards",
	grabCursor: true,
});