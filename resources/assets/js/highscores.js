const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []
//makes highscore into a list with name and highscore 
highScoresList.innerHTML = 
highScores.map(score =>{
    return `<li class="high-score">${score.name} - ${score.score}<li>`
}).join('')