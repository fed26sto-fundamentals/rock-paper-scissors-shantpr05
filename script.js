console.log("welcome to rockpaper scissors game");
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
// Function to get the computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to get the human's choice
function getHumanChoice() {
    let choice = prompt("Please enter rock, paper, or scissors:").toLowerCase();
    
    // Validate input
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }

    return choice;
}

// Function to play a single round
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();  // Ensure case-insensitivity

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both choose ${humanChoice}.`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`);
    }
}

// Function to play a 5-round game

    // Loop to play 5 rounds
    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}:`);
        let humanChoice = getHumanChoice();  // Get the human player's choice
        let computerChoice = getComputerChoice();  // Get the computer's choice
        playRound(humanChoice, computerChoice);  // Play a single round
        console.log(`Current Score -> Human: ${humanScore}, Computer: ${computerScore}\n`);
    }

    // Declare the final winner
    if (humanScore > computerScore) {
        console.log(`Congratulations! You won the game with a score of ${humanScore} to ${computerScore}!`);
    } else if (computerScore > humanScore) {
        console.log(`The computer won the game with a score of ${computerScore} to ${humanScore}. Better luck next time!`);
    } else {
        console.log(`The game is a tie with both scores at ${humanScore}.`);
    }
}

// Start the game
playGame();