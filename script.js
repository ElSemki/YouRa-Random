'use strict';

const body = document.querySelector('body');
const question = document.querySelector('.question');
const numberInput = document.querySelector('.number-input');
const guessMessage = document.querySelector('.guess-message');
const scoreInPage = document.querySelector('.score');
let highscoreInPage = document.querySelector('.highscore');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', () => {
  const guessingNumber = Number(numberInput.value);

  if (!guessingNumber) {
    guessMessage.textContent = 'Введите число!';
  } else if (guessingNumber === secretNumber) {
    body.style.backgroundColor = 'rgb(9, 250, 21)';
    question.style.width = '50rem';
    question.textContent = secretNumber;
    guessMessage.textContent = 'Правильно!';
    if (score > highscore) {
      highscore = score;
      highscoreInPage.textContent = highscore;
    }
  } else if (guessingNumber !== secretNumber) {
    if (score > 1) {
      guessMessage.textContent =
        guessingNumber > secretNumber ? 'Много!' : 'Мало';
      score--;
      scoreInPage.textContent = score;
    } else {
      guessMessage.textContent = 'Игра окончена';
      scoreInPage.textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  body.style.backgroundColor = 'rgb(0, 0, 0)';
  question.style.width = '25rem';
  question.textContent = '???';
  numberInput.value = '';
  guessMessage.textContent = 'Начни угадывать';
  score = 20;
  scoreInPage.textContent = score;
});
