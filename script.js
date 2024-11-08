//next is to add game logic and control flow (maybe add function that calls update computer choice then runs the checks?)
//maybe the above function runs onClick of the button?
//function to check if player won?

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
    console.log("Player choice is: " + playerChoice);
    updateComputerChoice();
    playingGame();
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

    playerChoiceText.textContent += playerChoice;
    computerChoiceText.textContent += computerChoice;
    
    if(playerChoice === computerChoice) {
        resultsText.textContent += "Draw, try again!"
    } else if(playerWins()) {
        resultsText.textContent += "You Win!!";
        playerCounter++
    } else {
        resultsText.textContent += "You LOSE!!";
        computerCounter++
    }

}

function playerWins() {
    
    if((playerChoice === "Rock" && computerChoice === "Scissors") || (playerChoice === "Paper" && computerChoice === "Rock") || (playerChoice === "Scissors" && computerChoice === "Paper")) {
        return true;
    }

}
