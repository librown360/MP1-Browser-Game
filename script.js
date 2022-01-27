// Board and board positions variables
const board = document.querySelector('#board');
const positions = board.querySelectorAll('.col');

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
        groups: [ 'a1', 'b1', 'c1' ]
    },
    {
        name: 'Middle Row',
        groups: [ 'a2', 'b2', 'c2' ]
    },
    {
        name: 'Bottom Row',
        groups: [ 'a3', 'b3', 'c3' ]
    },
    {
        name: 'First Column',
        groups: [ 'a1', 'a2', 'a3' ]
    },
    {
        name: 'Second Column',
        groups: [ 'b1', 'b2', 'b3' ]
    },
    {
        name: 'Third Column',
        groups: [ 'c1', 'c2', 'c3' ]
    },
    {
        name: 'Diagonal Forward',
        groups: [ 'a3', 'b2', 'c1' ]
    },
    {
        name: 'Diagonal Backward',
        groups: [ 'a1', 'b2', 'c3' ]
    }
]

// console.log(wins[0].groups);

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
        var playIndex = availablePositions.indexOf(e.target.textContent);
        // console.log(playIndex);
        // Save selected value in variable for tracking the play
        var trackPosition = e.target.textContent;
        // Update the board and player
        updatePosition(e)
        // Track the position (playIndex) of the play and its text value (a1, b1, etc)
        trackPlay(playIndex, trackPosition, e)
    }
}); 
    

// Board positions array for tracking and managing plays
var availablePositions = Array.from(positions, pos => pos.innerText);
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
// arrays for tracking the plays to determine any wins
const oPlays = [];
const xPlays = [];

// Function to track positions
function trackPlay(playIndex, trackPosition, e) {
    
    // Variable for the updated value (O or X)
    var lastPlay = e.target.textContent;

    // Remove the position selected from availablePositions array
    availablePositions.splice(playIndex, 1);
    // console.log(availablePositions);

    // Add the text value of the selected position to either an O or X array
    if (lastPlay === 'O') {
        oPlays.push(trackPosition);
    } else {
        xPlays.push(trackPosition);
    }
    // After five moves have been made check for a win
    if (availablePositions.length <= 4) {
        anyWins(oPlays, xPlays)
    }
    // console.log(trackPosition);
    // console.log(lastPlay);
}


function anyWins(oPlays, xPlays) {
    console.log(oPlays);
    console.log(xPlays);
    // check for wins
    
    wins.forEach(win => {
        // console.log(win.groups)

        if (oPlays.includes(win.groups) === true) {     // NEED TO START HERE 
            console.log('Player One Wins!!')            // SEE Replit test
        } else                                          
            if (xPlays === win.groups) {                // use .every & .includes together
                console.log('Player Two Wins!!')
            }
        });
    
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

