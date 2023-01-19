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
            return "Please type rock, paper and scissors only!"
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("ROCHAMBEAU - ROCK PAPER SCISSORS GAME || Choose your weapon (type in rock, paper or scissors). You have " + (5 - i) + " times left.").toLowerCase()
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

        playRound(playerSelection, computerSelection)

        console.log(playRound(playerSelection, computerSelection))
        
    }
}

console.log(game())

// playRound(playerSelection, computerSelection)