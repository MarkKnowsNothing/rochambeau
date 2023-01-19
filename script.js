function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie!"
    } else
    if (computerSelection === "rock") {
        return (playerSelection === "paper") ? "You win!" : "You lose!"
    } else
    if (computerSelection === "paper") {
        return (playerSelection === "scissors") ? "You win!" : "You lose!"
    } else
    if (computerSelection === "scissors") {
        return (playerSelection === "rock") ? "You win!" : "You lose!"
    } else {
        return "Error!"
    }
}

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

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("ROCHAMBEAU - ROCK PAPER SCISSORS GAME || Choose your weapon (type in rock, paper or scissors). You have " + (5 - i) + " times left.").toLowerCase()
        let computerSelection = getComputerChoice()

        playRound(playerSelection, computerSelection)

        console.log(`Round ${i + 1}:`)
        console.log(`Player: ${playerSelection}`)
        console.log(`Computer: ${computerSelection}`)
        console.log(playRound(playerSelection, computerSelection))
        
    }
}

console.log(game())