export default function randomBoard(createBoard) {
  return createBoard.map(row => row.map(() => Math.random() > 0.5))
}