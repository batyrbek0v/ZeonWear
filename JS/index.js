// DOM-ELEMENTS

const $wrapper = document.querySelector('.main-category-block')


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

	$wrapper.innerHTML = template
})


const categoryTemplate = title => `<button class="main-category-btn">${title}</button>`



let swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	// spaceBetween: 24,
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
