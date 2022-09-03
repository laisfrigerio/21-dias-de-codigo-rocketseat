const toggleAlert = (alert) => alert.classList.toggle('show')

function handleClickGenerateBtn() {
  const switchNumbers = document.querySelector('#switch-numbers')
  const switchCapitals = document.querySelector('#switch-capitals')
  const switchSpecialCharacters = document.querySelector('#switch-special-characters')

  const checkedNumbers = switchNumbers.checked
  const checkedCapitals = switchCapitals.checked
  const checkedSpecialCharacters = switchSpecialCharacters.checked

  const rules = [
    ...[checkedNumbers && 'hasNumbers'],
    ...[checkedCapitals && 'hasCapitalLetters'],
    ...[checkedSpecialCharacters && 'hasSpecialCharacters']
  ]

  const password = generator(rules)
  document.querySelector('#input-password').value = password
}

function handleClickCopyBtn() {
  const password = document.querySelector('#input-password').value
  window.navigator.clipboard.writeText(password)

  const alert = document.querySelector('.alert')
  toggleAlert(alert)

  setTimeout(() => {
    toggleAlert(alert)
  }, 5000)
}

window.onload = function () {
  initParticleJs()
  initTheme()
  includeHeader()
  includeFooter()
}