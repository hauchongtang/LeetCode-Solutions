// Using Arrays
const xorOperation = (n, start) => {
  var nums = [];
  var ans = 0;
  var i = 0;
  while (i < n) {
    nums.push(start + 2 * i)
    ans = ans ^ nums[i]
    i++
  }
  return ans;
}

// Without Arrays
const xorOperation = (n, start) => {
  var ans = 0;
  var i = 0;
  while (i < n) {
    ans = ans ^ (start + 2 * i)
    i++
  }
  return ans;
}
