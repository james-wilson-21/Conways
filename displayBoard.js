
export default function displayBoard (board) {
  
  const container = document.getElementById('board-container')

  container.innerHTML = ''

  board.forEach(row => {
    row.map(cell => {
      const cellElement = document.createElement('div');
      cellElement.classList.add('cell');
      (cell ? cellElement.classList.add('alive'): cellElement.classList.add('dead'))
      container.appendChild(cellElement);
    })
})
}