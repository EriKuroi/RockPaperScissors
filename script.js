window.addEventListener("DOMContentLoaded", function () {

    const variations = [
        'SP',
        'PR',
        'RS'
    ];

    function checkPlayerWin(playerSelection, computerSelection) {
        return variations.includes(playerSelection + computerSelection);
    }

    function computerPlay() {
        const all = ['R', 'S', 'P'];
        const randomChoice = Math.floor(Math.random() * 3);
        return all[randomChoice];
    }

    function draw() {
        document.getElementById("info").innerHTML = "Draw!";
    }

    function playerWin() {
        document.getElementById("info").innerHTML = "You Win!";
        const addPScore = (function () {
            let counter = Number(document.getElementById("playScore").innerHTML);
            return function () {
                counter += 1;
                return counter
            }
        })();
        document.getElementById("playScore").innerHTML = addPScore();
        document.getElementById('right').classList.add('winner');

    }

    function compWin() {
        document.getElementById("info").innerHTML = "You Lose!";
        const addCScore = (function () {
            let counter = Number(document.getElementById("compScore").innerHTML);
            return function () {
                counter += 1;
                return counter
            }
        })();
        document.getElementById("compScore").innerHTML = addCScore();
        document.getElementById('left').classList.add('winner');

    }

    function showPlayerChoice(playerSelection, computerSelection) {
        const all = ['R', 'S', 'P'];
        const variantP = all.indexOf(playerSelection);
        const variantC = all.indexOf(computerSelection);
        const imgSrc = ['./img/rock.png', './img/scissors.png', './img/paper.png'];
        const replacingPlayImage = () => document.getElementById("playImg").src = `${imgSrc[variantP]}`;
        const replacingCompImage = () => document.getElementById("compImg").src = `${imgSrc[variantC]}`;
        replacingPlayImage();
        replacingCompImage();

    }

    function resultGameShow(result) {
        document.getElementById("info").innerHTML = `The game is over! You ${result}!`;

    }

    function gameOver() {
        const cScore = document.getElementById('compScore').innerHTML;
        const pScore = document.getElementById('playScore').innerHTML;
        if (cScore == 5 || pScore == 5) {
            pScore == 5 ? resultGameShow('Won') : resultGameShow('Lost');
           // document.getElementById('field').classList.add('hidden');
            document.getElementById('buttonsArea').classList.remove('playButtons');
            document.getElementById('buttonsArea').classList.add('hidden');
            let again = document.createElement('button');
            again.id = 'again';
            again.textContent = 'Try again?';
            document.getElementById('all').appendChild(again);
            document.getElementById("again").addEventListener("click", function () {
                location.reload();
            });

        }

    }

    function playGame(playerChoose) {
        const playerSelection = playerChoose;
        const computerSelection = computerPlay();
        showPlayerChoice(playerSelection, computerSelection);

        if (playerSelection == computerSelection) {
            draw();
        } else checkPlayerWin(playerSelection, computerSelection) ? playerWin() : compWin();

        gameOver();
    }


    document.getElementById("rock").addEventListener("click", function () {
        document.getElementById('right').classList.remove('winner');
        document.getElementById('left').classList.remove('winner');
        playGame('R');
    });

    document.getElementById("sciss").addEventListener("click", function () {
        document.getElementById('right').classList.remove('winner');
        document.getElementById('left').classList.remove('winner');
        playGame('S');
    });
    document.getElementById("paper").addEventListener("click", function () {
        document.getElementById('right').classList.remove('winner');
        document.getElementById('left').classList.remove('winner');
        playGame('P');
    });
}, false);

