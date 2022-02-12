const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

let score, currentScore, activePlayer;
const init =
  ('click',
  () => {
    score = [0, 0];
    currentScore = 0;
    activePlayer = 0;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
  });
init();
/*score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let score = [0, 0];
let currentScore = 0;
let activePlayer = 0; */

/*button roll */

btnRoll.addEventListener('click', () => {
  const dice = Math.trunc(Math.random() * 6) + 1;

  /*display dice*/
  diceEl.classList.remove('.hidden');
  diceEl.src = `dice-${dice}.png`;

  //if dice not one then add score to the current score

  if (dice !== 1) {
    currentScore = currentScore + dice;
    document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
  }
  
  else {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});

btnHold.addEventListener('click', () => {
  score[activePlayer] += currentScore;
  document.querySelector(`#score--${activePlayer}`).textContent =
    score[activePlayer];

  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');

  if (score[activePlayer] >= 20) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--Winner');
    document
      .querySelector(`player--${activePlayer}`)
      .classList.remove('player--active');
  }
});
btnNew.addEventListener('click', init); 

