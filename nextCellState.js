import isOverPopulated from './isOverPopulated.js'
import isUnderPopulated from './isUnderPopulated.js'
import isRessurectable from './isRessurectable.js'

export default function nextCellState(cellState, neighbourCount) {
  if (!cellState) {
    if (isRessurectable(neighbourCount)) return true
  }

  if (isOverPopulated(neighbourCount) || isUnderPopulated(neighbourCount))
    return false
  return true
}
