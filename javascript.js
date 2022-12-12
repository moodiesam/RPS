let computerScore = 0;
let playerScore = 0;

function game(playRound) {

    let randomNumber = Math.floor(Math.random() * 3);

    let computerSelection = getComputerChoice(randomNumber);
    let playerSelection = prompt("Rock, Paper, Scissors, Shoot!").toLowerCase();


    function getComputerChoice() {
        if (randomNumber === 0) {
            return "rock";
        } else if (randomNumber === 1) {
            return "paper";
        } else {
            return "scissors";
        }
    }


    function playRound(computerSelection, playerSelection) {
        
        
        if (computerSelection == "rock" && playerSelection == "scissors") {
            computerScore++;
            return "You lose! Rock crushes Scissors!";
        } else if (computerSelection == "paper" && playerSelection == "rock") {
            computerScore++;
            return "You lose! Paper covers Rock!";
        } else if (computerSelection == "scissors" && playerSelection == "paper") {
            computerScore++;
            return "You lose! Scissors cut Paper!";
        } else if (computerSelection == "rock" && playerSelection == "paper") {
            playerScore++;
            return "You win! Paper covers Rock!";
        } else if (computerSelection == "paper" && playerSelection == "scissors") {
            playerScore++;
            return "You win! Scissors cut Paper!";
        } else if (computerSelection == "scissors" && playerSelection == "rock") {
            playerScore++;
            return "You win! Rock crushes Scissors!";
        } else if (computerSelection == playerSelection) {
            return "Tie game! Try again."
        } else {
            return "Didn't understand that selection..."
        }
    }

    
        
        console.log(`The Computer threw ${computerSelection}!`);
        console.log(playRound(computerSelection, playerSelection));
        console.log(`Computer - ${computerScore}, Player - ${playerScore}`);

}


for (let i = 0; i < 5; i++) {
    game();
    if (i < 4) {
        console.log("Next Game");
    } else {
        if (computerScore < playerScore) {
            console.log("You win the tournament!");
        } else if (computerScore > playRound) {
            console.log("You lost the tournament to the Computer!");
        } else {
            console.log("The tournament is a tie! Try again");
        }
        console.log("Game Over");
    }
}

