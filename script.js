'use strict';

// scores elements
let playerEl0 = document.querySelector('.player--0');
let playerEl1 = document.querySelector('.player--1');
let score1 = document.getElementById('score--0');
let score2 = document.getElementById('score--1');
// current scores elemenst
let currentEl1 = document.getElementById('current--0');
let currentEl2 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
// buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let currentScoreEl = document.getElementById('#current--0');
diceEl.classList.add('hidden');

const scores = [0, 0];
let totalScore1 = (score1.textContent = '');
let totalScore2 = (score2.textContent = '');

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentPlayerScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerEl0.classList.toggle('player--active');
  playerEl1.classList.toggle('player--active');
};
// When the roll dice button is clicked, the buttons starts to roll
let currentPlayerScore = 0;
let activePlayer = 0;
const roll = function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  if (dice !== 1) {
    currentPlayerScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentPlayerScore;
  } else {
    switchPlayer();
  }
};
btnRoll.addEventListener('click', roll);

// the hold button
const hold = function () {
  scores[activePlayer] += currentPlayerScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  if (scores[activePlayer] >= 100) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    diceEl.classList.add('hidden');
  } else switchPlayer();
};
btnHold.addEventListener('click', hold);
