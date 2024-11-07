//initialize variables
let playerChoice = "";
let computerChoice = "";

//event handler function 
function updatePlayerChoice(event) {
    console.log(event)
    playerChoice = event.target.textContent;
    console.log(playerChoice);
}

//add event listeners 
document.getElementById("rock").addEventListener("click", updatePlayerChoice);
document.getElementById("paper").addEventListener("click", updatePlayerChoice);
document.getElementById("scissors").addEventListener("click", updatePlayerChoice);
