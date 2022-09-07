const score = document.getElementById('score');
console.log(score);
let scoreInt = 20;

let secretNumber = Math.floor(Math.random()*20+1);

const additionalInformation = document.getElementsByClassName('point')[0];

const bodyDiv = document.getElementsByClassName('grandfather')[0];

const hiddenNumber = document.getElementsByClassName('hidden')[0];

const highScore = document.getElementsByClassName('highscore')[0];

let biggestScore = 0;

let yourValue;

console.log(secretNumber)

const again = document.getElementsByClassName('again-button')[0];

const check = document.getElementsByClassName('check')[0];

again.addEventListener('click', ()=>{
    secretNumber = Math.floor(Math.random()*20+1);
    console.log(secretNumber);
    scoreInt = 20;
    displayMassage('Start guessing...', additionalInformation);
    displayScore(scoreInt);

    displayMassage('?', hiddenNumber);
    yourValue = '';
    bodyDiv.style.backgroundColor = 'rgba(7,11,23,0.95)';
    hiddenNumber.style.width = "25%";
});




check.addEventListener('click', ()=>{
    yourValue = +document.getElementsByClassName('your-number')[0].value;
if (scoreInt > 1){
    if (yourValue){
        if (yourValue === secretNumber){
            displayMassage('You WIN!', additionalInformation);

            bodyDiv.style.backgroundColor = 'green';
            displayMassage(`${secretNumber}`, hiddenNumber);
            hiddenNumber.style.width = "50%";

            if (biggestScore < scoreInt){
                biggestScore = scoreInt;
                displayMassage(`Highscore: ${biggestScore}`, highScore);
            }
        } else if (yourValue < secretNumber){
            displayMassage('Too low!', additionalInformation);
            scoreInt--;
            displayScore(scoreInt);
        } else if (yourValue > secretNumber){
            displayMassage('Too high!!', additionalInformation);
            scoreInt--;
            displayScore(scoreInt);
        }

    } else {
        displayMassage('There is no value!', additionalInformation);
        scoreInt--;
        displayScore(scoreInt);
    }
} else {
    displayMassage('You lose!', additionalInformation);
    displayMassage('Score: 0', score);
}

});




function displayMassage (message, box){
    box.innerText = `${message}`;
}

function displayScore (scoreInt){
    score.textContent = `Score: ${scoreInt}`
}
