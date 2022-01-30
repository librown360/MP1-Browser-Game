## MP1-Browser-Game
>
> This was a project assignment for the Full Stack Development Bootcamp to demonstrate skills learned from classes on Front-End programming. The requirement was to build a browser based game that could be played by one or more players and one of those players would be able to win the game. The game I chose to build is Tic Tac Toe. 
>
### Inspiration
>
> My inspiration for picking this game for the project was so I would be able to complete the task and also spend most of my time on the logic that would make it work. At the beginning it seemed to be an easy pick. But, as I begin to put all the pieces together I discovered how well one has to be at giving instructions in order for the simplest task to work correctly. It was both fun and challenging to say the least. 
>
### How to Play
>
> To play this game you must have two players. Each player takes a turn picking a square on the nine square board. The first player's mark will be the letter O and the second player's mark will be the letter X. The objective of the game is to place your mark on the board in three consecutive positions and/or to prevent your opponent from doing the same. The first one to mark three positions in a row (or diagonal) is the winner. Often times, the game ends up in draw (or scratch as more commonly referred) so that there is no winner. 
>
### Technologies
>
> Technologies used for the front-end:
> 1. HTML
> 2. CSS
> 3. A bit of JavaScript
>
> Technologies used for the back-end:
> 1. JavaScript
>
### Outstanding Bugs
>
> The following are a couple of bugs I discovered while working on the development and they still requiring fixing.
> 1. There is a chance the first player could end up with two wins at once when the last position is played
>> * The positions are one diagonal and another across
>> * As O is the first play and only 9 positions exist it will have the last play if no wins have occurred until the last play
>> * The issue is the winning message will display twice
> 2. The board starts with position names in it instead of showing as hidden
>> * All the logic for determining the winner is wrapped up in these text contents
>> * At the beginning of development I thought I could hide them and when clicking make them appear
>> * There has got to be a way to do this but before I could figure that out time was up to turn the project in
>
### Future Functionality
>
> The following is my list of further functionality (including the bug fixes)
>> 1. I must definitely figure out how to remove the positions showing on the board
>> 2. Add some animation when a player wins such as:
>>    * drawing a line through the winning positions
>>    * sprinkling confetti over the board
>> 3. Add the ability to play against the computer
