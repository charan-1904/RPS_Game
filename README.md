# Rock Paper Scissors Game

This is a simple Rock Paper Scissors game implemented in JavaScript. It allows the player to play against the computer and keeps track of wins, losses, and ties.

## How to Play

To play the game, simply open the link:https://charan-1904.github.io/RPS_Game/ in a web browser. Then, choose your move (Rock, Paper, or Scissors) by clicking on the corresponding button. The computer will randomly choose its move, and the result of the game will be displayed on the screen.

## Code Overview

The JavaScript code consists of the following functions:

### `pickcomputerMove()`

This function randomly selects a move for the computer. It generates a random number and assigns a move based on the value of the random number.

### `game(playerMove)`

This function represents a single round of the game. It takes the player's move as input, generates the computer's move, determines the result of the round, updates the score, and displays the result on the screen.

### `updateScore()`

This function updates the score displayed on the screen based on the current values stored in the `localStorage`.

### `score`

This variable stores the current score (number of wins, losses, and ties) in the `localStorage`. If no score is found in the `localStorage`, it initializes the score to zero.

## How to Contribute

If you would like to contribute to this project, feel free to fork the repository and submit a pull request with your changes.

