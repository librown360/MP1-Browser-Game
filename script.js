// Board and board positions variables
const board = document.querySelector('#board');
const positions = board.querySelectorAll('.col');

// Player options variables
var playAgain = document.getElementById('replay-btn');
// var score = document.getElementById('score-btn');

// Game score variable
// var score = document.getElementById('score-btn');

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

// Event listener for the play again button
playAgain.addEventListener('click', function() {
    location.reload();
});
// score.addEventListener('click', function() {
//     console.log('Score button clicked')
    // Make Two Players button active
    // Disable One Player button 
// });

// Event listener for board
board.addEventListener('click', boardClick);

// Function for board click events
function boardClick(e) {
    // Find position selected
    var playIndex = availablePositions.indexOf(e.target.textContent);

    // Save selected value in variable for tracking the play
    var trackPosition = e.target.textContent;

    // Update the board and player
    updatePosition(e)

    // Track the position (playIndex) of the play and its text value (a1, b1, etc)
    trackPlay(playIndex, trackPosition, e)
}

// Array for board positions to track and manage plays
var availablePositions = Array.from(positions, pos => pos.innerText);

// Player variable to keep track of moves
var firstPlay = true;

// Function to update board position
function updatePosition(e) {
    // check if position is available
    if (availablePositions.includes(e.target.textContent) === true) { 
        if (firstPlay === true) {
            // update value and player
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
    
    // Remove the position selected from availablePositions array
    availablePositions.splice(playIndex, 1);

    // Variable for the updated value (O or X)
    var lastPlay = e.target.textContent;

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
        var resultO = groups.every(function (element) {
            return oPlays.includes(element)
        });
        // Compare X plays to win groups
        var resultX = groups.every(function (element) {
            return xPlays.includes(element)
        });
        // Remove board event listener if there is a win
        if ((resultO === true) || (resultX === true)) {
            board.removeEventListener('click', boardClick);
        }
        // Send appropriate winner message
        if (resultO === true) {
            var message = 'Player One Wins!';
            showResult(message);
        } else if (resultX === true) {
            var message = 'Player Two Wins!';
            showResult(message);
        }
    }
    // If no more plays and no one wins send scratch message
    if ((oPlays.length === 5) && (xPlays.length === 4) && 
        (resultO === false) && (resultX === false)) {
        let message = 'It\'s a Scratch!'
        showResult(message)
    }
}
// Function to show winner or scratch message
function showResult(message) {
    // Add message to div in a p element
    var div = document.getElementById('message');
    var p = document.createElement("p");
    p.textContent = message
    div.appendChild(p);
}