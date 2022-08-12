var number = document.querySelector("#number");
var number2 = document.querySelector("#number2");
var number3 = document.querySelector("#number3");
var numberOfGuess = 0;
var guessedNumber = [];
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const randomNumber = randomIntFromInterval(1, 100);
function check() {
  var userGuess = document.querySelector("#input").value;

  if (userGuess < 1 || userGuess > 100 || userGuess == null) {
    alert("please enter number between 1 and 100");
  } else {
    guessedNumber.push(userGuess);
    numberOfGuess = numberOfGuess + 1;
    if (guessedNumber.length === 10) {
      number.textContent = "You Fail";
      number2.textContent = "Correct Number is : " + randomNumber;
      number3.textContent = "you guessed : " + numberOfGuess;
      numberOfGuess = 0;
      guessedNumber = [];
    } else if (userGuess < randomNumber) {
      console.log("randomNumber," + randomNumber);
      number.textContent = "your guess is low";
      number2.textContent = "No of guesses : " + numberOfGuess;
      number3.textContent = " guessed numbers are : " + guessedNumber;
    } else if (userGuess > randomNumber) {
      number.textContent = "your guess is High";
      number2.textContent = "No of guesses : " + numberOfGuess;
      number3.textContent = " guessed numbers are : " + guessedNumber;
    } else if (userGuess == randomNumber) {
      number.textContent = "You Won";
      number2.textContent = "The Number is : " + randomNumber;
      number3.textContent = "you guessed : " + numberOfGuess;
      numberOfGuess = 0;
      guessedNumber = [];
    }
  }
}
