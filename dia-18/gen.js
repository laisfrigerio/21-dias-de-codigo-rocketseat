const NUMBERS = '0123456789'
const CAPITAL_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const LOWER_LETTERS = 'abcdefghijklmnopqrstuvwxyz'
const SPECIAL_CHARACTERS = '!"@#$%&*()_+=-{}[]´^~/;.,<>?:'

const passwordHasNumbers = (str) => /[\d]/.test(str)

const passwordHasLowerLetters = (str) => /[a-z]/.test(str)

const passwordHasCapitalLetters = (str) => /[A-Z]/.test(str)

const passwordHasSpecialCharacters = (str) => /[!"@#$%&*\(\)_+=-{}\[\]´\^~\/;\.,<>?:]/.test(str)

const rulesConfiguration = {
  'hasNumbers': [NUMBERS, passwordHasNumbers],
  'hasLowerLetters': [LOWER_LETTERS, passwordHasLowerLetters],
  'hasCapitalLetters': [CAPITAL_LETTERS, passwordHasCapitalLetters],
  'hasSpecialCharacters': [SPECIAL_CHARACTERS, passwordHasSpecialCharacters]
}

const IterateArray = (limit) => Array.from(Array(limit))
const GetRuleConfiguration = (index) => rulesConfiguration[index] || []

const RulesConfigurationKeys = Object.keys(rulesConfiguration)
const RemoveInvalidRules = (rules) => rules.filter((rule) => RulesConfigurationKeys.includes(rule))

function buildAvailableRules(rules) {
  const build = rules || []
  return RemoveInvalidRules([...build, 'hasLowerLetters'])
}

function buildAvailableChars(rules) {
  let characters = LOWER_LETTERS

  if (!Array.isArray(rules)) {
    return characters
  }

  return rules.reduce((accumulator, currentRule) => {
    const [currentCharacters] = GetRuleConfiguration(currentRule)
    return currentCharacters ? accumulator + currentCharacters : accumulator
  }, characters)
}

function valid(rules, password) {
  return rules.every((currentRule) => {
    const [_, fn] = GetRuleConfiguration(currentRule)
    return fn(password)
  })
}

function generatePassword(availableRules, characters) {
  const password = IterateArray(16).reduce((accumulator, _) => {
    const randomIndex = Math.floor(Math.random() * characters.length)
    return accumulator + characters[randomIndex]
  }, '')

  return valid(availableRules, password)
    ? password
    : generatePassword(availableRules, characters)
}

function generator(rules) {
  const availableRules = buildAvailableRules(rules)
  const characters = buildAvailableChars(availableRules)
  return generatePassword(availableRules, characters)
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