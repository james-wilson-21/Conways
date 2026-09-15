import createBoard from './createBoard.js'
import nextBoard from './nextBoard.js'
import displayBoard from './displayBoard.js'
import randomBoard from './randomBoard.js'

let isRunning = false
let intervalId = null

const startBtn = document.getElementById('start-btn')
const pauseBtn = document.getElementById('pause-btn')
const resetBtn = document.getElementById('reset-btn')
const sizeSelect = document.getElementById('grid-size')
const boardContainer = document.getElementById('board-container')

let size = 50
const CELL_SIZE = 12
const refreshInterval = 100

let board = randomBoard(createBoard(size))

displayBoard(board)

function startGame() {
  if (isRunning) return
  isRunning = true
  startBtn.disabled = true
  pauseBtn.disabled = false

  intervalId = setInterval(() => {
    let theNextBoard = nextBoard(board)
    displayBoard(theNextBoard)

    if (boardIsStable(board, theNextBoard)) {
      pauseGame()
      console.log('Simulation stabilized')
    }
    board = theNextBoard
  }, refreshInterval)
}

function pauseGame() {
  isRunning = false
  startBtn.disabled = false
  pauseBtn.disabled = true

  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}

function resetGame() {
  pauseGame()
  board = randomBoard(createBoard(size))
  displayBoard(board)
}

function updateSize(event) {
  size = parseInt(event.target.value, 10)

  boardContainer.style.width = `${size * CELL_SIZE}px`
  boardContainer.style.height = `${size * CELL_SIZE}px`
  boardContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  boardContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`

  resetGame()
}

startBtn.addEventListener('click', startGame)
pauseBtn.addEventListener('click', pauseGame)
resetBtn.addEventListener('click', resetGame)
sizeSelect.addEventListener('change', updateSize)

function boardIsStable(thisBoard, thatBoard) {
  return JSON.stringify(thisBoard) === JSON.stringify(thatBoard)
}
