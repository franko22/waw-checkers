# waw-checkers

To determine if a checker can slide into a square. 
For this decision we need to know which square we're checking, and the overall state of the board (to determine if the square is already occupied). 
The last is currently stored in a global variable, state, so we don't need to provide it to the function.
