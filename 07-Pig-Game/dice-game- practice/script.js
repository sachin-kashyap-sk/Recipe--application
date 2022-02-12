const PlayerOne = document.querySelector('.player--0');
const PlayerTwo = document.querySelector('.player--1');
const PlayerOneScore = document.querySelector('#score--0');
const PlayerTwoScore = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const RollBtn = document.querySelector('.btn--roll');
const CurrentScoreOne = document.querySelector('#current--0');
const CurrentScoreTwo = document.querySelector('#current--1');
const holdBtn = document.querySelector('.btn--hold');

PlayerOneScore.textContent = 0;
PlayerTwoScore.textContent = 0;
let CurrentScore = 0;
let activePlayer = 0;
let score = [0, 0];
dice.classList.add('hidden');

RollBtn.addEventListener('click', () => {
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${diceNumber}.png`;
  dice.classList.remove('hidden');

  if (diceNumber !== 1) {
    CurrentScore = CurrentScore + diceNumber;
    document.querySelector(`#current--${activePlayer}`).textContent =
      CurrentScore;
  } else {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    CurrentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    PlayerOne.classList.toggle('player--active');
    PlayerTwo.classList.toggle('player--active');
  }
});

holdBtn.addEventListener('click', () => {
  score[activePlayer] += CurrentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    score[activePlayer];

  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  CurrentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  PlayerOne.classList.toggle('player--active');
  PlayerTwo.classList.toggle('player--active');

  if (score[activePlayer] >= 20) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--Winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  }
});
