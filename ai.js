const actions = ["rock","paper","scissors"];
let getRandomInt = (max)=>Math.floor(Math.random()*max);


function getComputerChoice(){
    return actions[getRandomInt(3)];
}

function playRound(playerSelection,computerSelection=getComputerChoice()){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === "rock" && computerSelection ==="scissors" ||playerSelection === "scissors" && computerSelection ==="paper" 
    ||playerSelection === "paper" && computerSelection ==="rock"){
        return [`You Win! ${playerSelection} beats ${computerSelection}`,'player'];
    } 
    else if(playerSelection === computerSelection){
        return [`Tie! ${playerSelection} equals ${computerSelection}`,'tie'];
    }
    else{
        return [`You Lose! ${computerSelection} beats ${playerSelection}`,'computer'];

    }
}

function reset(buttons){
    const reset_button = document.querySelector('#reset-button');
    reset_button.style.display = 'block';
    buttons.forEach(btn => {if(btn.id !=='reset-button'){
        btn.disabled = true
    }} );
}

function handle_playerEvent(id,computerWin,playerWin,current,final){
    let text,winner;
    [text,winner] = playRound(id);
    if (winner === "computer"){
        computerWin +=1;
    }
    else if (winner === "player"){
        playerWin+=1;
    }

    let result = document.createElement('div');
    result.textContent = text;
    current.appendChild(result);
    final.textContent = `current result computer ${computerWin} : player ${playerWin}`;
    return [computerWin,playerWin]
}


function game(){
    // for(let i=0;i<5;i++){
    //     let input = prompt("Please enter your decision");
    //     alert(playRound(input));

    // }
    let playerWin = 0, computerWin = 0;
    const current_results = document.querySelector('#current-result');
    const final_results = document.querySelector('#final-result');

    const buttons = document.querySelectorAll('button');
    const reset_button = document.querySelector('#reset-button')
    buttons.forEach((button) => button.addEventListener('click',()=>{
        [computerWin,playerWin] = handle_playerEvent(button.id,computerWin,playerWin,current_results,final_results);
        if (computerWin==5 || playerWin ==5){
            reset(buttons);
        }
    }));
    reset_button.addEventListener('click',()=>{
        reset_button.style.display = 'none';
        buttons.forEach(btn => btn.disabled = false);
        playerWin =0,computerWin=0;
        current_results.textContent = '';
        final_results.textContent = '';
    });

}


game()