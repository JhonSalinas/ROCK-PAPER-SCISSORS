
//for computer election

function computerPlay() {
    const items = ["rock", "paper", "scissors"];
    const item = items[Math.floor(Math.random()*3)];
    return item;
}

// for comparation

function playRound(playerSelection = playerSelection, computerSelection = computerSelection) {
    
    if(playerSelection=="rock" && computerSelection=="paper"){
        return "You Lose! Rock not beats Paper";
    }else if(playerSelection=="rock" && computerSelection=="scissors"){
        ++winScore;
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
    //
    if(playerSelection==computerSelection){
        ++tiedScore;
        return "tied Game";
    }
}

//for score

let winScore = 0;
let tiedScore = 0;

//game

function game(){
    let gameRounds = prompt("choose the game's rounds",1);
    for(let i = 0; i < gameRounds; i++ ){
        playerSelection = prompt("choose between: rock, paper or scissors").toLowerCase();
        if(playerSelection == "paper" || playerSelection == "rock" || playerSelection == "scisors"){
            alert(playRound(playerSelection, computerPlay()));
        }else{
            i--;
            alert("your input not its valid, please only use: rock, paper or scissors");
        }
    }
    alert(`your score is: ${winScore} wins, ${gameRounds - (winScore + tiedScore)} loses and ${tiedScore} tieds`);
}

game();