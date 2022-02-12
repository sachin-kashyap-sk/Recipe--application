const playerZero = document.querySelector('.player--0');
const playerFirst = document.querySelector('.player--1');
const scoreZero = document.querySelector('#score--0');
const scoreFirst = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnRestart = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScoreZero = document.querySelector('#current--0');
const currentScoreFirst = document.querySelector('#current--1');

let score = [0, 0];
scoreZero.textContent = 0;
scoreFirst.textContent = 0;
diceEl.classList.add('hidden');

let currentScore;
currentScore = 0;
currentScoreZero.textContent = 0;
currentScoreFirst.textContent = 0;

let activePlayer;
activePlayer = 0;
playerZero.classList.add('player--active');
playerFirst.classList.remove('player--active');

btnRollDice.addEventListener('click', () => {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore = currentScore + dice;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    playerZero.classList.toggle('player--active');
    playerFirst.classList.toggle('player--active');
  }

  btnHold.addEventListener('click', () => {
    score[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      score[activePlayer];

    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    playerZero.classList.toggle('player--active');
    playerFirst.classList.toggle('player--active');
  });

  if (score[activePlayer] >= 20) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  }
});
btnRestart.addEventListener('click', () => {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;

  scoreZero.textContent = 0;
  scoreFirst.textContent = 0;
  currentScoreZero.textContent = 0;
  currentScoreFirst.textContent = 0;

  diceEl.classList.add('hidden');
  playerZero.classList.remove('player--winner');
  playerFirst.classList.remove('player--winner');
  playerZero.classList.add('player--active');
  playerFirst.classList.remove('player--active');
});
