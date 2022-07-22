const actions = ["rock","paper","scissors"];
let getRandomInt = (max)=>Math.floor(Math.random()*max);


function getComputerChoice(){
    return actions[getRandomInt(3)];
}

function playRound(playerSelection,computerSelection=getComputerChoice()){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === "rock" && computerSelection ==="scissors" ||playerSelection === "scissors" && computerSelection ==="paper" 
    ||playerSelection === "paper" && computerSelection ==="rock"){
        return (`You Win! ${playerSelection} beats ${computerSelection}`);
    } 
    else if(playerSelection === computerSelection){
        return(`Tie! ${playerSelection} equals ${computerSelection}`);
    }
    else{
        return (`You Lose! ${computerSelection} beats ${playerSelection}`);

    }
}

function game(){
    for(let i=0;i<5;i++){
        let input = prompt("Please enter your decision");
        alert(playRound(input));

    }
}
game()