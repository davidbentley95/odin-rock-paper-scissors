//initialize variables
let playerChoice = "";
let computerChoice = "";
let rockButton = document.getElementById("rock");

//event handler function 
function updatePlayerChoice(event) {
    playerChoice = event.target.textContent;
    console.log(playerChoice);
}

//add event listeners 
document.getElementById("rock").addEventListener("click", updatePlayerChoice);
document.getElementById("paper").addEventListener("click", updatePlayerChoice);
document.getElementById("scissors").addEventListener("click", updatePlayerChoice);
