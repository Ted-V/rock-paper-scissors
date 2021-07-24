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

function game() {
    getComputerChoice();
    getPlayerChoice();
}

function playRound(computerChoice, playerChoice) {
    if (computerChoice == 'rock' && playerChoice == 'scissors') {
        console.log('Computer wins!')
    } else if (computerChoice == 'paper' && playerChoice == 'rock') {
        console.log('Computer wins!')
    } else if (computerChoice == 'scissors' && playerChoice == 'paper') {
        console.log('Computer wins!')
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        console.log('Player wins!')
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        console.log('Player wins!')
    } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        console.log('Player wins!')
    } else {
        console.log('Draw!')
    }
}