// QUERY SELECTING PLAYER TEXT, COMPUTER TEXT, RESULT TEXT AND BUTTONS
const scoreText = document.querySelector("#scoreText");
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choices = document.querySelectorAll(".choice");

const reset = document.querySelector("#reset");

// VARIABLES
let playerSelection
let computerSelection
let result

let playerPoint = 0;
let computerPoint = 0;

function resetGame() {
    playerPoint = 0;
    computerPoint = 0;
    scoreText.textContent = `Player: ${playerPoint} || Computer: ${computerPoint}`
}

choices.forEach(button => button.addEventListener("click", () => {
    playerSelection = button.textContent.toLowerCase();
    computerSelection = getComputerChoice();
    playerText.textContent = `Player: ${playerSelection.toUpperCase()}`;
    computerText.textContent = `Computer: ${computerSelection.toUpperCase()}`;
    resultText.textContent = playRound();
    scoreText.textContent = `Player: ${playerPoint} || Computer: ${computerPoint}`;
    if (playerPoint === 5) {
        resetGame();
        resultText.textContent = "You win the computer! Perhaps next time?";

    } else if (computerPoint === 5) {
        resetGame();
        resultText.textContent = "You lose!";
    }
}));

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
        case 1:
            return "rock";
        
        case 2:
            return "paper";
    
        case 3:
            return "scissors";
    }
};

function playRound() {
    if (playerSelection === computerSelection) {
        return "Tie!"
    } else
    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerPoint++
            return "You win!"
        } else {
            computerPoint++
            return "You lose!"
        }
    } else
    if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            playerPoint++
            return "You win!"
        } else {
            computerPoint++
            return "You lose!"
        }
    } else
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            playerPoint++
            return "You win!"
        } else {
            computerPoint++
            return "You lose!"
        }
    } else {
        return "Error!"
    }
};

reset.addEventListener("click", () => {
    resetGame()
    resultText.textContent = `Resetted. Select one of the buttons below to play.`
});