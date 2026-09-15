import createBoard from './createBoard.js'
import nextBoard from './nextBoard.js'
import displayBoard from './displayBoard.js'
import randomBoard from './randomBoard.js'

let isRunning = false

const startBtn = document.getElementById('start-btn')
const pauseBtn = document.getElementById('pause-btn')
const resetBtn = document.getElementById('reset-btn')
const sizeSelect = document.getElementById('grid-size')

const size = 50
const refreshInterval = 100

let board = randomBoard(createBoard(size))

function startGame() {
  if (isRunning) return
  isRunning = true
  startBtn.disabled = true
  pauseBtn.disabled = false
  gameLoop()
}

function pauseGame() {
  isRunning = false
  startBtn.disabled = false
  pauseBtn.disabled = true
  // if (anima)
}

function resetGame() {
  pauseGame()
  board = randomBoard(createBoard(size))
  displayBoard(board)
}

startBtn.addEventListener('click', startGame)
pauseBtn.addEventListener('click', pauseGame)
resetBtn.addEventListener('click', resetGame)
sizeSelect.addEventListener('change', updateSize)

// Instead of process.exit(), we save the timer ID to clear it later
const gameLoop = setInterval(() => {
  displayBoard(board)
  let theNextBoard = nextBoard(board)

  if (boardIsStable(board, theNextBoard)) {
    clearInterval(gameLoop) // Stops the timer safely in the browser
    console.log('Simulation stabilized.')
  }

  board = theNextBoard
}, refreshInterval)

function boardIsStable(thisBoard, thatBoard) {
  return JSON.stringify(thisBoard) === JSON.stringify(thatBoard)
}
