const SELECTED_OPTION = 'selected'
const CORRECT_OPTION = 'correct'
const INCORRECT_OPTION = 'incorrect'

const VERIFY_BUTTON = 'verify'
const NEXT_BUTTON = 'next'
const DISABLED_BUTTON = 'disabled'

const quizQuestion = document.querySelector('.quiz-question')
const quizAnswersContainer = document.querySelector('.quiz-answers')
const scoreContainer = document.querySelector('.score')

let currentQuestionIndex = 0
let currentQuestion = allQuestions[currentQuestionIndex]
let score = 0

function removeClass(quizAnswerOptions, className) {
  quizAnswerOptions.forEach((option, _) => {
    option.classList.remove(className)
  })
}

function handleClickAnswer() {
  const quizAnswerOptions = document.querySelectorAll('.quiz-answers li')

  quizAnswerOptions.forEach((option, _) => {
    option.addEventListener('click', () => {
      if (option.classList.contains(SELECTED_OPTION)) {
        option.classList.remove(SELECTED_OPTION)
        enableButton(true)
        return
      }

      removeClass(quizAnswerOptions, SELECTED_OPTION)
      option.classList.add(SELECTED_OPTION)
      enableButton(false)
    })
  })
}

function handleClickVerifyButton() {
  const button = document.querySelector('button')
  button.addEventListener('click', () => {

    if (button.classList.contains(VERIFY_BUTTON)) {
      verify()
      return
    }

    next()
  })
}

function showAnsers(options, correctAnswer) {
  quizAnswersContainer.innerHTML = ''
  options.forEach((option, _) => {
    const liHTML = document.createElement('li')
    liHTML.innerText = option

    if (option === correctAnswer) {
      liHTML.setAttribute('data-correct', true)
    }

    quizAnswersContainer.appendChild(liHTML)
  })

  handleClickAnswer()
}

function showQuestion() {
  const { correctAnswer, description, options } = currentQuestion
  quizQuestion.innerText = `${currentQuestionIndex + 1}) ${description}`
  showAnsers(options, correctAnswer)
  showVerifyQuestionButton()
  enableButton(true)
}

function showButton(label, removeClass, addClass) {
  const button = document.querySelector('button')
  button.innerText = label
  button.classList.remove(removeClass)
  button.classList.add(addClass)
}

function showNextQuestionButton() {
  showButton('PRÓXIMO', VERIFY_BUTTON, NEXT_BUTTON)
}

function showVerifyQuestionButton() {
  showButton('VERIFICAR', NEXT_BUTTON, VERIFY_BUTTON)
}

function sumScore() {
  scoreContainer.innerText = ++score
}

function verify() {
  const { correctAnswer } = currentQuestion
  const selectedOption = document.querySelector(`.quiz-answers li.${SELECTED_OPTION}`)

  if (correctAnswer === selectedOption.innerText) {
    selectedOption.classList.remove(SELECTED_OPTION)
    selectedOption.classList.add(CORRECT_OPTION)
    showNextQuestionButton()
    sumScore()
    return
  }

  const correctOption = document.querySelector('li[data-correct="true"]')
  selectedOption.classList.remove(SELECTED_OPTION)
  selectedOption.classList.add(INCORRECT_OPTION)
  correctOption.classList.add(CORRECT_OPTION)
  showNextQuestionButton()
}

function next() {
  currentQuestionIndex++

  if (currentQuestionIndex === allQuestions.length) {
    end()
    return
  }

  currentQuestion = allQuestions[currentQuestionIndex]
  showQuestion()
}

function end() {
  document.querySelector('form').remove()
  document.querySelector('.footer').remove()
  document.querySelector('.quiz-end').classList.add('show')
  includeFile('../assets/html/quiz-end.html', '.quiz-end')
}

function enableButton(enable) {
  const button = document.querySelector('button')

  if (enable) {
    button.setAttribute(DISABLED_BUTTON, enable)
    return
  }

  button.removeAttribute(DISABLED_BUTTON)
}

function initQuiz() {
  initTheme()
  initParticleJs()
  includeHeader()
  showQuestion()
  handleClickVerifyButton()
  enableButton(true)
}