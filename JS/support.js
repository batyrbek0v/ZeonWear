const $accardion = document.querySelectorAll('.support-accardion')
const $accardionn = document.querySelector('.support-accardion')
const $supportContainer = document.querySelector('.support-news-container')
const $supportGeneral = document.querySelector('.support-general-container')

$accardion.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active')
    $supportContainer.classList.toggle('active')
    $supportGeneral.classList.toggle('active')
  })

})
