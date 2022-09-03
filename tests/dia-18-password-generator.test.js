const {
  generator,
  passwordHasNumbers,
  passwordHasLowerLetters,
  passwordHasCapitalLetters,
  passwordHasSpecialCharacters
} = require('../dia-18/gen')

function passwordHasNumbersAndLowerLetters(str) {
  return passwordHasNumbers(str) && passwordHasLowerLetters(str)
}

function passwordHasNumbersAndCapitalLetters(str) {
  return passwordHasNumbers(str) && passwordHasCapitalLetters(str)
}

function passwordHasLowerLettersAndCapitalLetters(str) {
  return passwordHasLowerLetters(str) && passwordHasCapitalLetters(str)
}

test('empty array', () => {
  const password = generator()
  expect(passwordHasLowerLetters(password)).toBe(true)
})

test('Invalid array rules', () => {
  const password = generator(['', 'notExists'])
  expect(passwordHasLowerLetters(password)).toBe(true)
})

test('generate a password with numbers', () => {
  const password = generator(['hasNumbers'])
  expect(passwordHasNumbers(password)).toBe(true)
})

test('generate a password with lower letters', () => {
  const password = generator(['hasLowerLetters'])
  expect(passwordHasLowerLetters(password)).toBe(true)
})

test('generate a password with capital letters', () => {
  const password = generator(['hasCapitalLetters'])
  expect(passwordHasCapitalLetters(password)).toBe(true)
})

test('generate a password with numbers and lower letters', () => {
  const password = generator(['hasNumbers', 'hasLowerLetters'])
  expect(passwordHasNumbersAndLowerLetters(password)).toBe(true)
})

test('generate a password with numbers and lower letters', () => {
  const password = generator(['hasNumbers', 'hasCapitalLetters'])
  expect(passwordHasNumbersAndCapitalLetters(password)).toBe(true)
})

test('generate a password with lower letters and capital letters', () => {
  const password = generator(['hasLowerLetters', 'hasCapitalLetters'])
  expect(passwordHasLowerLettersAndCapitalLetters(password)).toBe(true)
})

test('generate a password without numbers', () => {
  const password = generator(['hasCapitalLetters'])
  expect(passwordHasNumbers(password)).toBe(false)
  expect(passwordHasCapitalLetters(password)).toBe(true)
})

test('generate a password with special characters', () => {
  const password = generator(['hasSpecialCharacters'])
  expect(passwordHasSpecialCharacters(password)).toBe(true)
})


test('generate a password with letters, capital letters, numbers and special characters', () => {
  const password = generator(['hasNumbers', 'hasLowerLetters', 'hasCapitalLetters', 'hasSpecialCharacters'])
  expect(passwordHasNumbers(password)).toBe(true)
  expect(passwordHasCapitalLetters(password)).toBe(true)
  expect(passwordHasLowerLetters(password)).toBe(true)
  expect(passwordHasSpecialCharacters(password)).toBe(true)
})