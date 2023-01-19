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
    playerPoint = 0
    computerPoint = 0

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt(`ROCHAMBEAU - ROCK PAPER SCISSORS GAME || Choose your weapon (type in rock, paper or scissors). You have ${5 - i} times left.`).toLowerCase()
        let computerSelection = getComputerChoice()

        playRound(playerSelection, computerSelection)

        console.log(`Round ${i + 1}:`)
        console.log(`You: ${playerSelection}`)
        console.log(`Computer: ${computerSelection}`)
        console.log(playRound(playerSelection, computerSelection))
        console.log(`You: ${playerPoint / 2} || Computer: ${computerPoint / 2}`)  
    }

    if (playerPoint === computerPoint) {
        return "It's a tie game! (Press Refresh or Ctrl + R to try again)"
    } else
    if (playerPoint > computerPoint) {
        return "You've won this game! Wanna try again? (Press Refresh or Ctrl + R to try again)"
    } else
    if (playerPoint < computerPoint) {
        return "You've lost this game! Try again next time? (Press Refresh or Ctrl + R to try again)"
    }
}

console.log(game())