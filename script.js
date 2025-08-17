
const choices = ["Bear", "Human", "Ninja"];
let playerWins = 0;
let computerWins = 0;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let result = "";

  if (playerChoice === computerChoice) {
    result = `It's a tie! Both chose ${playerChoice}.`;
  } else if (
    (playerChoice === "Bear" && computerChoice === "Human") ||
    (playerChoice === "Human" && computerChoice === "Ninja") ||
    (playerChoice === "Ninja" && computerChoice === "Bear")
  ) {
    result = `You chose ${playerChoice} <br/> The computer chose ${computerChoice} <br/> You win!`;
    playerWins++;
  } else {
    result = `You chose ${playerChoice} <br/> The computer chose ${computerChoice} <br/> The computer wins!`;
    computerWins++;
  }

  document.getElementById("resultText").innerHTML = result;
  document.getElementById("winText").innerHTML = `Your Wins: ${playerWins} <br/> Computer Wins: ${computerWins}`;

  document.getElementById("resultBox").classList.remove("d-none");
  document.getElementById("winCounter").classList.remove("d-none");
  document.getElementById("playAgainBtn").classList.remove("d-none");

  document.querySelector(".btn-group").classList.add("d-none");
}

function resetGame() {
  document.getElementById("resultBox").classList.add("d-none");
  document.getElementById("winCounter").classList.add("d-none");
  document.getElementById("playAgainBtn").classList.add("d-none");

  document.querySelector(".btn-group").classList.remove("d-none");
}
