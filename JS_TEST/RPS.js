function getComputerChoice(){
    let random = Math.floor(Math.random() * 101);
    if (random <= 33){
        return "rock";
    }else if(random <= 66){
        return "scissor";
    }else{
        return "paper";  
    }
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == computerSelection){
        return "Draw";
    }else if (playerSelection == "rock" && computerSelection == "paper"){
        return "You Lose! Paper beats Rock";
    }else if (playerSelection == "rock" && computerSelection =="scissor"){
        return "You Win! Rock beats Scissor";
    }
    else if (playerSelection == "paper" && computerSelection =="rock"){
        return "You Win! Paper beats Rock";
    }else if (playerSelection == "paper" && computerSelection =="scissor"){
        return "You Lose! Scissor beats Paper";
    }
    else if (playerSelection == "scissor" && computerSelection =="rock"){
        return "You Lose! Rock beats Scissor";
    }else if (playerSelection == "scissor" && computerSelection =="paper"){
        return "You Win! Scissor beats Paper";
    }else{
        return "Not a valid input!"
    }
}

function game(){
    let player = 0;
    let com = 0;
    for(let i = 0; i<5; i++){
        let playerSelection = prompt("Give me ROCK, PAPER or SCISSOR!");
        playerSelection = playerSelection.toLowerCase();
        const computerSelection = getComputerChoice();
        let score = playRound(playerSelection, computerSelection);
        if(score.slice(0,5) == "You W"){
            player++;
        }else if(score.slice(0,5) == "You L"){
            com++;
        }
        console.log(score);
    }

    console.log("Player Score: " + player, "Com Score: " + com);
    if(player < com){
        console.log("Computer Won");
    }else if(player > com){
        console.log("You Won");
    }else{
        console.log("NOBODY WON");
    }
}
game();
