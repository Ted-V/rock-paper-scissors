// Store RPS selection
let computerSelection = '';
let playerSelection = '';

// Generate CPU's selection
function getComputerSelection() {
    let num = Math.floor(Math.random() * 3) + 1;

    if (num == 1) {
        computerSelection = 'Rock!';
    } else if (num == 2) {
        computerSelection = 'Paper!';
    } else {
        computerSelection = 'Scissors!';
    }
}

// Track points
let playerPoints = 0;
let computerPoints = 0;

// Display elements
let scoreDisplay = document.getElementById('score-display');
let playerSelectionDisplay = document.getElementById('player-selection');
let computerSelectionDisplay = document.getElementById('computer-selection');

// Selection buttons
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

// Click any button to start a first-to-5 game
rock.addEventListener('click', function () {
    playerSelectionDisplay.textContent = 'Rock!';
    playerSelection = 'Rock!';
    game();
});

paper.addEventListener('click', function () {
    playerSelectionDisplay.textContent = 'Paper!';
    playerSelection = 'Paper!';
    game();
});

scissors.addEventListener('click', function () {
    playerSelectionDisplay.textContent = 'Scissors!';
    playerSelection = 'Scissors!';
    game();
});

// Core game logic
function game() {
    getComputerSelection();
    computerSelectionDisplay.textContent = computerSelection;
    playRound(computerSelection, playerSelection)
    checkForWin();
}

// Determine who to give a point
function playRound(computerSelection, playerSelection) {
    if (computerSelection == 'Rock!' && playerSelection == 'Scissors!') {
        computerPoints++;
        scoreDisplay.textContent = `${playerPoints} - ${computerPoints}`;
    } else if (computerSelection == 'Paper!' && playerSelection == 'Rock!') {
        computerPoints++;
        scoreDisplay.textContent = `${playerPoints} - ${computerPoints}`;
    } else if (computerSelection == 'Scissors!' && playerSelection == 'Paper!') {
        computerPoints++;
        scoreDisplay.textContent = `${playerPoints} - ${computerPoints}`;
    } else if (playerSelection == 'Rock!' && computerSelection == 'Scissors!') {
        playerPoints++;
        scoreDisplay.textContent = `${playerPoints} - ${computerPoints}`;
    } else if (playerSelection == 'Paper!' && computerSelection == 'Rock!') {
        playerPoints++;
        scoreDisplay.textContent = `${playerPoints} - ${computerPoints}`;
    } else if (playerSelection == 'Scissors!' && computerSelection == 'Paper!') {
        playerPoints++;
        scoreDisplay.textContent = `${playerPoints} - ${computerPoints}`;
    } else {
        scoreDisplay.textContent = `Draw! ${playerPoints} - ${computerPoints}`;
    }
}

// Check if win condition (5 points) is met
function checkForWin() {
    if (playerPoints == 5) {
        scoreDisplay.textContent = `You win! ${playerPoints} - ${computerPoints}.`;
        reset();
    } else if (computerPoints == 5) {
        scoreDisplay.textContent = `The computer wins the game! ${computerPoints} - ${playerPoints}.`;
        reset();
    }

}

// Reset the points for a new game to be played
function reset() {
    playerPoints = 0;
    computerPoints = 0;
}