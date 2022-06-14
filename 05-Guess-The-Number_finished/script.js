"use strict";

// Random Number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Initial Score
let score = 20;
let highScore = 0;

// Reset Game
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").value = "";

  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
});

// for showing secret number
// document.querySelector('.number').textContent = secretNumber;

// game Logic

document.querySelector(".check").addEventListener("click", function () {
  // User Input
  const guessNumber = Number(document.querySelector(".guess").value);

  // errror Handling
  // No input case or number not between 1 and 20
  if (!guessNumber || guessNumber > 20 || guessNumber < 1) {
    document.querySelector(".message").textContent =
      " ❌ Please enter a Number between 1 & 20";
      document.querySelector(".guess").value = '';

  } else if (guessNumber === secretNumber) {
    document.querySelector(".message").textContent = "😎 Gussed Correct Number";
    // for showing secret number
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "30rem";
    document.querySelector("body").style.backgroundColor = "#60b347";

   if (score > highScore){
     highScore = score;
     document.querySelector('.highscore').textContent = highScore;
   }
    document.querySelector(".score").textContent = score;
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = guessNumber > secretNumber ?
      "⤴️ Guessed Number is too High" : "⤵️ Guessed Number is too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;

    }
  } 
  // else if (guessNumber < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent =
  //       "⤵️ Guesed Number is too low";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You lost the game";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});
