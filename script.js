// Player options variables
var playOne = document.getElementById('player-options').firstElementChild.firstChild.textContent;
var playTwo = document.getElementById('player-options').lastElementChild.firstChild.textContent;
console.log(playOne);
console.log(playTwo);

// Game piece options variables
var chooseX = document.getElementById('game-pieces').firstElementChild.firstChild.textContent;
var chooseO = document.getElementById('game-pieces').lastElementChild.firstChild.textContent;
console.log(chooseX);
console.log(chooseO);

// Game score variable
var score = document.getElementById('score-card');
console.log(score.innerText);

// Allow user to decide whether to play against computer or another person
//  2 - Code for two players first
//  3 - Code for one player against computer
//  4 - Check for efficiency (Is code DRY?)

// Allow user to pick game piece (X or O)
//  1 - Prompt player 1 to choose game piece
//  2 - Assign chosen game piece to player 1 and unchosen to player 2 (or sys)


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

