function capitalize(str) {
    return str.slice(0,1).toUpperCase() + str.slice(1); 
}
function random(upper) {
    return Math.floor(Math.random() * upper);
}
function getComputerChoice() {
    return ['Rock','Paper','Scissors'][random(3)];
}

function playRound(playerSelection, computerSelection) {
    result = '';
    pMove = playerSelection.toLowerCase();
    cMove = computerSelection.toLowerCase();
    if (pMove === cMove) {
        result = 'Tie!';
    }
    else if ((pMove === 'rock' && cMove === 'scissors') ||
            (pMove === 'paper' && cMove === 'rock') ||
            (pMove === 'scissors' && cMove === 'paper')) {
        result = 'You Win! ' + capitalize(pMove) + ' beats ' + computerSelection;
    }
    else {
        result = 'You Lose! ' + computerSelection + ' beats ' + capitalize(pMove);
    }
    return result;
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Enter your choice (Rock, Paper, or Scissors): ');
        console.log(playRound(playerSelection, getComputerChoice()));
    }
}

game();