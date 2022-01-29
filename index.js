const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
let shuffledQuestions, currentQuestionIndex
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let images = ['Fumos/1 (1).jpg', 'Fumos/1 (2).jpg', 'Fumos/1 (3).jpg',]
let index = 0

function buildImage() {
  let img = document.createElement('img')
  img.src = images[index]
  document.getElementById('question-container').appendChild(img)
}

function changeImage() {
  let img = document.getElementById('question-container').getElementsByTagName('img')[0]
  index++
  index = index % images.length
  img.src = images[index]
}



startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  changeImage()
  setNextQuestion()
}) 






function startGame() {
console.log('Started')
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}


function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
} else {
  startButton.innerText = 'Restart'
  startButton.classList.remove('hide')
}
  } 

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}




const questions = [
  {
    image: 'Fumos/1 (1).jpg',
    answers: [
      { text: '4', correct: true   },
      { text: '5000', correct: false },
      { text: '44', correct: false },
      { text: '69', correct: false }
    ]
  },
{
  question: 'What is 2 + 2',
  answers: [
    { text: '4', correct: true   },
    { text: '22', correct: false },
    { text: '44', correct: false },
    { text: '69', correct: false }
  ]
},
{
  question: 'What is 2 + 2',
  answers: [
    { text: '4', correct: true   },
    { text: '22', correct: false },
    { text: '44', correct: false },
    { text: '69', correct: false }
  ]
}
]

