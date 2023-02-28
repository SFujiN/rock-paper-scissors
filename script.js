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
    let result = '';
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
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Enter your choice (Rock, Paper, or Scissors): ');
        let result = playRound(playerSelection, getComputerChoice());
        if (result.split('!')[0] === 'You Win') {
            playerScore++;
        }
        else if (result.split('!')[0] === 'You Lose') {
            computerScore++;
        }
        console.log(result);
        console.log(`playerScore: ${playerScore} | computerScore: ${computerScore}`);
    }
    if (playerScore > computerScore) {
        console.log(`Winner! You won ${playerScore} out of 5 games`);
    }
    else if (playerScore < computerScore) {
        console.log(`Loser! Computer won ${computerScore} out of 5 games`);
    }
    else {
        console.log(`Tie! You both won ${playerScore} out of 5 games`)
    }
}

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
let result = document.querySelector('#result');

rockBtn.addEventListener('click', () => {
    result.textContent = playRound('Rock', getComputerChoice());
});
paperBtn.addEventListener('click', () => {
    result.textContent = playRound('Paper', getComputerChoice());
});
scissorsBtn.addEventListener('click', () => {
    result.textContent = playRound('Scissors', getComputerChoice());
});