let computerScore = 0;
let yourScore = 0;
let you;
let computer;
let roundNumber = 0;

const choices = ["rock", "paper", "scissors"];

window.onload = function () {
  for (let i = 0; i < 3; i++) {
    let choice = document.createElement("img");
    choice.id = choices[i];
    choice.src = "./img/" + choices[i] + ".png";
    choice.addEventListener("click", getSelection);
    document.getElementById("choices").append(choice);
  }

  function restartGame() {
    // Reset game variables
    computerScore = 0;
    yourScore = 0;
    roundNumber = 0;

    // Clear result display
    document.getElementById("result").innerText = "";

    // Reset score and round number display
    document.getElementById("computerScore").innerText = "0";
    document.getElementById("yourScore").innerText = "0";
    document.getElementById("roundNumber").innerText = "0";
  }

  function gameEnded() {
    if (yourScore === 5 || computerScore === 5) {
      let resultDiv = document.getElementById("result");
      if (yourScore === 5) {
        resultDiv.innerText = "You Win!";
      } else if (computerScore === 5) {
        resultDiv.innerText = "You Lose!";
      } else {
        resultDiv.innerText = "It's a tie!";
      }
      document.getElementById("restartButton").style.display = "block";
    }
  }
  document
    .getElementById("restartButton")
    .addEventListener("click", function () {
      restartGame();
      this.style.display = "none"; // Hide the restart button after clicking
    });

  function getSelection() {
    you = this.id;
    document.getElementById("yourChoice").src = "./img/" + you + ".png";

    computer = choices[Math.floor(Math.random() * 3)];
    document.getElementById("computerChoice").src =
      "./img/" + computer + ".png";

    if (you === computer) {
      yourScore++;
      computerScore++;
    } else if (you === "rock" && computer === "scissors") {
      yourScore++;
    } else if (you === "paper" && computer === "rock") {
      yourScore++;
    } else if (you === "scissors" && computer === "paper") {
      yourScore++;
    } else {
      computerScore++;
    }
    document.getElementById("yourScore").innerText = yourScore;
    document.getElementById("computerScore").innerText = computerScore;

    roundNumber++;
    document.getElementById("roundNumber").innerText = roundNumber;

    gameEnded();
  }
};
document.getElementById("click").addEventListener("click", gamePlayed);
