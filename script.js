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

let totalScore1 = (score1.textContent = '');
let totalScore2 = (score2.textContent = '');

// When the roll dice button is clicked, the buttons starts to roll
let currentPlayerScore = 0;
let acivePlayer = 0;
const roll = function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  if (dice !== 1) {
    currentPlayerScore += dice;
    document.getElementById(`current--${acivePlayer}`).textContent =
      currentPlayerScore;
  } else {
    document.getElementById(`current--${acivePlayer}`).textContent = 0;
    currentPlayerScore = 0;
    acivePlayer = acivePlayer === 0 ? 1 : 0;
    playerEl0.classList.toggle('player--active');
    playerEl1.classList.toggle('player--active');
  }
};

btnRoll.addEventListener('click', roll);

// the hold button
const hold = function () {
  totalScore1 = currentPlayerScore;
};
btnHold.addEventListener('click', hold);
