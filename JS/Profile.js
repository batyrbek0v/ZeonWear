const $goToChangePassword = document.querySelector('.go-to-change-password')
const $uploadPhoto = document.querySelector('.upload-photo-btn')
const $avatar = document.querySelector('.profile-avatar')


$goToChangePassword.addEventListener('click', e => {
  e.preventDefault()
  window.open('./changePassword.html', '_self')
})
$uploadPhoto.addEventListener('click', e => {
  e.preventDefault()

  $avatar.setAttribute('src', '/assets/images/profile-avatar.png')
  $avatar.classList.add('added-avatar')
})