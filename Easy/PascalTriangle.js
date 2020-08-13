const generate = (numRows) => {
  // rows 1 and 2 have nothing above them
  var triangle = [[1], [1, 1]];
  
  // Isolated cases
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];
  if (numRows === 2) return triangle;

  // Helper function to generate new rows
  const generateRow = (triangle) => {
    // previous is last array element of triangle
    var previous = triangle[triangle.length - 1];
    // Start of every new row will be always one
    var newRow = [1];
    // Loop through triangle to obtain previous values
    for (let i = 0; i < previous.length - 1; i++) {
      // Find current
      var current = previous[i];
      // Find next
      var next = previous[i + 1];
      // For every loop, append the sum of current and next
      // to our newRow array
      newRow.push(current + next);
    }
    // push 1 to end of every row
    newRow.push(1);
    triangle.push(newRow);
    return triangle;
  }
  // generate numRows - 2 rows
  for (let i = 0; i < numRows - 2; i++) {
    generateRow(triangle);
  }
  return triangle;
}
