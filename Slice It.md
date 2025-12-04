# Slice It!

Let's add some features to the game we started coding in class.

## Smaller Squares - Higher Score

Let's make the game a bit more challenging by generating the squares in different sizes. Smaller squares will be harder to slice and will award the player with a higher score.

1. In the `playTurn()` function,  generate a number between 3 and 6 and multiply it by 5. This will be the square's size - 15, 20, 25 or 30. Set the square's `width` & `height` to this size.
1. Save the size in a global variable - we will need it when calculating the new score.
1. Change the calculation of the score in `updateScore()` - Instead of adding one point for each square, add 5 points to the largest square (30x30), 10 points for the second largest (25x25) etc... The smallest square (15x15) should award the player with  20 points.
1. Add a `sliceCount` global variable to keep track of how many squares have been sliced. Use it to accelerate the game after every 10 slices.
1. Update `renderScore()` to show the `sliceCount` in the header next to the score.

## Add Poison Squares

About 20% of the squares will be "poison" - if the user slices them, he looses the game.

1. First, add a new `getRandomColor()` function which will return one color for regular squares (maybe try - `lightsteelblue`), and another (`red`) for poison squares. Make the function give a lower probability to poison squares with a chance of 20% *(You can generate a random number between 0 - 100 and make the square poison if the number is >= 80)*.
1. In `playTurn()`, use `getRandomColor()` to get the color for the new square.
1. In `onCellHovered(elCell)`, check the cell's color. If it's poison, call `endGame()`.
1. Write the `endGame()` function - it should:
    - Clear the game interval
    - Reset the score and slice counter
    - Show a message with `alert()`
    - Update the button text to - "**Play Again**"

## Styling
You can make the game look very different by removing the borders from the table and it's cells, and turning the squares into circles... It also makes the game a bit more challenging to play.
Try it, and try other styling options to generate a unique look for your game.

<h4 style="text-align: center;">Happy Coding :)</h4>