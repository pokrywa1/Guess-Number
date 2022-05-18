'use strict';

let secretNumber = Math.floor(Math.random() * (20 - 1) + 1);
let score = 20;
let highScore = 0;
console.log(secretNumber);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('no Number!');
  } else if (guess === secretNumber) {
    displayMessage('Correct!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'too high!' : 'too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('lost game');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * (20 - 1) + 1);
  console.log(secretNumber);
  displayMessage('Start quessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
