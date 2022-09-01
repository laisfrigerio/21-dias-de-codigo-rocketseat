const buttonQuiz = document.querySelector('.footer button')

function hideSpinner() {
  if (allQuestions.length > 0) {
    document.querySelector('.spinner').remove()
    buttonQuiz.style.display = 'block'
  }
}

window.onload = async function () {
  includeSpinner()
  await loadQuestios()
  hideSpinner()
  initQuiz()
}