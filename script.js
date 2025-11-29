// console.log("Hello World, this is Rock-Paper-Scissors!");

function getComputerChoice() {
    const randomVal = Math.random();
    const choice = randomVal < 0.3333 ? "rock" : randomVal < 0.6666 ? "paper" : "scissors";
    return choice;
}

function getHumanChoice() {
    const userInput = prompt("Enter either rock, paper or scissors")
    const userChoice = userInput.toLowerCase();
    return userChoice;
}

let humanScore = 0;
let computerScore = 0;
let counter = 0;

function playRound(humanChoice, computerChoice) {
    const result =
        // 1. HUMAN CHOOSES ROCK
        humanChoice === "rock" ? (
            computerChoice === "rock" ? "Draw." :
                computerChoice === "paper" ? "Computer WINS! Paper covers Rock." :
                    "You WIN! Rock crushes Scissors." // computerChoice === "scissors"
        ) :

            // 2. HUMAN CHOOSES PAPER
            humanChoice === "paper" ? (
                computerChoice === "rock" ? "You WIN! Paper covers Rock." :
                    computerChoice === "paper" ? "Draw." :
                        "Computer WINS! Scissors cut Paper." // computerChoice === "scissors"
            ) :

                // 3. HUMAN CHOOSES SCISSORS (The final possibility, otherwise it's an invalid input)
                humanChoice === "scissors" ? (
                    computerChoice === "rock" ? "Computer WINS! Rock crushes Scissors." :
                        computerChoice === "paper" ? "You WIN! Scissors cut Paper." :
                            "Draw." // computerChoice === "scissors"
                ) :

                    // 4. INVALID INPUT (Fallback for when humanChoice is not "rock", "paper", or "scissors")
                    "Invalid input. Please choose rock, paper, or scissors.";

    function updateScores(roundResult) {
        if (roundResult.includes("You WIN!")) {
            humanScore += 1;
        } else if (roundResult.includes("Computer WINS!")) {
            computerScore += 1;
        }
        ++counter;
    }

    updateScores(result);
    console.log(result);
    return result;


}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


// function playGame (){
// let counter = 0;

// }

// playGame()

console.log(counter);

console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);