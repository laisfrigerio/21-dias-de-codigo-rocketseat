const NUMBERS = '0123456789'
const CAPITAL_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const LOWER_LETTERS = 'abcdefghijklmnopqrstuvwxyz'
const SPECIAL_CHARACTERS = '!"@#$%&*()_+=-{}[]´^~/;.,<>?:'

function passwordHasNumbers(str) {
  return /[\d]/.test(str)
}

function passwordHasLowerLetters(str) {
  return /[a-z]/.test(str)
}

function passwordHasCapitalLetters(str) {
  return /[A-Z]/.test(str)
}

function passwordHasSpecialCharacters(str) {
  return /[!"@#$%&*\(\)_+=-{}\[\]´\^~\/;\.,<>?:]/.test(str)
}

function valid(props) {
  const { password, hasNumbers, hasCapitalLetters, hasSpecialCharacters } = props

  if (hasNumbers && !passwordHasNumbers(password)) {
    return false
  }

  if (!passwordHasLowerLetters(password)) {
    return false
  }

  if (hasCapitalLetters && !passwordHasCapitalLetters(password)) {
    return false
  }

  if (hasSpecialCharacters && !passwordHasSpecialCharacters(password)) {
    return false
  }

  return true
}

function generator(props) {
  const { hasNumbers, hasCapitalLetters, hasSpecialCharacters } = props

  let characters = LOWER_LETTERS
  let password = ''

  if (hasNumbers) {
    characters += NUMBERS
  }

  if (hasCapitalLetters) {
    characters += CAPITAL_LETTERS
  }

  if (hasSpecialCharacters) {
    characters += SPECIAL_CHARACTERS
  }

  if (characters.length === 0) {
    return ''
  }

  for (let i = 0; i < 16; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    password += characters[randomIndex]
  }

  if (valid({ ...props, password })) {
    return password
  }

  return generator(props)
}

if (typeof window === 'undefined') {
  module.exports = {
    generator,
    passwordHasNumbers,
    passwordHasCapitalLetters,
    passwordHasLowerLetters,
    passwordHasSpecialCharacters
  }
}