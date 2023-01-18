
let playerSelection = prompt("ROCHAMBEAU - ROCK PAPER SCISSORS GAME || Choose your weapon (type in rock, paper or scissors):").toLowerCase()
let computerSelection = getComputerChoice()

function getComputerChoice() {
    switch (Math.floor(Math.random() * 3) + 1) {
        case 1:
            return "rock"

        case 2:
            return "scissors"

        case 3:
            return "paper"
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "rock") {
            return "You've won!"
    } else
    if (playerSelection === "scissors" && computerSelection === "rock" ||
        playerSelection === "paper" && computerSelection === "scissors" ||
        playerSelection === "rock" && computerSelection === "paper") {
            return "You've lost!"
    } else
    if (playerSelection === "rock" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "paper") {
            return "Tie!"
    } else {
            return "Error!"
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection)
    }
}

console.log(playRound(playerSelection, computerSelection))

// playRound(playerSelection, computerSelection)