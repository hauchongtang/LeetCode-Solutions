const spiralOrder = (matrix) => {
  // Check empty
  if (matrix.length === 0 || matrix[0].length === 0) {
    return [];
  }

  // Initialize starting points
  var T = 0; // Top
  var B = matrix.length - 1; // Bottom
  var L = 0; // Left
  var R = matrix[0].length - 1; // Right

  // Start the traversal of given 2d array
  var ans = [];
  while (L <= R && T <= B) {
    // Left to Right 
    for (let i = L; i < R + 1; i++) {
      ans.push(matrix[T][i]);
    }
    T++ // Cross over to new bound ignore the ones that are alr traversed
    // Top to Bottom
    for (let i = T; i < B + 1; i++) {
      ans.push(matrix[i][R]);
    }
    R--
    // Right to left
    if (T <= B) {
      for (let i = R; i > L - 1; i--) {
        ans.push(matrix[B][i]);
      }
      B--
    }
    // Bottom to Top
    if (L <= R) {
      for (let i = B; i > T - 1; i--) {
        ans.push(matrix[i][L])
      }
      L++
    }
  }
  return ans;
}
