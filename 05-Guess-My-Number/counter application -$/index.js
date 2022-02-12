const Score = document.querySelector("#score");
const ScoreUp = document.querySelector("#ScoreUp");
const ScoreDown = document.querySelector("#ScoreDown");
const SecundHeading = document.querySelector("#SecundHeading");
let CurrentScore = 0;

ScoreUp.addEventListener("click", () => {
  CurrentScore = CurrentScore + 1;
  Score.innerText = "Score is : " + CurrentScore;
  if (CurrentScore > 10) {
    SecundHeading.innerText = "Score status: Score Is To High";
  }
});

ScoreDown.addEventListener("click", () => {
  CurrentScore = CurrentScore - 1;
  console.log(CurrentScore);
  Score.innerText = `Score is: ${CurrentScore}`;
  if (CurrentScore < 1) {
    console.log("Count Not Possible");
  }
});














