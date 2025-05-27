//This function will generate a random integer
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//This function will assign the generated
// integer to rock,paper or scissors
function getComputerChoice(){
    let randomNumber = getRandomInt(3);

    if (randomNumber === 0 ){
        return "rock";
    } else if(randomNumber === 1){
        return "paper";
    } else{
        return "scissor";
    }
}

//This function will ask for Human Input
function getHumanChoice(){
    let humanInput = prompt("Enter your value (Rock,Paper or Scissor) : ") 
    let processedInput = humanInput.toLowerCase();
    return processedInput;
}

//This function sets up how one round will be played

function playRound(){
    
    let humanChoice = getHumanChoice();

    let computerChoice = getComputerChoice();

    if (humanChoice === "rock"){
        if (computerChoice === "rock"){
            console.log("Its a tie");
            return "tie";
        } else if (computerChoice === "paper"){
            console.log("You Lost! Paper beats Rock");
            return "computer";
        } else /*scissor case */{
            console.log("You won! Rock beats scissor");
            return "human";
        }
    } else if (humanChoice === "paper"){
        if (computerChoice === "rock"){
            console.log("You Won! Paper beats Rock");
            return "human";
        } else if (computerChoice === "paper"){
            console.log("Its a tie");
            return "tie";
        } else /*scissor case */{
            console.log("You Lost! Scissor beats paper");
            return "computer";
        }
    } else if (humanChoice === "scissor"){
        if (computerChoice === "rock"){
            console.log("You Lost! Rock beats scissor");
            return "computer";
        } else if (computerChoice === "paper"){
            console.log("You Won! Scissors beats paper");
            return "human";
        } else /*scissor case */{
            console.log("Its a tie");
            return "tie";
        }
    } else {
        console.log("Invalid Input. Please try again!");
    }
}

//This function sets up how the whole game will be played
function playGame(){
    
    let computerScore = 0;
    let humanScore = 0;
    let gamesPlayed = 0;

    while (gamesPlayed < 5){

        let result = playRound();

        if (result === "human"){
            humanScore++;
            gamesPlayed++;
        } else if(result === "computer"){
            computerScore++;
            gamesPlayed++;
        } else {
            gamesPlayed++;
        }
    }

    console.log("computer score : " + computerScore);
    console.log("human score : " + humanScore);
    console.log("games played : " + gamesPlayed);

    if(computerScore > humanScore){
        console.log("You Lost! Better luck next time. :(")
    } else if (humanScore > computerScore){
        console.log("Hurray! You won the game :D")
    } else {
        console.log("Its a tie game")
    }
}

playGame();
