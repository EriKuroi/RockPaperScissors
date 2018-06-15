const variations = [
    'SP',
    'PR',
    'RS'
];


function checkPlayerWin(playerSelection, computerSelection){
    return variations.includes(playerSelection+computerSelection);
}


function computerPlay() {
    const all = ['R', 'P', 'S'];
    const randomChoice = Math.floor(Math.random() * 3);
    return all[randomChoice];
   }
function draw() {
    console.log('Draw!')
}
function playerWin() {
    console.log('You Win!')
}
function compWin() {
    console.log('You lose!')
}

function playGame() {

    const playerSelection = window.prompt('Type Rock, Paper or Scissors.');
    const computerSelection = computerPlay();
    console.log(`comp ${computerSelection}, you ${playerSelection}`)
   if (playerSelection == computerSelection){
     draw();
   } else checkPlayerWin()? playerWin() : compWin()
}

playGame();

/*

function playRound(playerSelection, computerSelection) {
    let playerScore = 0;
    let compScore = 0;


    const playerSelShow = playerSelection.toUpperCase;


    const drawMessage = `Draw!`;


    if (playerSelShow == computerSelection) {
        return console.log(drawMessage);
    } else if (playerSelShow == 'R') {

        return computerSelection == 'S' ? playerWins() : compWins();

    } else if (playerSelShow == 'P') {
        if (computerSelection == 'R') {
            return playerWins();
        } else return compWins();
    } else if (playerSelShow == 'S') {
        if (computerSelection == 'P') {
            return playerWins();
        } else return compWins();
    } else console.log('Oops! Something went wrong. You was supposed to type Rock, Paper or Scissors.')

    function playerWins() {
        i++;
        ++playerScore;
        const winMessage = `You WIN! ${playerSelShow} beats ${computerSelection}. Score: ${playerScore} : ${compScore}`;
        console.log(winMessage);
    }

    function compWins() {
        i++;
        ++compScore;
        const loseMessage = `You LOSE! ${computerSelection} beats ${playerSelShow}. Score: ${playerScore} : ${compScore}`;
        console.log(loseMessage);
    }
}

let testScore = 0;

function test() {
    ++testScore;
    console.log(testScore);
}


/*
function game() {


    for (i = 0; i < 5;) {
        const playerSelection = window.prompt('Type Rock, Paper or Scissors.');
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }
    const endGameWinMessage = 'The game is over. You WON!'
    const endGameLoseMessage = 'The game is over. You LOSE!'
    if (playerScore > compScore) {
        console.log(endGameWinMessage);
    } else console.log(endGameLoseMessage);
}

game();
 */