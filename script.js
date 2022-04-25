const items = ["rock", "paper", "scissors"];
function computerPlay() {
    const item = items[Math.floor(Math.random()*3)];
    console.log(item);
}