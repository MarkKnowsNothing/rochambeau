// CHECKS BOTH PLAYER'S INPUT TO SEE IF ONE WINS OR NOT

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie!"
    } else
    if (computerSelection === "rock") {
        if (playerSelection === "paper") {
            playerPoint++
            return "You win!"
        } else {
            computerPoint++
            return "You lose!"
        }
    } else
    if (computerSelection === "paper") {
        if (playerSelection === "scissors") {
            playerPoint++
            return "You win!"
        } else {
            computerPoint++
            return "You lose!"
        }
    } else
    if (computerSelection === "scissors") {
        if (playerSelection === "rock") {
            playerPoint++
            return "You win!"
        } else {
            computerPoint++
            return "You lose!"
        }
    } else {
        return "Error!"
    }
}

// GETTING A RANDOM COMPUTER CHOICE

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

// GAME FUNCTION

function game() {
    // Both players initial points
    playerPoint = 0
    computerPoint = 0

    // Loop for five turns
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt(`ROCHAMBEAU - ROCK PAPER SCISSORS GAME || Choose your weapon (type in rock, paper or scissors). You have ${5 - i} tries left.`).toLowerCase()
        let computerSelection = getComputerChoice()

        playRound(playerSelection, computerSelection)

        console.log(`Round ${i + 1}:`)
        console.log(`You: ${playerSelection}`)
        console.log(`Computer: ${computerSelection}`)
        console.log(playRound(playerSelection, computerSelection))
        console.log(`You: ${playerPoint / 2} || Computer: ${computerPoint / 2}`) // Here we have to divide by 2 because the points are added unintentionally 2 times  
    }

    // Checks final result to announce the winner
    if (playerPoint === computerPoint) {
        return "It's a tie game! (Press Refresh or Ctrl + R to try again)"
    } else
    if (playerPoint > computerPoint) {
        return "You won this game! Wanna try again? (Press Refresh or Ctrl + R to try again)"
    } else
    if (playerPoint < computerPoint) {
        return "The computer won this game! Try again next time? (Press Refresh or Ctrl + R to try again)"
    }
}

console.log(game())