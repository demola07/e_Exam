const username = document.querySelector('#username');
const saveScoreButton = document.querySelector('#saveScoreButton');
const finalScore = document.querySelector('#finalScore');

const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.textContent = mostRecentScore;

username.addEventListener('keyup', () => {
  saveScoreButton.disabled = !username.value;
});

saveHighScore = e => {
  e.preventDefault();
  console.log('clicked save button');
};
