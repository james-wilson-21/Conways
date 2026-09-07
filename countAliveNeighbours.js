import getNeighbours from "./getNeighbours.js"

export default function countAliveNeighbours (cellRow, cellColumn, board) {
  return getNeighbours(cellRow, cellColumn, board).reduce((acc, val) => acc + val)
}
