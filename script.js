// Board and board positions variables
const board = document.querySelector('#board');
const position = board.querySelectorAll('.col');

// Player options variables
var playOne = document.getElementById('one-play-btn');
var playTwo = document.getElementById('two-play-btn');
console.log(playOne.textContent);
console.log(playTwo.textContent);

// Game score variable
var score = document.getElementById('score-btn');
console.log(score.textContent);

// Object for win positions
const wins = [
    {
        name: 'Top Row',
        positions: [ 'a1', 'b1', 'c1' ]
    },
    {
        name: 'Middle Row',
        positions: [ 'a2', 'b2', 'c2' ]
    },
    {
        name: 'Bottom Row',
        positions: [ 'a3', 'b3', 'c3' ]
    },
    {
        name: 'First Column',
        positions: [ 'a1', 'a2', 'a3' ]
    },
    {
        name: 'Second Column',
        positions: [ 'b1', 'b2', 'b3' ]
    },
    {
        name: 'Third Column',
        positions: [ 'c1', 'c2', 'c3' ]
    },
    {
        name: 'Diagonal Forward',
        positions: [ 'a3', 'b2', 'c1' ]
    },
    {
        name: 'Diagonal Backward',
        positions: [ 'a1', 'b2', 'c3' ]
    }
]

console.log(wins[0].positions);

// Event listeners for the player options and score buttons
playOne.addEventListener('click', function() {
    console.log('Player One button clicked')
    // Make  One Playerbutton active
    // Disable Two Players button
});
playTwo.addEventListener('click', function() {
    console.log('Player Two button clicked')
    // Make Two Players button active
    // Disable One Player button 
});
score.addEventListener('click', function() {
    console.log('Score button clicked')
});

// Event listener for board 
board.addEventListener('click', function(e) {
    // If no more plays show game results
    if (availablePositions.indexOf(e.target.textContent) === -1) {
        showResult()
    } else {
        // find position
        var play = availablePositions.indexOf(e.target.textContent);
        console.log(play);
        // Track the position and play
        trackPlay(play, e)
        // Update the board and player
        updatePosition(e)
    }
}); 
    

// Board positions array for tracking and managing plays
var availablePositions = Array.from(position, pos => pos.innerText);
// console.log(availablePositions);

// Player variable to keep track of moves
var firstPlay = true;

// Function to update board position and track plays
function updatePosition(e) {
    // event.stopPropagation();
    // check if position is available
    if (availablePositions.includes(e.target.textContent) === true) { 
        if (firstPlay === true) {
            // update value
            e.target.textContent = 'O';
            firstPlay = false;
        } else {
            e.target.textContent = 'X';
            firstPlay = true;
        }
    }
}

// Function to track positions
function trackPlay(play, e) {
    // Remove from availablePositions array
    availablePositions.splice(play, 1);
    console.log(availablePositions);
    // Add the play to either an O or X array
    var lastPlay = e.target.textContent
    // if (lastPlay === 'O') {
    //     var oPlays = [];
    //     oPlays.push(play)
    // }
    
    console.log(lastPlay)
    // After five moves have been made check for a win
    if (availablePositions.indexOf(e.target.textContent) <= 3) {
        // check for wins
    }
    
}

//******************************************************************************/
//******************************************************************************/
//*********** BELOW ARE NOTES AND OTHER FUNCTIONS TO ADD ... MAYBE LATER *******/

// Function to show result
function showResult() {
    // maybe this can go back in event listener section if not too much going on
}


// Function for setting one player option
function onePlayer() {

}

//Function for setting two players option
function twoPlayers() {
    
}
// Allow user to decide whether to play against computer or another person
//  2 - Code for two players first
//  3 - Code for one player against computer
//  4 - Check for efficiency (Is code DRY?)

// Prompt user to pick a square
//  1 - Prompt player 1 to pick a square
//  2 - When square is chosen display chosen game piece in the square
//  3 - Disable chosen squares from being picked
//  4 - Prompt player 2 to pick a square
//  5 - Display other game piece in chosen square
//  6 - Continue to disable chosen squares
//  NOTE: If playing computer #4 & #5 will be different logic


// After first user picks a square prompt second user to pick a square
// Or if second player is the computer pick strategicly after a second or 2
//  1 - See above steps ;)


// When either player has marked 3 squares in a row (vertically, horizontally,
// or diagonally) display a message indicating who won
//  1 - Display a message when either player wins
//  2 - The message should indicate who won
//  3 - Maybe include some animated confetti or celebratory animation
//  4 - When there is no winner (game is a scratch) indicate so in message


// If time permits keep track of overall score locally
//  1 - Need to look up how to do this from past lessons
//  2 - 

