const {
  generator,
  passwordHasNumbers,
  passwordHasLowerLetters,
  passwordHasCapitalLetters,
  passwordHasSpecialCharacters
} = require('../dia-18/password-generator')

function passwordHasNumbersAndLowerLetters(str) {
  return passwordHasNumbers(str) && passwordHasLowerLetters(str)
}

function passwordHasNumbersAndCapitalLetters(str) {
  return passwordHasNumbers(str) && passwordHasCapitalLetters(str)
}

function passwordHasLowerLettersAndCapitalLetters(str) {
  return passwordHasLowerLetters(str) && passwordHasCapitalLetters(str)
}

test('generate a password with numbers', () => {
  const password = generator({ hasNumbers: true })
  expect(passwordHasNumbers(password)).toBe(true)
})

test('generate a password with lower letters', () => {
  const password = generator({ hasLowerLetters: true })
  expect(passwordHasLowerLetters(password)).toBe(true)
})

test('generate a password with capital letters', () => {
  const password = generator({ hasCapitalLetters: true })
  expect(passwordHasCapitalLetters(password)).toBe(true)
})

test('generate a password with numbers and lower letters', () => {
  const password = generator({ hasNumbers: true, hasLowerLetters: true })
  expect(passwordHasNumbersAndLowerLetters(password)).toBe(true)
})

test('generate a password with numbers and lower letters', () => {
  const password = generator({ hasNumbers: true, hasCapitalLetters: true })
  expect(passwordHasNumbersAndCapitalLetters(password)).toBe(true)
})

test('generate a password with lower letters and capital letters', () => {
  const password = generator({ hasLowerLetters: true, hasCapitalLetters: true })
  expect(passwordHasLowerLettersAndCapitalLetters(password)).toBe(true)
})

test('generate a password without numbers', () => {
  const password = generator({ hasNumbers: false, hasCapitalLetters: true })
  expect(passwordHasNumbers(password)).toBe(false)
  expect(passwordHasCapitalLetters(password)).toBe(true)
})

test('generate a password with special characters', () => {
  const password = generator({ hasSpecialCharacters: true })
  expect(passwordHasSpecialCharacters(password)).toBe(true)
})


test('generate a password with letters, capital letters, numbers and special characters', () => {
  const password = generator({ hasNumbers: true, hasCapitalLetters: true, hasLowerLetters: true, hasSpecialCharacters: true })
  expect(passwordHasNumbers(password)).toBe(true)
  expect(passwordHasCapitalLetters(password)).toBe(true)
  expect(passwordHasLowerLetters(password)).toBe(true)
  expect(passwordHasSpecialCharacters(password)).toBe(true)
})