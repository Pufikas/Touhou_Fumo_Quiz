const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
let shuffledQuestions, currentQuestionIndex
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let images = ['Fumos/1 (1).jpg', 'Fumos/1 (2).jpg', 'Fumos/1 (3).jpg','Fumos/1 (4).jpg','Fumos/1 (5).jpg','Fumos/1 (6).jpg','Fumos/1 (7).jpg','Fumos/1 (8).jpg','Fumos/1 (9).jpg','Fumos/1 (10).jpg','Fumos/1 (11).jpg','Fumos/1 (12).jpg','Fumos/1 (13).jpg','Fumos/1 (14).jpg','Fumos/1 (15).jpg','Fumos/1 (16).jpg','Fumos/1 (18).jpg','Fumos/1 (19).jpg','Fumos/1 (20).jpg','Fumos/1 (21).jpg','Fumos/1 (22).jpg','Fumos/1 (23).jpg','Fumos/1 (24).jpg','Fumos/1 (25).jpg','Fumos/1 (26).jpg','Fumos/1 (27).jpg','Fumos/1 (28).jpg','Fumos/1 (29).jpg','Fumos/1 (30).jpg','Fumos/1 (31).jpg','Fumos/1 (32).jpg','Fumos/1 (33).jpg','Fumos/1 (34).jpg',]
let index = 0

function buildImage() {
  let img = document.createElement('img')
  img.src = images[index]
  document.getElementById('question-container').appendChild(img)
}

function changeImage() {
  let img = document.getElementById('question-container').getElementsByTagName('img')[0]
  index++
  Imageindex = index % images.length
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
shuffledQuestions = questions.sort(() => +1 )
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}

window.onkeydown = function(event){
  if(event.keyCode === 32) {
      event.preventDefault();
      document.querySelector('button').setNextQuestion(); //This will trigger a click on the first <a> element.
  }
};



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
  if (currentQuestionIndex + 1) {
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
    question: '1',
    answers: [
      { text: 'Izayoi Sakuya', correct: true   },
      { text: 'Cirno', correct: false },
      { text: 'Fujiwara no Mokou', correct: false },
      { text: 'Moriya Suwako', correct: false }
    ]
  },
{
  question: '2',
  answers: [
    { text: 'Yorigami Shion', correct: false   },
    { text: 'Hakurei Reimu', correct: false },
    { text: 'Remilia Scarlet', correct: true },
    { text: 'Flandre Scarlet', correct: false }
  ]
},
{
  question: '3',
  answers: [
    { text: 'Eirin Yagokoro', correct: false   },
    { text: 'Yorigami Shion', correct: false },
    { text: 'Kawashiro Nitori', correct: false },
    { text: 'Patchouli Knowledge', correct: true }
  ]
},
{
  question: '4',
  answers: [
    { text: 'Hata no Kokoro', correct: false   },
    { text: 'Alice Margatroid', correct: true },
    { text: 'Houraisan Kaguya', correct: false },
    { text: 'Kawashiro Nitori', correct: false }
  ]
},
{
question: '5',
answers: [
  { text: 'Flandre Scarlet', correct: true   },
  { text: '22', correct: false },
  { text: '44', correct: false },
  { text: '69', correct: false }
]
},
{
question: '6',
answers: [
  { text: '4', correct: true   },
  { text: '22', correct: false },
  { text: '44', correct: false },
  { text: '69', correct: false }
]
},
{
  question: '7',
  answers: [
    { text: 'Sakuya', correct: true   },
    { text: '5000', correct: false },
    { text: '44', correct: false },
    { text: '69', correct: false }
  ]
},
{
question: '8',
answers: [
  { text: 'Joe Biden', correct: true   },
  { text: '22', correct: false },
  { text: '44', correct: false },
  { text: '69', correct: false }
]
},
{
question: '9',
answers: [
  { text: '4', correct: true   },
  { text: '22', correct: false },
  { text: '44', correct: false },
  { text: '69', correct: false }
]
},
{
  question: '10',
  answers: [
    { text: 'Sakuya', correct: true   },
    { text: '5000', correct: false },
    { text: '44', correct: false },
    { text: '69', correct: false }
  ]
},
{
question: '11',
answers: [
  { text: 'Joe Biden', correct: true   },
  { text: '22', correct: false },
  { text: '44', correct: false },
  { text: '69', correct: false }
]
},
{
question: '12',
answers: [
  { text: '4', correct: true   },
  { text: '22', correct: false },
  { text: '44', correct: false },
  { text: '69', correct: false }
]
},
{
  question: '13',
answers: [
  { text: 'Sakuya', correct: true   },
  { text: '5000', correct: false },
  { text: '44', correct: false },
  { text: '69', correct: false }
]
},
{
question: '14',
answers: [
{ text: 'Joe Biden', correct: true   },
{ text: '22', correct: false },
{ text: '44', correct: false },
{ text: '69', correct: false }
]
},
{
question: '15',
answers: [
{ text: '4', correct: true   },
{ text: '22', correct: false },
{ text: '44', correct: false },
{ text: '69', correct: false }
]
},
{
  question: '16',
answers: [
  { text: 'Sakuya', correct: true   },
  { text: '5000', correct: false },
  { text: '44', correct: false },
  { text: '69', correct: false }
]
},
{
question: '17',
answers: [
{ text: 'Joe Biden', correct: true   },
{ text: '22', correct: false },
{ text: '44', correct: false },
{ text: '69', correct: false }
]
},
{
question: '18',
answers: [
{ text: '4', correct: true   },
{ text: '22', correct: false },
{ text: '44', correct: false },
{ text: '69', correct: false }
]
},
{
  question: '19',
  answers: [
    { text: 'Sakuya', correct: true   },
    { text: '5000', correct: false },
    { text: '44', correct: false },
    { text: '69', correct: false }
  ]
},
{
question: '20',
answers: [
  { text: 'Joe Biden', correct: true   },
  { text: '22', correct: false },
  { text: '44', correct: false },
  { text: '69', correct: false }
]
},
{
question: '21',
answers: [
  { text: '4', correct: true   },
  { text: '22', correct: false },
  { text: '44', correct: false },
  { text: '69', correct: false }
]
},
{
  question: '22',
answers: [
  { text: 'Sakuya', correct: true   },
  { text: '5000', correct: false },
  { text: '44', correct: false },
  { text: '69', correct: false }
]
},
{
question: '23',
answers: [
{ text: 'Joe Biden', correct: true   },
{ text: '22', correct: false },
{ text: '44', correct: false },
{ text: '69', correct: false }
]
},
{
question: '24',
answers: [
{ text: '4', correct: true   },
{ text: '22', correct: false },
{ text: '44', correct: false },
{ text: '69', correct: false }
]
},
{
  question: '25',
answers: [
  { text: 'Sakuya', correct: true   },
  { text: '5000', correct: false },
  { text: '44', correct: false },
  { text: '69', correct: false }
]
},
{
question: '26',
answers: [
{ text: 'Joe Biden', correct: true   },
{ text: '22', correct: false },
{ text: '44', correct: false },
{ text: '69', correct: false }
]
},
{
question: '27',
answers: [
{ text: '4', correct: true   },
{ text: '22', correct: false },
{ text: '44', correct: false },
{ text: '69', correct: false }
]
},
{
  question: '28',
  answers: [
    { text: 'Sakuya', correct: true   },
    { text: '5000', correct: false },
    { text: '44', correct: false },
    { text: '69', correct: false }
  ]
},
{
question: '29',
answers: [
  { text: 'Joe Biden', correct: true   },
  { text: '22', correct: false },
  { text: '44', correct: false },
  { text: '69', correct: false }
]
},
{
question: '30',
answers: [
  { text: '4', correct: true   },
  { text: '22', correct: false },
  { text: '44', correct: false },
  { text: '69', correct: false }
]
},
{
  question: '31',
answers: [
  { text: 'Sakuya', correct: true   },
  { text: '5000', correct: false },
  { text: '44', correct: false },
  { text: '69', correct: false }
]
},
{
question: '32',
answers: [
{ text: 'Joe Biden', correct: true   },
{ text: '22', correct: false },
{ text: '44', correct: false },
{ text: '69', correct: false }
]
},
{
question: '33',
answers: [
{ text: '4', correct: true   },
{ text: '22', correct: false },
{ text: '44', correct: false },
{ text: '69', correct: false }
]
}]