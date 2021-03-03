"use strict";

const body = document.querySelector("body");
const again = document.querySelector(".again");

const input = document.querySelector(".guess");
const check = document.querySelector(".check");

const message = document.querySelector(".message");
const numberBox = document.querySelector(".number");
const scoreBox = document.querySelector(".score");
const highscoreBox = document.querySelector(".highscore");

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = (content) => (message.textContent = content);
const displayNumber = (content) => (numberBox.textContent = content);
const displayScore = (content) => (scoreBox.textContent = content);
const displayHighscore = (content) => (highscoreBox.textContent = content);

check.addEventListener("click", () => {
  let value = parseInt(input.value);
  if (!value) {
    displayMessage("Please select a number");
  }
  //IF ENTERED VALUE IS THE SAME
  if (value === secretNumber) {
    displayMessage(`The number is the same! your score was ${score}`);
    if (score > highscore) {
      displayHighscore(score);
    }
    body.style.backgroundColor = "#60b347";
    displayNumber(secretNumber);
    numberBox.style.width = "30rem";
    //IF ENTERED NUMBER IS NOT THE
  } else if (value !== secretNumber) {
    if (score > 1) {
      displayMessage(
        `The number is too ${value > secretNumber ? "high" : "low"}`
      );
      score--;
      displayScore(score);
    } else {
      body.style.backgroundColor = "red";
      displayMessage("Game over!");
      score = 0;
      displayScore(score);
    }
  }
});

again.addEventListener("click", () => {
  score = 20;
  displayScore(score);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  body.style.backgroundColor = "#222";
  numberBox.style.width = "15rem";
  displayNumber("?");
  displayMessage("Start guessing...");
  input.value = "";
});
