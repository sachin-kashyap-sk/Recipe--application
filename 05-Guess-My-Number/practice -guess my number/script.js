let randomNumber = Math.floor(Math.random() * 21) + 1;
const CheckBtn = document.querySelector('.check');
const GuessNumber = document.querySelector('.guess');
const CorrectGuess = document.querySelector('.number');
const NumberMessage = document.querySelector('.message');
const body = document.querySelector('body');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const RestartBtn = document.querySelector('.again');

let currentScore = 20;
let HighScore = 0;
console.log(randomNumber);

CheckBtn.addEventListener('click', () => {
  const inputValue = Number(GuessNumber.value);

  if (inputValue === randomNumber) {
    body.style.backgroundColor = 'green';
    CorrectGuess.innerText = randomNumber;
    NumberMessage.innerText = 'Start Guessing.- Correct Number';
    currentScore = currentScore - 1;
    score.innerText = currentScore;
    console.log(currentScore);
    if (HighScore < currentScore) {
      HighScore = currentScore;
      highScore.innerText = currentScore;
    }
  } else if (inputValue < randomNumber) {
    NumberMessage.innerText = 'start Guessing - Too-Low';
    currentScore = currentScore - 1;
    score.innerText = currentScore;
    body.style.backgroundColor = 'black';
  } else if (inputValue > randomNumber) {
    NumberMessage.innerText = 'start Guessing - Too-High';
    currentScore = currentScore - 1;
    score.innerText = currentScore;
    body.style.backgroundColor = 'black';
  }
});
RestartBtn.addEventListener('click', () => {
  GuessNumber.value = '';
  CorrectGuess.innerText = '?';
  NumberMessage.innerText = 'start guessing..';
  highScore.innerText = '0';
  score.innerText = '20';
});
