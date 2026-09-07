import createBoard from './createBoard.js';
import nextBoard from './nextBoard.js';
import displayBoard from './displayBoard.js'
import randomBoard from './randomBoard.js';

const size = 50;
const refreshInterval = 100;

let board = randomBoard(createBoard(size));

// Instead of process.exit(), we save the timer ID to clear it later
const gameLoop = setInterval(() => {
  displayBoard(board);
  let theNextBoard = nextBoard(board);

  if (boardIsStable(board, theNextBoard)) {
    clearInterval(gameLoop); // Stops the timer safely in the browser
    console.log("Simulation stabilized.");
  }

  board = theNextBoard;
}, refreshInterval);


function boardIsStable(thisBoard, thatBoard) {
  return JSON.stringify(thisBoard) === JSON.stringify(thatBoard);
}


