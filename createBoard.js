export default function createBoard (size) {

  // Create Array of "size" and fill to allow iteration
  const board = Array(size).fill(null)
    board.forEach((_, rowIndex) => {
    // Create each row in the array and foreach it to set "0s"
    let row = Array(size).fill(0)
    // Pop it back in the board
    board[rowIndex] = row
  })
return board
}

