import nextCellState from './nextCellState.js'
import countAliveNeighbours from './countAliveNeighbours.js'

export default function nextBoard(currentBoard) {
  const newBoard = currentBoard.map((row, cellRow) =>
    row.map((cell, cellColl) =>
      nextCellState(
        cell,
        countAliveNeighbours(cellRow, cellColl, currentBoard),
      ),
    ),
  )
  return newBoard
}
