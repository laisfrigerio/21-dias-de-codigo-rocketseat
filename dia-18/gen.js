const IterateArray = (limit) => Array.from(Array(limit))

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

const rulesConfiguration = {
  'hasNumbers': {
    'characters': '0123456789',
    'fn': passwordHasNumbers
  },
  'hasLowerLetters': {
    'characters': 'abcdefghijklmnopqrstuvwxyz',
    'fn': passwordHasLowerLetters
  },
  'hasCapitalLetters': {
    'characters': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    'fn': passwordHasCapitalLetters
  },
  'hasSpecialCharacters': {
    'characters': '!"@#$%&*()_+=-{}[]´^~/;.,<>?:',
    'fn': passwordHasSpecialCharacters
  }
}

function buildAvailableRules(rules) {
  const build = rules || []
  return [...build, 'hasLowerLetters']
}

function buildAvailableChars(rules) {
  let characters = LOWER_LETTERS

  if (!Array.isArray(rules)) {
    return characters
  }

  return rules.reduce((accumulator, currentRule) => {
    const currentValue = rulesConfiguration[currentRule]
    return currentValue ? accumulator + currentValue.characters : accumulator
  }, characters)
}

function valid(rules, password) {
  return rules.every((currentValue) => {
    return rulesConfiguration[currentValue].fn(password)
  })
}

function generator(rules) {
  const availableRules = buildAvailableRules(rules)
  const characters = buildAvailableChars(availableRules)

  const password = IterateArray(16).reduce((accumulator, _) => {
    const randomIndex = Math.floor(Math.random() * characters.length)
    return accumulator + characters[randomIndex]
  }, '')

  return valid(availableRules, password)
    ? password
    : generator(rules)
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