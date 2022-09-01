let allQuestions = []

function suffle(arr) {
  return arr.sort((a, b) => 0.5 - Math.random());
}

async function loadQuestios() {
  return await fetch('https://opentdb.com/api.php?amount=10&category=21&type=multiple')
    .then(response => response.json())
    .then(({ results }) => {
      allQuestions = results.map((item) => {
        return {
          ...item,
          "description": item.question,
          "options": suffle([...item.incorrect_answers, item.correct_answer]),
          "correctAnswer": item.correct_answer
        }
      })
      return allQuestions
    })
}