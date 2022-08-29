const body = document.body
const modal = document.querySelector('.modal')
const modalImg = modal.querySelector('img')
const cardImg = document.querySelectorAll('.card-img')
const closeModal = modal.querySelector('.close-btn')

cardImg.forEach((item, _) => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img')
    const imgSrc = img.getAttribute('src')
    modalImg.setAttribute('src', imgSrc)
    body.classList.add('modal-open')
    console.log('clicked')
  })
})

closeModal.addEventListener('click', () => {
  body.classList.remove('modal-open')
})

window.onload = function () {
  initParticleJs()
  includeFile()
}
