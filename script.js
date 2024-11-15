//initialize variables
let playerChoice = "";
let computerChoice = "";
let playerCounter = 0;
let computerCounter = 0;
let playerChoiceText = document.querySelector(".player-choice");
let computerChoiceText = document.querySelector(".computer-choice");
let resultsText = document.querySelector(".results");

//event handler function 
function updatePlayerChoice(event) {
    playerChoice = event.target.textContent;
    updateComputerChoice();
    playingGame();
    changeGameTextDisplay();
}

//add event listeners 
document.getElementById("rock").addEventListener("click", updatePlayerChoice);
document.getElementById("paper").addEventListener("click", updatePlayerChoice);
document.getElementById("scissors").addEventListener("click", updatePlayerChoice);

//initialize computer options array
const computerOptions = ["Rock", "Paper", "Scissors"]

//game functions
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function updateComputerChoice() {
    computerChoice = computerOptions[getRandomInt(3)];
    console.log("Computer choice is: " + computerChoice);
}

function playingGame() {

    displayRestartButton();
    playerChoiceText.textContent = playerChoice;
    computerChoiceText.textContent = computerChoice;
    
    if(playerChoice === computerChoice) {
        resultsText.textContent = "Draw, try again!"
    } else if(playerWins()) {
        resultsText.textContent = "You Win!!";
        playerCounter++
    } else {
        resultsText.textContent = "You LOSE!!";
        computerCounter++
    }

    document.querySelector(".player-score").innerText = playerCounter;
    document.querySelector(".computer-score").innerText = computerCounter;
}

function playerWins() {
    
    if((playerChoice === "Rock" && computerChoice === "Scissors") || (playerChoice === "Paper" && computerChoice === "Rock") || (playerChoice === "Scissors" && computerChoice === "Paper")) {
        return true;
    }

}

function changeGameTextDisplay() {
    document.querySelector(".welcome").style.display = "none";
    document.querySelector(".instructions").style.display = "none";
    document.querySelector(".score-box").style.display = "flex";
    document.querySelector(".game-text").style.display = "block";
}

function displayRestartButton() {
    document.querySelector(".restart").style.display = "inline-block";
}
