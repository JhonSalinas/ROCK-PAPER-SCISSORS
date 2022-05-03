
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
        ++winScore;
        return "You Win! Paper beats Rock";
    }else if(playerSelection=="paper" && computerSelection=="scissors"){
        return "You Lose! Paper not beats Scissors";
    }
    if(playerSelection=="scissors" && computerSelection=="paper"){
        ++winScore;
        return "You Win! Scissors beats Paper";
    }else if(playerSelection=="scissors" && computerSelection=="rock"){
        return "You Lose! Scissors not beats Rock";
    }
    //recursivity
    if(playerSelection==computerSelection){
        return playRound(playerSelection,computerPlay());
    }
}

//for score
let countGames = 0;
let winScore = 0;

//for UI

const bttns = document.querySelectorAll('button');

bttns.forEach((e) => e.addEventListener('click',() => {
    if(countGames == 5) {
        console.log(winScore>2?'you Win':'you Lose');
        return;
    };
    countGames++;
    const game = playRound(e.textContent,computerPlay());
    document.querySelector('div.score').textContent = `in this round ${game}, and your score is: ${winScore} wins with ${countGames-winScore} loses in ${countGames} rounds`
}));

//game with UI

function gameUi(){
    //let gameRounds = prompt("choose the game's rounds",5);

        playerSelection = prompt("choose between: rock, paper or scissors").toLowerCase();
        if(playerSelection == "paper" || playerSelection == "rock" || playerSelection == "scisors"){
            alert(playRound(playerSelection, computerPlay()));
        }else{
            i--;
            alert("your input not its valid, please only use: rock, paper or scissors");
        }

    alert(`your score is: ${winScore} wins, ${gameRounds - (winScore + tiedScore)} loses and ${tiedScore} tieds`);
}