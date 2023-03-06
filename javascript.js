let computerScore = 0;
let playerScore = 0;

//function game(playRound) {

    

  //  let computerSelection = getComputerChoice(randomNumber);
 //   let playerSelection = 

//    console.log(playerSelection);
    
    function getComputerChoice() {
        let randomNumber = Math.floor(Math.random() * 3);
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


// UI

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const playerScoreDisp = document.getElementById('playerScoreDisp');
const computerScoreDisp = document.getElementById('computerScoreDisp');
const roundResults = document.getElementById('roundResults');
const gameOverMessage = document.getElementById('gameOverMessage');
const roundInfo = document.getElementById('roundInfo');

rockBtn.addEventListener('click', () => handleClick('rock'));
paperBtn.addEventListener('click', () => handleClick('paper'));
scissorsBtn.addEventListener('click', () => handleClick('scissors'));

function handleClick(playerSelection) {


    const computerSelection = getComputerChoice();
    roundResults.textContent = `${(playRound(computerSelection, playerSelection))}`;
    roundInfo.textContent = `The computer threw ${computerSelection}!`
    updateScore();
    gameOver();

}

function updateScore () {
    playerScoreDisp.textContent = `Player: ${playerScore}`;
    computerScoreDisp.textContent = `Computer: ${computerScore}`;
};

function gameOver () {
    if (playerScore === 5) {
        gameOverMessage.textContent = "You win the tournament! Congratulations!!";
    } else if (computerScore === 5) {
        gameOverMessage.textContent = "You lost. Try again!";
    } else {
        //continue
    }
}


        
 //       console.log(`The Computer threw ${computerSelection}!`);
    //    console.log(playRound(computerSelection, playerSelection));
  //      console.log(`Computer - ${computerScore}, Player - ${playerScore}`);

//}


//for (let i = 0; i < 5; i++) {
//    game();
//    if (i < 4) {
//        console.log("Next Game");
 //   } else {
//        if (computerScore < playerScore) {
//            console.log("You win the tournament!");
 //       } else if (computerScore > playerScore) {
 //           console.log("You lost the tournament to the Computer!");
 //       } else {
 //           console.log("The tournament is a tie! Try again");
//        }
 //       console.log("Game Over");
 //   }
//}

