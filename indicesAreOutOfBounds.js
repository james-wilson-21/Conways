import isOutOfBounds from './isOutOfBounds.js'

export default function indicesAreOutOfBounds (rowIndex, columnIndex, array) {
  return isOutOfBounds(rowIndex, array) || isOutOfBounds(columnIndex, array)
}

