const playerRock = document.getElementById('player-rock');
const playerPaper = document.getElementById('player-paper');
const playerScissors = document.getElementById('player-scissors');
const computerRock = document.getElementById('computer-rock');
const computerPaper = document.getElementById('computer-paper');
const computerScissors = document.getElementById('computer-scissors');
const resultText = document.getElementById('result-id');



const computerPlay = () => {
    const choices = Math.floor(Math.random() * 3);

    switch (choices) {
        case 0:
            computerRock.style.backgroundColor = '#C4C4C4';    
        return 'rock';
            break;
        case 1:
            computerPaper.style.backgroundColor = '#C4C4C4';
            return 'paper';
            break;
        case 2:
            computerScissors.style.backgroundColor = '#C4C4C4';
            return 'scissors';
            break;
    }
}

const rockPaperScissors = (playerSelection, computerPlay) =>{
    if (playerSelection === 'rock' && computerPlay === 'scissors') {
        resultText.style.color = 'rgb(25, 170, 25)';
        return 'You win!';
    } else if (playerSelection === 'rock' && computerPlay === 'paper') {
        resultText.style.color = 'rgb(202, 29, 29)'
        return 'You lose!';
    } else if (playerSelection === 'paper' && computerPlay === 'rock') {
        resultText.style.color = 'rgb(25, 170, 25)';
        return 'You win!';
    } else if (playerSelection === 'paper' && computerPlay === 'scissors') {
        resultText.style.color = 'rgb(202, 29, 29)'
        return 'You lose!';
    } else if (playerSelection === 'scissors' && computerPlay === 'paper') {
        resultText.style.color = 'rgb(25, 170, 25)';
        return 'You win!';
    } else if (playerSelection === 'scissors' && computerPlay === 'rock') {
        resultText.style.color = 'rgb(202, 29, 29)'
        return 'You lose!';
    } else if (playerSelection === computerPlay) {
        resultText.style.color = 'rgb(22, 19, 19)'
        return 'Draw!';
    }
}

const reset = () => {
    resultText.style.visibility = 'hidden';
    playerRock.style.removeProperty('background-color');
    playerPaper.style.removeProperty('background-color');
    playerScissors.style.removeProperty('background-color');
    computerRock.style.removeProperty('background-color');
    computerPaper.style.removeProperty('background-color');
    computerScissors.style.removeProperty('background-color');
}

const playerRockClick = () => {
    reset();
    playerRock.style.backgroundColor = '#C4C4C4';
    const computerSelection = computerPlay();
    const result = rockPaperScissors('rock', computerSelection);
    resultText.innerHTML = result;
    resultText.style.visibility = 'visible';
}

const playerPaperClick = () => {
    reset();
    playerPaper.style.backgroundColor = '#C4C4C4';
    const computerSelection = computerPlay();
    const result = rockPaperScissors('paper', computerSelection);
    resultText.innerHTML = result;
    resultText.style.visibility = 'visible';
}

const playerScissorsClick = () => {
    reset();
    playerScissors.style.backgroundColor = '#C4C4C4';
    const computerSelection = computerPlay();
    const result = rockPaperScissors('scissors', computerSelection);
    resultText.innerHTML = result;
    resultText.style.visibility = 'visible';
}
