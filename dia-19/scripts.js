function loadImages() {
  console.log('loadImages')
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then(({ message, status }) => {
      if (status === 'success') {
        document.querySelector('.avatar')
          .setAttribute('src', message)
      }
    })
}

window.onload = function () {
  initParticleJs()
  initTheme()
  includeHeader()
  includeFooter()
  loadImages()
}