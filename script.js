'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const screenColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const revealNumber = function (reveal, size) {
  document.querySelector('.number').textContent = reveal;
  document.querySelector('.number').style.width = size;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No number!');
  } else if (guess === secretNumber) {
    displayMessage('✅Correct Number!');
    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
      highScore = score;
    }
    revealNumber(secretNumber, '30rem');
    screenColor('#60b347');
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈Too High!' : '📉Too Low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('☠️Game Over!');
      screenColor('#ce3838');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  displayScore(score);
  revealNumber('?', '15rem')
  document.querySelector('.guess').value = '';
  screenColor('#222');
});