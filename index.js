const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
let shuffledQuestions, currentQuestionIndex, currentImageIndex
const questionElement = document.getElementById('question')
let pointsElement = document.getElementById('pointCounter')
const answerButtonsElement = document.getElementById('answer-buttons')
let scoreCounter = document.getElementById('score')
let images = ['Fumos/1 (1).jpg', 'Fumos/1 (2).jpg', 'Fumos/1 (3).jpg','Fumos/1 (4).jpg','Fumos/1 (5).jpg','Fumos/1 (6).jpg','Fumos/1 (7).jpg','Fumos/1 (8).jpg','Fumos/1 (9).jpg','Fumos/1 (10).jpg','Fumos/1 (11).jpg','Fumos/1 (12).jpg','Fumos/1 (13).jpg','Fumos/1 (14).jpg','Fumos/1 (15).jpg','Fumos/1 (16).jpg','Fumos/1 (18).jpg','Fumos/1 (19).jpg','Fumos/1 (20).jpg','Fumos/1 (21).jpg','Fumos/1 (22).jpg','Fumos/1 (23).jpg','Fumos/1 (24).jpg','Fumos/1 (25).jpg','Fumos/1 (26).jpg','Fumos/1 (27).jpg','Fumos/1 (28).jpg','Fumos/1 (29).jpg','Fumos/1 (30).jpg','Fumos/1 (31).jpg','Fumos/1 (32).jpg','Fumos/1 (33).jpg','Fumos/1 (34).jpg',]
let index = 0




function startGame() {
  console.log('Started')
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => +1 )
  currentQuestionIndex = 0
  currentImageIndex = 0
  score = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
  }

  function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
  } if (currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
  nextButton.innerText = 'Next'
  startButton.classList.remove('hide')
  }


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
  currentImageIndex++
  changeImage()
  setNextQuestion()
})

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
  let correct = selectedButton.dataset.correct
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

function scorePlus() {
      score++
      scoreCounter.innerText = 'Score ' + score
      console.log(score)
  } 



function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}



const questions = [
  {
    question: '1',
    answers: [
      { text: 'Izayoi Sakuya', correct: true, scorePlus(){} },
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
    { text: 'Saigyouji Yuyuko', correct: false   },
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
  { text: 'Rumia', correct: false },
  { text: 'Kochiya Sanae', correct: false },
  { text: 'Remilia Scarlet', correct: false }
]
},
{
question: '6',
answers: [
  { text: 'Hata no Kokoro', correct: false   },
  { text: 'Kazami Yuuka', correct: false },
  { text: 'Kochiya Sanae', correct: true },
  { text: 'Kawashiro Nitori', correct: false }
]
},
{
  question: '7',
  answers: [
    { text: 'Cirno', correct: true   },
    { text: 'Not Cirno', correct: false },
    { text: 'Fairy', correct: true },
    { text: 'The Strongest', correct: true }
  ]
},
{
question: '8',
answers: [
  { text: 'Moriya Suwako', correct: true   },
  { text: 'Inubashiri Momiji', correct: false },
  { text: 'Joon Yorigami', correct: false },
  { text: 'Alice Margatroid', correct: false }
]
},
{
question: '9',
answers: [
  { text: 'Eirin Yagokoro', correct: false   },
  { text: 'Konpaku Youmu', correct: true },
  { text: 'Hong Meiling', correct: false },
  { text: 'Yorigami Shion', correct: false }
]
},
{
  question: '10',
  answers: [
    { text: 'Patchouli Knowledge', correct: false   },
    { text: 'Hata no Kokoro', correct: false },
    { text: 'Houraisan Kaguya', correct: false },
    { text: 'Saigyouji Yuyuko', correct: true }
  ]
},
{
question: '11',
answers: [
  { text: 'Chen', correct: true   },
  { text: 'Inaba Tewi', correct: false },
  { text: 'Rumia', correct: false },
  { text: 'Cirno', correct: false }
]
},
{
question: '12',
answers: [
  { text: 'Fujiwara no Mokou', correct: false   },
  { text: 'Yakumo Ran', correct: true },
  { text: 'Alice Margatroid', correct: false },
  { text: 'Yakumo Yukari', correct: false }
]
},
{
  question: '13',
answers: [
  { text: 'Yakumo Ran', correct: false   },
  { text: 'Yakumo Yukari', correct: true },
  { text: 'Eirin Yagokoro', correct: false },
  { text: 'Himekaidou Hatate', correct: false }
]
},
{
question: '14',
answers: [
{ text: 'Yorigami Shion', correct: false   },
{ text: 'Konpaku Youmu', correct: false },
{ text: 'Kawashiro Nitori', correct: false },
{ text: 'Houraisan Kaguya', correct: true }
]
},
{
question: '15',
answers: [
{ text: 'Himekaidou Hatate', correct: false   },
{ text: 'Chen', correct: false },
{ text: 'Fujiwara no Mokou', correct: true },
{ text: 'Kawashiro Nitori', correct: false }
]
},
{
  question: '16',
answers: [
  { text: 'Kazami Yuuka', correct: false   },
  { text: 'Yorigami Shion', correct: false },
  { text: 'Komeiji Satori', correct: true },
  { text: 'Moriya Suwako', correct: false }
]
},
{
question: '17',
answers: [
{ text: 'Komeiji Satori', correct: false   },
{ text: 'Kochiya Sanae', correct: false },
{ text: 'Hong Meiling', correct: false },
{ text: 'Komeiji Koishi', correct: true }
]
},
{
question: '18',
answers: [
{ text: 'Hata no Kokoro', correct: false   },
{ text: 'Reisen Udongein Inaba', correct: true },
{ text: 'Kazami Yuuka', correct: false },
{ text: 'Houraisan Kaguya', correct: false }
]
},
{
  question: '19',
  answers: [
    { text: 'Inaba Tewi', correct: true   },
    { text: 'Rumia', correct: false },
    { text: 'Remilia Scarlet', correct: false },
    { text: 'Himekaidou Hatate', correct: false }
  ]
},
{
question: '20',
answers: [
  { text: 'Konpaku Youmu', correct: false   },
  { text: 'Hata no Kokoro', correct: true },
  { text: 'Fujiwara no Mokou', correct: false },
  { text: 'Hinanawi Tenshi', correct: false }
]
},
{
question: '21',
answers: [
  { text: 'Fujiwara no Mokou', correct: false   },
  { text: 'Shiki Eiki, Yamaxanadu', correct: false },
  { text: 'Kawashiro Nitori', correct: false },
  { text: 'Ibaraki Kasen', correct: true }
]
},
{
  question: '22',
answers: [
  { text: 'Yorigami Shion', correct: false   },
  { text: 'Shameimaru Aya', correct: true },
  { text: 'Fujiwara no Mokou', correct: false },
  { text: 'Yakumo Ran', correct: false }
]
},
{
question: '23',
answers: [
{ text: 'Himekaidou Hatate', correct: true   },
{ text: 'Hakurei Reimu', correct: false },
{ text: 'Hata no Kokoro', correct: false },
{ text: 'Cirno', correct: false }
]
},
{
question: '24',
answers: [
{ text: 'Yakumo Yukari', correct: false   },
{ text: 'Yakumo Ran', correct: false },
{ text: 'Ibaraki Kasen', correct: false },
{ text: 'Hinanawi Tenshi', correct: true }
]
},
{
  question: '25',
answers: [
  { text: 'Yorigami Shion', correct: true   },
  { text: '5000', correct: false },
  { text: 'Himekaidou Hatate', correct: false },
  { text: 'Izayoi Sakuya', correct: false }
]
},
{
question: '26',
answers: [
{ text: 'Himekaidou Hatate', correct: false   },
{ text: 'Kazami Yuuka', correct: true },
{ text: 'Eirin Yagokoro', correct: false },
{ text: 'Houraisan Kaguya', correct: false }
]
},
{
question: '27',
answers: [
{ text: 'Komeiji Koishi', correct: false   },
{ text: 'Inubashiri Momiji', correct: true },
{ text: 'Konpaku Youmu', correct: false },
{ text: 'Komeiji Satori', correct: false }
]
},
{
  question: '28',
  answers: [
    { text: 'Hinanawi Tenshi', correct: false   },
    { text: 'Ibaraki Kasen', correct: false },
    { text: 'Eirin Yagokoro', correct: true },
    { text: 'Shameimaru Aya', correct: false }
  ]
},
{
question: '29',
answers: [
  { text: 'Yakumo Ran', correct: false   },
  { text: 'Rumia', correct: true },
  { text: 'Hakurei Reimu', correct: false },
  { text: 'Chen', correct: false }
]
},
{
question: '30',
answers: [
  { text: 'Ibaraki Kasen', correct: false   },
  { text: 'Yakumo Yukari', correct: false },
  { text: 'Joon Yorigami', correct: false },
  { text: 'Shiki Eiki, Yamaxanadu', correct: true }
]
},
{
  question: '31',
answers: [
  { text: 'Kawashiro Nitori', correct: true   },
  { text: 'Kirisame Marisa', correct: false },
  { text: 'Kochiya Sanae', correct: false },
  { text: 'Hong Meiling', correct: false }
]
},
{
question: '32',
answers: [
{ text: 'Hakurei Reimu', correct: true   },
{ text: 'Komeiji Satori', correct: false },
{ text: 'Kochiya Sanae', correct: false },
{ text: 'Komeiji Koishi', correct: false }
]
},
{
question: '33',
answers: [
{ text: 'Kirisame Marisa', correct: true   },
{ text: 'Yorigami Shion', correct: false },
{ text: 'Flandre Scarlet', correct: false },
{ text: 'Konpaku Youmu', correct: false }
]
}]
