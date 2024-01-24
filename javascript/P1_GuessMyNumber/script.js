'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let guessedNumbers = [];
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '??';
    document.querySelector('body').style.backgroundColor = '#222222';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
})

document.querySelector('.check').addEventListener('click', function() {
    let guess = Number(document.querySelector('.guess').value);

    if (true){
    //if (!guessedNumbers.includes(guess)){
        guessedNumbers.push(guess);
        
        /*
        if the button is clicked but there is no value on the input field, it will get
        a 0, which is a falsy value.
        */

        // When input is empty
        if(!guess){         
            displayMessage('⛔ No Number!');
        }

        else {

            // When player wins
            if (guess === secretNumber){
                displayMessage('🎉 You Win!!');
                document.querySelector('.number').textContent = secretNumber;
                document.querySelector('body').style.backgroundColor = '#60b347';
                document.querySelector('.number').style.width = '30rem';
                if (score > highscore){
                    highscore = score;
                }
                document.querySelector('.highscore').textContent = highscore;
            
            // When guess is wrong
            } else{
                score--;
                if(score > 0){
                    if (guess < secretNumber){
                        displayMessage('❌ Too Low.');
                    }
                    else if (guess > secretNumber){
                        displayMessage('❌ Too High.');
                    }
                }

                // When player looses
                else {
                    displayMessage('💥 You Loose.');
                }
            }
        }
    }
    else{
        displayMessage('Guess Already Tried.');
    }
    
    document.querySelector('.score').textContent = score;
})