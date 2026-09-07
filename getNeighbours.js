import indicesAreOutOfBounds from './indicesAreOutOfBounds.js'

export default function getNeighbours (cellRow, cellColumn, board) {

  const neighbours = []

    for (let r = -1; r <= 1; r++) {
    for (let c = -1; c <= 1; c++) {
      if (r === 0 && c === 0) continue;

      const targetRow = cellRow + r;
      const targetCol = cellColumn + c;

      if(!indicesAreOutOfBounds(targetRow, targetCol, board)) neighbours.push(board[targetRow][targetCol]) 
    }
  }
  return neighbours

}
