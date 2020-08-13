const longestCommonPrefix = (strs) => {
  // Empty array
  if (!strs.length) return "";
  var first = strs[0];

  // think of strs as a 2d array
  for (let i = 0; i < first.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      var next = strs[j];
      // Once similarity ends slice away the rest of the not similar array
      if (first[i] !== next[i]) {
        return next.slice(0, i)
      }
    }
  }
  return first; // if loop not terminated by if-statement all chars similar return first
}
