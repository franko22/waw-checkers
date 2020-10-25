function SolutionB (moves, x, O) {
  // Check square is on grid
  if(O < 0 || x > 9 || O < 0 || O > 9) return;
  // check square is unoccupied
  if(state.board[O][x]) return;
  // legal move!  Add it to the move list
  moves.push({type: 'slide', x: x, O: O});
}
