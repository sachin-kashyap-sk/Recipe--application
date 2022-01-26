const randomNumber = Math.floor(Math.random() * 21);
const userInput = document.querySelector('.guess');
const submitBtn = document.querySelector('.check');
const numberDiv = document.querySelector('.number');
const currentScore = document.querySelector('.score');
const message = document.querySelector('.message');
const highScoreDiv = document.querySelector('.highscore');
const againBtn = document.querySelector('.again');
const body = document.querySelector('body');
let noOfChanges = 20;
let highScore = 0;
submitBtn.addEventListener('click', () => {
  const inputValue = +userInput.value;
  if (noOfChanges > 0 && inputValue === randomNumber) {
    body.style.backgroundColor = 'green';
    if (noOfChanges > highScore) {
      highScore = noOfChanges;
      highScoreDiv.innerText = noOfChanges;
    }
    numberDiv.innerText = randomNumber;
    message.innerText = 'You won the game';
  } else if (noOfChanges > 0) {
    body.style.backgroundColor = '#222';
    noOfChanges = noOfChanges - 1;
    if (inputValue < randomNumber && noOfChanges > 0) {
      message.innerText = 'Too Low';
    } else if (noOfChanges > 0) {
      message.innerText = 'Too High';
    } else {
      message.innerText = 'You loss the game!';
    }
    currentScore.innerText = noOfChanges;
  } else {
    return;
  }
});

againBtn.addEventListener('click', () => {
  numberDiv.innerText = '?';
  message.innerText = 'Start guessing...';
  noOfChanges = 20;
  currentScore.innerText = noOfChanges;
  userInput.value = '';
});
