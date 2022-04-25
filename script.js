
//for computer taking
function computerPlay() {
    const items = ["rock", "paper", "scissors"];
    const item = items[Math.floor(Math.random()*3)];
    return item;
}
// for comparation
const playerSelection = "rock".toLowerCase();
let computerSelection = computerPlay();

function playRound(playerSelection = playerSelection, computerSelection = computerSelection) {
    
    if(playerSelection=="rock" && computerSelection=="paper"){
        return "You Lose! Rock not beats Paper";
    }else if(playerSelection=="rock" && computerSelection=="scissors"){
        return "You Win! Rock beats Scissors";
    }
    if(playerSelection=="paper" && computerSelection=="rock"){
        return "You Win! Paper beats Rock";
    }else if(playerSelection=="paper" && computerSelection=="scissors"){
        return "You Lose! Paper not beats Scissors";
    }
    if(playerSelection=="scissors" && computerSelection=="paper"){
        return "You Win! Scissors beats Paper";
    }else if(playerSelection=="scissors" && computerSelection=="rock"){
        return "You Lose! Scissors not beats Rock";
    }
}
//output
console.log(playRound(playerSelection,computerSelection));