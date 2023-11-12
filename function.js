function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    computerChoice = "rock";
  } else if (computerChoice === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  console.log(computerChoice);
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "It's a tie";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return `You Win ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return `You Win ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return `You Win ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose ${playerSelection} beats ${computerSelection}`;
  }
}

function game() {}
let playerScore = 0;
let computerScore = 0;
for (let round = 1; round <= 5; round++) {
  const playerSelection = prompt("Enter Your Choice");
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  console.log(`Round ${round}: ${result}`);
  if (result.includes("Win")) {
    playScore++;
  } else if (result.includes("Lose")) {
    computerScore++;
  }
}

console.log(
  `Game Over! Player Score: ${playerScore}, Computer Score: ${computerScore}`
);

if (playerScore > computerScore) {
  console.log("Congratulations! You win the game!");
} else if (playerScore < computerScore) {
  console.log("Sorry! You lose the game.");
} else {
  console.log("It's a tie! The game ends in a draw.");
}

game();
