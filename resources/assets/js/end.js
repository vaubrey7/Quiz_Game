const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')

const highScores = JSON.parse(localStorage.getItem('highScores')) || []
//sets MAX_HIGH_SCORE to an Unchagable value
const MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore
// event listener to save button, unable to save unless info is entered. 
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})
//Arranges highScores from highest to lowest, saves them to local storage and returns them to home screen. 
saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a, b) => {
        return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('/')
}