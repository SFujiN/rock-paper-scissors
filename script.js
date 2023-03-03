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
const resetBtn = document.querySelector('#reset');
const resultDiv = document.querySelector('#result');
const playerChoiceDiv = document.querySelector('#player-choice-card');
const playerScoreDiv = document.querySelector('#player-card .score');
const computerChoiceDiv = document.querySelector('#computer-choice-card');
const computerScoreDiv = document.querySelector('#computer-card .score');
const playerImg = document.querySelector('#player-choice-img');
const computerImg = document.querySelector('#computer-choice-img');
let playerScore = 0;
let computerScore = 0;
let gameOver = false;

rockBtn.addEventListener('click', () => {
    if (gameOver) {
        return;
    }
    let computerChoice = getComputerChoice();
    let result = playRound('Rock', computerChoice);
    playerImg.src = './img/rock.png';
    computerImg.src = `./img/${computerChoice.toLowerCase()}.png`;
    if (result.split('!')[0] === 'You Win') {
        playerScoreDiv.textContent = ++playerScore;
    }
    if (result.split('!')[0] === 'You Lose') {
        computerScoreDiv.textContent = ++computerScore;
    }
    resultDiv.textContent = `${result}`;
    if (playerScore === 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            resultDiv.textContent = 'Game Over, Winner!';
        }
        else {
            resultDiv.textContent = 'Game Over, Loser...';
        }
        gameOver = true;
    }
});
paperBtn.addEventListener('click', () => {
    if (gameOver) {
        return;
    }
    let computerChoice = getComputerChoice();
    let result = playRound('Paper', computerChoice);
    playerImg.src = './img/paper.png';
    computerImg.src = `./img/${computerChoice.toLowerCase()}.png`;
    if (result.split('!')[0] === 'You Win') {
        playerScoreDiv.textContent = ++playerScore;
    }
    if (result.split('!')[0] === 'You Lose') {
        computerScoreDiv.textContent = ++computerScore;
    }
    resultDiv.textContent = `${result}`;
    if (playerScore === 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            resultDiv.textContent = 'Game Over, Winner!';
        }
        else {
            resultDiv.textContent = 'Game Over, Loser...';
        }
        gameOver = true;
    }
});
scissorsBtn.addEventListener('click', () => {
    if (gameOver) {
        return;
    }
    let computerChoice = getComputerChoice();
    let result = playRound('Scissors', computerChoice);
    playerImg.src = './img/scissors.png';
    computerImg.src = `./img/${computerChoice.toLowerCase()}.png`;
    if (result.split('!')[0] === 'You Win') {
        playerScoreDiv.textContent = ++playerScore;
    }
    if (result.split('!')[0] === 'You Lose') {
        computerScoreDiv.textContent = ++computerScore;
    }
    resultDiv.textContent = `${result}`;
    if (playerScore === 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            resultDiv.textContent = 'Game Over, Winner!';
        }
        else {
            resultDiv.textContent = 'Game Over, You Lose...';
        }
        gameOver = true;
    }
});

resetBtn.addEventListener('click', () => {
    playerImg.src = './img/default.png';
    computerImg.src = './img/default.png';
    playerScoreDiv.textContent = playerScore = 0;
    computerScoreDiv.textContent =  computerScore = 0;
    resultDiv.textContent = 'New Game!'
    gameOver = false;
});