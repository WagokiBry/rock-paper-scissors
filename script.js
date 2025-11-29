console.log("Hello World, this is Rock-Paper-Scissors!");

function getComputerChoice() {
    const randomVal = Math.random();
    const choice = randomVal < 0.3333 ? "rock": randomVal < 0.6666 ? "paper" : "scissors";
    return choice;
}

console.log(getComputerChoice());

function getHumanChoice(){
  const userInput = prompt("Enter either rock, paper or scissors")  
}

getHumanChoice()