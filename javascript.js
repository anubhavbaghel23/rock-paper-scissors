// 1. generate a random number
// 2. Based on that number return "Rock", "paper" or "Scissors"

//Used function to generate random integer
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//Create a new function named getComputerChoice
function getComputerChoice(){
    let randomNumber = getRandomInt(3);
    
    if (randomNumber === 0){
        return "Rock";
    } else if (randomNumber === 1){
        return "scissors";
    } else {
        return "Paper";
    }
}

let computerChoice = getComputerChoice();
console.log(computerChoice);

function getHumanChoice(){
    return prompt("Choose Rock, Paper, or Scissors:");
}

let userChoice = getHumanChoice();

console.log("You chose : " + userChoice);

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    
}


