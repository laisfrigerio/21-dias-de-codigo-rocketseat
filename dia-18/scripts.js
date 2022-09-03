function handleClickGenerateBtn() {
  const switchNumbers = document.querySelector('#switch-numbers')
  const switchLetters = document.querySelector('#switch-letters')
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

window.onload = function () {
  initParticleJs()
  initTheme()
  includeHeader()
  includeFooter()
}