const rock = document.querySelector("#Rock");
const paper = document.querySelector("#Paper");
const scissors = document.querySelector("#Scissors");
const scoreboard = document.querySelector("#Scoreboard");
const container = document.querySelector("#container");

let humanScore = 0;
let computerScore = 0;
let draw = 0;
let counter = 5;

function getComputerChoice() {
    const randomVal = Math.random();
    const choice = randomVal < 0.3333 ? "rock" : randomVal < 0.6666 ? "paper" : "scissors";
    return choice;
}

function getHumanChoice(value) {
    return value;
}

container.addEventListener("click", (e) => {

    target = e.target.id;
    switch (target) {
        case "Rock":
            playGame()
            console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore} , Draw: ${draw}`);
            break;

        case "Paper":
             playGame()
            console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore} , Draw: ${draw}`);
            break;

        case "Scissors":
             playGame()
            console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore} , Draw: ${draw}`);
            break;

        default:
            console.log("Press a button")
    }


})

function playRound(humanChoice, computerChoice) {
    const result =
        // 1. HUMAN CHOOSES ROCK
        humanChoice === "Rock" ? (
            computerChoice === "rock" ? "Draw." :
                computerChoice === "paper" ? "Computer WINS! Paper covers Rock." :
                    "You WIN! Rock crushes Scissors." // computerChoice === "scissors"
        ) :

            // 2. HUMAN CHOOSES PAPER
            humanChoice === "Paper" ? (
                computerChoice === "rock" ? "You WIN! Paper covers Rock." :
                    computerChoice === "paper" ? "Draw." :
                        "Computer WINS! Scissors cut Paper." // computerChoice === "scissors"
            ) :

                // 3. HUMAN CHOOSES SCISSORS (The final possibility, otherwise it's an invalid input)
                humanChoice === "Scissors" ? (
                    computerChoice === "rock" ? "Computer WINS! Rock crushes Scissors." :
                        computerChoice === "paper" ? "You WIN! Scissors cut Paper." :
                            "Draw." // computerChoice === "scissors"
                ) :

                    // 4. INVALID INPUT (Fallback for when humanChoice is not "rock", "paper", or "scissors")
                    "Invalid input. Please choose rock, paper, or scissors.";

    function updateScores(roundResult) {
        if (roundResult.includes("You WIN!")) {
            ++humanScore;
        } else if (roundResult.includes("Computer WINS!")) {
            ++computerScore;
        } else {
            ++draw;
        }

    }

    updateScores(result);
    console.log(result);
    return result;
}

function playGame() {

    let humanSelection;
    humanSelection = getHumanChoice(target);
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

}





