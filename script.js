//initialize variables
let playerChoice = "";
let computerChoice = "";
let rockButton = document.getElementById("rock");

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

//event handler function 
function updatePlayerChoice(event) {
    playerChoice = event.target.textContent;
    console.log("Player choice is: " + playerChoice);
}

//add event listeners 
document.getElementById("rock").addEventListener("click", updatePlayerChoice);
document.getElementById("paper").addEventListener("click", updatePlayerChoice);
document.getElementById("scissors").addEventListener("click", updatePlayerChoice);
