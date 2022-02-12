let randomNumber = Math.floor(Math.random() * 21);
const GuessNumber = document.querySelector(".guess");
const CheckBtn = document.querySelector(".check");
const CorrectNumber = document.querySelector(".number");
const NumberOfScore = document.querySelector(".score");
const GuessMessage = document.querySelector(".message");
const HighestScore = document.querySelector(".HighestScore");
const AgainBtn = document.querySelector(".again");
const body = document.querySelector("body");
let NumberOfChances = 20;
let HighScore = 0;

console.log(randomNumber);
CheckBtn.addEventListener("click", () => {
  const inputValue = Number(GuessNumber.value);
  console.log(randomNumber);
/*
  if (inputValue === randomNumber) {
    body.style.backgroundColor = "green";
    CorrectNumber.innerText = randomNumber;
    randomNumber = Math.floor(Math.random() * 21);
    if (NumberOfChances > HighScore) {
      HighScore = NumberOfChances;
      HighestScore.innerText = NumberOfChances;
    }
  } else if (inputValue < randomNumber) {
    body.style.backgroundColor = "black";
    NumberOfChances = NumberOfChances - 1;
    NumberOfScore.innerText = NumberOfChances;
    GuessMessage.innerText = "Guessing Number IS Too Low";
    // HighScore = NumberOfChances === HighScore;
  } else if (inputValue > randomNumber) {
    NumberOfChances = NumberOfChances - 1;
    NumberOfScore.innerText = NumberOfChances;
    GuessMessage.innerText = "Guessing Number IS Too High";
  }
});
AgainBtn.addEventListener("click", () => {
  GuessMessage.innerText = "Start guessing...";
  NumberOfChances = 20;
  NumberOfScore.innerText = NumberOfChances;
  GuessNumber.value = "";
  CorrectNumber.innerText = "?";
});
*/