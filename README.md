# Rock Paper Scissors Game

This is a simple Rock Paper Scissors game implemented in JavaScript. It allows the player to play against the computer and keeps track of wins, losses, and ties.

## How to Play

Let's immerse ourselves in the world of Rock Paper Scissors! Follow these steps to embark on the journey of excitement:

1. **Navigate to the Game**: Click on the following link to open the game in your web browser: 🎮 **[Play Rock Paper Scissors](https://charan-1904.github.io/RPS_Game/)**
   
2. **Choose Your Move**: Once the game loads, select your move by clicking on the corresponding button. Will you choose the mighty Rock, the versatile Paper, or the cunning Scissors? 🤔

3. **Challenge the Computer**: Watch as the computer, fueled by algorithms and randomness, selects its move in response to yours. 💻

4. **Reveal the Outcome**: Hold your breath as the game determines the winner. Will victory be yours, or will the computer emerge triumphant? The result will be displayed on the screen for all to see. 🏆

Prepare yourself for an exhilarating showdown of strategy and chance! Let the games begin! 🚀

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

