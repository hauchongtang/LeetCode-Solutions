// Given a matrix of M x N elements (M rows, N columns), 
// return all elements of the matrix in diagonal order 
// as shown in the below image. (zig-zag)

/*
- Upright & Downleft
(diagonals) 
scan = m + n - 1

even-index --> upright
var x = s < row ? s : row - 1;
var y = s < row ? 0 : s - (row - 1);

odd-index --> downleft
var x = s < col ? 0 : s - (col - 1);
var y = s < col ? s : col - 1;

*/
const findDiagonalOrder = (matrix) => {
  // Corner case check
  if (matrix.length === 0 || matrix[0].length === 0) {
    return [];
  }

  var rows = matrix.length;
  var cols = matrix[0].length;
  var result = [];
  var noOfScans = rows + cols - 1;

  var x; 
  var y; 
  var idx = 0;
  // Loop through all elements
  for (let i = 0; i < noOfScans; i++) {
    // Even handler up-right
    if (i % 2 === 0) {
      x = i < rows ? i : rows - 1;
      y = i < rows ? 0 : i - (rows - 1);
      while (x >= 0 && y < cols) {
        result[idx++] = matrix[x--][y++];
      }
    } else { // Odd handler down-left
      x = i < cols ? 0 : i - (cols - 1);
      y = i < cols ? i : cols - 1;
      while (x < rows && y >= 0) {
        result[idx++] = matrix[x++][y--];
      }
    }
  }
  return result;
}
