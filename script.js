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

// game variables
let scores, currentPlayerScore, activePlayer, gamePlaying;

const init = function () {
  // initialize game variables
  scores = [0, 0];
  currentPlayerScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  // reset UI elements
  score1.textContent = 0;
  score2.textContent = 0;
  currentEl1.textContent = 0;
  currentEl2.textContent = 0;
  diceEl.classList.add('hidden');
  playerEl0.classList.remove('player--winner');
  playerEl1.classList.remove('player--winner');
  playerEl0.classList.add('player--active');
  playerEl1.classList.remove('player--active');
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentPlayerScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerEl0.classList.toggle('player--active');
  playerEl1.classList.toggle('player--active');
};

// The roll button
btnRoll.addEventListener('click', function () {
  if (gamePlaying) {
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
  }
});

// the hold button
btnHold.addEventListener('click', function () {
  if (gamePlaying) {
    scores[activePlayer] += currentPlayerScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 30) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
      gamePlaying = false;
    } else switchPlayer();
  }
});

btnNew.addEventListener('click', function () {
  init();
});
