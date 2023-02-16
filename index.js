// QUERY SELECTION
const scoreText = document.querySelector("#scoreText");
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choices = document.querySelectorAll(".choice");
const ruleHeader = document.querySelector("#ruleHeader");
const gameCtn = document.querySelector(".main__play-choices");
const reset = document.querySelector("#reset");

// VARIABLES
let playerSelection
let computerSelection
let result

let playerPoint = 0;
let computerPoint = 0;

// GAME
function resetGame() {
    playerPoint = 0;
    computerPoint = 0;
    scoreText.textContent = `You: ${playerPoint} || Dingle: ${computerPoint}`
    playerText.textContent = `You chose:`;
    computerText.textContent = `Dingle chose:`;
    reset.textContent = "";
} // reset game

choices.forEach(button => button.addEventListener("click", () => {
    playerSelection = button.id;
    computerSelection = getComputerChoice();
    playerText.textContent = `You chose: ${playerSelection.toUpperCase()}`;
    computerText.textContent = `Dingle chose: ${computerSelection.toUpperCase()}`;
    resultText.textContent = playRound();
    scoreText.textContent = `You: ${playerPoint} || Dingle: ${computerPoint}`;
    if (playerPoint === 5) {
        resultText.textContent = "Dingle will not destroy Github! You can challenge him if you dare...";
        reset.setAttribute("style", "display: block;");
        reset.textContent = "Challenge Dingle"
        gameCtn.setAttribute("style", "display: none;");
        ruleHeader.setAttribute("style", "display: none;");

    } else if (computerPoint === 5) {
        resultText.textContent = "Who will save humanity now... but wait, Dingle gives you another chance!";
        reset.setAttribute("style", "display: block;");
        reset.textContent = "Try again?";
        gameCtn.setAttribute("style", "display: none;");
        ruleHeader.setAttribute("style", "display: none;");
    }
})); // start the game when one of the buttons is clicked

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
}; // get random computer choice

function playRound() {
    if (playerSelection === computerSelection) {
        return "Tie match!";
    } else
    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerPoint++;
            return "You take the win, let's go!!! Paper beats rock.";
        } else {
            computerPoint++;
            return "Oh no, you've lost this match... Scissors beats paper.";
        };
    } else
    if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            playerPoint++;
            return "You're so lucky at this! Scissors beats paper.";
        } else {
            computerPoint++;
            return "Rock beats scissors. Try again, you got this!";
        };
    } else
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            playerPoint++;
            return "Will humanity lives another day? Rock beats scissors.";
        } else {
            computerPoint++;
            return "You've lost. Paper beats rock, give it another shot!";
        };
    } else {
        return "Oops... Something wrong happened. Please refresh the page.";
    };
}; // compare choices to return the winner

reset.setAttribute("style", "display: block;"); // initial display of reset button
reset.textContent = "Accept Dingle's Challenge";
gameCtn.setAttribute("style", "display: none;");
ruleHeader.setAttribute("style", "display: none;");

reset.addEventListener("click", () => {
    resetGame();
    ruleHeader.setAttribute("style", "display: block;");
    gameCtn.setAttribute("style", "display: block;");
    reset.setAttribute("style", "display: none;");
    resultText.textContent = "";
}); // add reset function to reset button