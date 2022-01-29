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

// Winning positions
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
    // find position
    var playIndex = availablePositions.indexOf(e.target.textContent);
    // console.log(playIndex);
    // Save selected value in variable for tracking the play
    var trackPosition = e.target.textContent;
    // Update the board and player
    updatePosition(e)
    // Track the position (playIndex) of the play and its text value (a1, b1, etc)
    trackPlay(playIndex, trackPosition, e)
    
}); 

// Array for board positions to track and manage plays
var availablePositions = Array.from(positions, pos => pos.innerText);

// Player variable to keep track of moves
var firstPlay = true;

// Function to update board position
function updatePosition(e) {
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

// Arrays for tracking plays to determine a win
const oPlays = [];
const xPlays = [];

// Function to track positions played
function trackPlay(playIndex, trackPosition, e) {
    
    // Variable for the updated value (O or X)
    var lastPlay = e.target.textContent;

    // Remove the position selected from availablePositions array
    availablePositions.splice(playIndex, 1);

    // If no more plays send scratch message
    if (availablePositions.length === 0) {
        let message = 'It\'s a Scratch!'
        showResult(message)
    }
    // Add the text value of selected position to either O or X array
    if (lastPlay === 'O') {
        oPlays.push(trackPosition);
    } else {
        xPlays.push(trackPosition);
    }
    // After five moves have been made check for a win
    if (availablePositions.length <= 4) {
        anyWins(oPlays, xPlays)
    }
}

// Function to check for a win
function anyWins(oPlays, xPlays) {
    // Loop through win groups
    for (const {groups} of wins) {
        // Compare O plays to win groups
        let resultO = groups.every(function (element) {
            return oPlays.includes(element)
        });
        // Compare X plays to win groups
        let resultX = groups.every(function (element) {
            return xPlays.includes(element)
        });
        // Send message depending on which player wins
        if (resultO === true) {
            let message = 'Player One Wins!'
            showResult(message);
        } else 
            if (resultX === true) {
                let message = 'Player Two Wins!'
                showResult(message);
            }
    }
}

// Function to show winner or scratch message
function showResult(message) {
    // maybe this can go back in event listener section if not too much going on
    let div = document.getElementById('message');
    let p = document.createElement("p");
    p.textContent = message
    div.appendChild(p);

}


// Function for setting one player option
function onePlayer() {

}

//Function for setting two players option
function twoPlayers() {
    
}
//###############################################################################
// FINAL TO DOs
//###############################################################################
// 1 - Need to stop additional plays when someone wins with positions still available
// 2 - Need to send message for deciding on one or two players
// 2 - One player random plays
// 3 - Play again button (probably change Score to this)
//      - clear board
//      - clear arrays (X & O)
//      - reinstate availablePositions array
// 4 - READme file
//###############################################################################
// If time permits ...
//###############################################################################
//  1 - Keep track of overall score locally
//      - Need to look up how to do this from past lessons
//  2 - Animation to strike through win
//  3 - Animation for confetti celebration on win OR a wamp wamp for scratch