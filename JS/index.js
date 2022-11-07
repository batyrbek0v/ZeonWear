// let swiper = new Swiper(".mySwiper", {
//     grabCursor: true,
//     slidesPerView: 5,
//     spaceBetween: 24,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
// });

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerView: 5,
    loop: true,
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// var swiper = new Swiper(".mySwiper", {
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: 5,
//     spaceBetween: 24,
//     slidesPerView: "auto",
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
// });