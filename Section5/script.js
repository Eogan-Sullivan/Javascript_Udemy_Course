'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!🎉🎉';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;

console.log(document.querySelector('.guess').value);

*/

//Generate Number between 1-20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayHighscore = function (highscore) {
  document.querySelector('.highscore').textContent = highscore;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const setBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const setWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (score > 1) {
    //When there is no input =
    if (!guess) {
      displayMessage('No Number ⛔');

      // when player wins
    } else if (guess === secretNumber) {
      displayMessage('Correct Number 🎉');
      setBackgroundColor('#60b347');
      displayNumber(secretNumber);
      setWidth('30rem');
      if (highscore < score) {
        highscore = score;
        displayHighscore(highscore);
      }
    }
    //when guess is wrong
    else if (guess !== secretNumber) {
      {
        displayMessage(guess < secretNumber ? '📉 Too low!' : ' 📈 Too high! ');
        score--;
      }
    }
  } else {
    score = 0;
    displayMessage('You lost the game 🧨');
  }
  displayScore(score);
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayScore(score);
  displayNumber('?');
  displayMessage('Start guessing...');
  setBackgroundColor('#222');
  setWidth('15rem');
});
