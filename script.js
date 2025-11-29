console.log("Hello World, this is Rock-Paper-Scissors!");

function getComputerChoice() {
    const randomVal = Math.random();
    const choice = randomVal < 0.3333 ? "rock": randomVal < 0.6666 ? "paper" : "scissors";
    return choice;
}

console.log(getComputerChoice());

function getHumanChoice(){
  const userInput = prompt("Enter either rock, paper or scissors") 
const userChoice = userInput.toLowerCase();
  return userChoice;
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice){

}