// Get Computer choice
let computerChoice = '';

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;

    if (num == 1) {
        computerChoice = 'rock';
    } else if (num == 2) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
}

// Get player choice
let playerChoice = '';

function getPlayerChoice() {
    playerChoice = prompt("Choose: Rock, Paper, or Scissors: ").toString().toLowerCase();
}


function playRound(computerChoice, playerChoice) {
    if (computerChoice == 'rock' && playerChoice == 'scissors') {
        computerPoints++;
        return 'Computer wins!';
    } else if (computerChoice == 'paper' && playerChoice == 'rock') {
        computerPoints++;
        return 'Computer wins!';
    } else if (computerChoice == 'scissors' && playerChoice == 'paper') {
        computerPoints++;
        return 'Computer wins!';
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        playerPoints++;
        return 'Player wins!';
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        playerPoints++;
        return 'Player wins!';
    } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        playerPoints++;
        return 'Player wins!';
    } else {
        return 'Draw!';
    }
}

// Track points
let playerPoints = 0;
let computerPoints = 0;

function game() {
    while (playerPoints < 5 || computerPoints < 5) {
        getComputerChoice();
        getPlayerChoice();
        console.log(playRound(computerChoice, playerChoice));

        if (playerPoints == 5) {
            console.log(`Player wins the game! ${playerPoints} to ${computerPoints}`);
            break;
        } else if (computerPoints == 5) {
            console.log(`The computer wins the game! ${computerPoints} to ${playerPoints}`);
            break;
        }
    }
}