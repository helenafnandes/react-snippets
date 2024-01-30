'use strict';

// Selecting DOM elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0'); // current score
const current1El = document.querySelector('#current--1');
const diceEl  = document.querySelector('.dice');
const btnNew  = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;           // js will convert it to strings
diceEl.classList.add('hidden');     // hide dice at the beginning

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;         // state variable -> tells the condition of the system

const switchPlayer = function() {
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

// Rolling dice functionality
btnRoll.addEventListener('click', function() {

    if(playing) {
        // 1. Generate a random dice roll
        const diceNumber = Math.trunc(Math.random() * 6) + 1;

        // 2. Display dice with the rolled number
        diceEl.classList.remove('hidden');
        diceEl.src = `images/dice-${diceNumber}.png`

        // 3. Check for rolled 1: if true, switch player
        if(diceNumber !== 1){       // start with the case we are most interested in
            // Add dice to current score
            currentScore += diceNumber;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;

        } else {
            // Reset current score
            document.querySelector(`#current--${activePlayer}`).textContent = 0;
            currentScore = 0;
            // Switch player
            switchPlayer();
        }
    }
})

btnHold.addEventListener('click', function() {

    if(playing) {
        // Add current score to active player's score
        scores[activePlayer] += currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
        currentScore = 0;
        document.querySelector(`#current--${activePlayer}`).textContent = 0;

        // Check if player's score >= 100: if true, finish the game
        if(scores[activePlayer] >= 10){
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            
        } else{
            // Switch to next player
            switchPlayer();
        }
    }
})

btnNew.addEventListener('click', function() {
    playing = true;
})