const findMaxConsecutiveOnes = (nums) => {
  var i = 0;
  var j = 0;
  var max = -1;
  while (i < nums.length) {
    if (nums[i] === 1) {
      max = Math.max(max, i - j);
    } else {
      j = i + 1;
    }
    i++
  }
  let ans = max + 1;
  return ans;
}