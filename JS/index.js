// DOM-ELEMENTS

const $categoryWrapper = document.querySelector('.main-category-block')
const $brandWrapper = document.querySelector('.main-brand-wrapper')


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

})


const categoryTemplate = title => `<button class="main-category-btn">${title}</button>`

const brandTemplate = url => `<div><img src="${url}" alt="brand"></div>`



// let swiper = new Swiper(".mySwiper", {
// 	effect: "cards",
// 	// slidesPerView: 1,
// 	// slidesPerView: 5,
// 	centeredSlides: true,
// 	loop: true,
// 	keyboard: {
// 		enabled: true,
// 	},
// 	pagination: {
// 		el: ".swiper-pagination",
// 		clickable: true,
// 		dynamicBullets: true,
// 	},
// 	navigation: {
// 		nextEl: ".swiper-button-next",
// 		prevEl: ".swiper-button-prev",
// 	},
// });

var swiper = new Swiper(".mySwiper", {
	effect: "cards",
	grabCursor: true,
});