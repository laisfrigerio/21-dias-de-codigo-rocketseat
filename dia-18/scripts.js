function handleClickGenerateBtn() {
  const switchNumbers = document.querySelector('#switch-numbers')
  const switchCapitals = document.querySelector('#switch-capitals')
  const switchSpecialCharacters = document.querySelector('#switch-special-characters')

  const checkedNumbers = switchNumbers.checked
  const checkedCapitals = switchCapitals.checked
  const checkedSpecialCharacters = switchSpecialCharacters.checked

  const password = generator({
    hasNumbers: checkedNumbers,
    hasCapitalLetters: checkedCapitals,
    hasSpecialCharacters: checkedSpecialCharacters
  })

  document.querySelector('#input-password').value = password
}

function handleClickCopyBtn() {
  const alert = document.querySelector('.alert')
  const password = document.querySelector('#input-password').value
  window.navigator.clipboard.writeText(password)
  alert.classList.toggle('show')

  setTimeout(() => {
    alert.classList.toggle('show')
  }, 5000)
}

window.onload = function () {
  initParticleJs()
  initTheme()
  includeHeader()
  includeFooter()
}