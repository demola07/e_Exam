const username = document.querySelector('#username');
const saveScoreButton = document.querySelector('#saveScoreButton');
const finalScore = document.querySelector('#finalScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const MAX_HIGH_SCORE = 5;

const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.textContent = mostRecentScore;

username.addEventListener('keyup', () => {
  saveScoreButton.disabled = !username.value;
});

saveHighScore = e => {
  e.preventDefault();
  console.log('clicked save button');

  const score = {
    score: finalScore.textContent,
    // score: Math.floor(Math.random() * 100),
    name: username.value
  };
  //Add score to array
  highScores.push(score);
  // sort it based on highscore
  highScores.sort((a, b) => b.score - a.score);
  //keep only the highest five scores
  highScores.splice(5);

  localStorage.setItem('highScores', JSON.stringify(highScores));
  window.location.assign('index.html');
};
