const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressFull = document.querySelector('#progressFull');

let currentQuestion = {}
let acceptingAnswer = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions =[
  
  {question: "What is 2+6?",
  choice1: "44",
  choice2: "8",
  choice3: "22",
  choice4: "2",
  answer: 2, 
 },
  {question: "What does the fox say?",
   choice1: "oh no",
   choice2: "run",
   choice3: "hide",
   choice4: "reneneneneneneneneneneneneenne",
   answer: 4, 
  },
  {question: "what is the biggest mammal on planet Earth",
  choice1: "Asian Elephant",
  choice2: "African Elephant",
  choice3: "Polar Bear",
  choice4: "Blue Whale",
  answer: 4, 
 },
  {question: "Best food on planet Earth",
   choice1: "TAco",
   choice2: "TaCo",
   choice3: "Tac0",
   choice4: "Taco",
   answer: 4,
  }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4




startGame = () => {
  questionCounter = 0
  score = 0
  availableQuestions = [...questions]
  getNewQuestion()
} 
  
getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
      localStorage.setItem('mostRecentScore', score)
  
      return window.location.assign('/end.html')
}


questionCounter++
progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
progressBarFull.style.width =`${(questionCounter/MAX_QUESTIONS) * 100}%`

const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
currentQuestion = availableQuestions[questionsIndex]
question.innerText = currentQuestion.question

choices.forEach(choice => {
  const number = choice.dataset['number']
  choice.innerText = currentQuestion['choice' + number];
})

availableQuestions.splice(questionsIndex, 1)

acceptingAnswer = true

}

choices.forEach(choice => {
  choice.addEventListener('click', e => {
    if(!acceptingAnswer) return
    
    acceptingAnswer = false
    
    const selectedChoice = e.target
    const selectedAnswer = selectedChoice.dataset['number']
    
    let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
    
    
    if(classToApply === 'correct'){
      incrementScore(SCORE_POINTS)
    }

    selectedChoice.parentElement.classList.add(classToApply)
    
    setTimeout(() => { 
      selectedChoice.parentElement.classList.remove(classToApply)
      getNewQuestion()
    
    }, 1000)

    
  })

})

incrementScore = num => {
  score +=num
  scoreText.innerText = score
}

startGame()