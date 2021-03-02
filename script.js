"use strict";

const message = document.querySelector(".message");
const input = document.querySelector(".guess");
const check = document.querySelector(".check");
const numberBox = document.querySelector(".number");
const scoreBox = document.querySelector(".score");
const highscoreBox = document.querySelector(".highscore");
const body = document.querySelector("body");
const again = document.querySelector(".again");

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

check.addEventListener("click", () => {
  let value = parseInt(input.value);

  if (!value) {
    message.textContent = "Please select a number";
  }
  if (value === secretNumber) {
    message.textContent = `The number is the same! your score was ${score}`;
    if (score > highscore) {
      highscoreBox.textContent = score;
    }
    body.style.backgroundColor = "#60b347";
    numberBox.textContent = secretNumber;
    numberBox.style.width = "30rem";
  } else if (value > secretNumber) {
    if (score > 1) {
      message.textContent = "The number is too high";
      score--;
      scoreBox.textContent = score;
    } else {
      body.style.backgroundColor = "red";
      message.textContent = "Game over";
      score = 0;
      scoreBox.textContent = score;
    }
  } else if (value < secretNumber) {
    if (score > 1) {
      message.textContent = "The number is too low";
      score--;
      scoreBox.textContent = score;
    } else {
      body.style.backgroundColor = "red";
      message.textContent = "Game over";
      score = 0;
      scoreBox.textContent = score;
    }
  }
});

again.addEventListener("click", () => {
  score = 20;
  scoreBox.textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  body.style.backgroundColor = "#222";
  numberBox.style.width = "15rem";
  numberBox.textContent = "?";
  message.textContent = "Start guessing...";
  input.value = "";
});
