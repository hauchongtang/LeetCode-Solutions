const minSubArrayLen = (s, nums) => {
  var min = Number.MAX_VALUE;
  var left = 0;
  var sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    while (sum >= s) {
      min = Math.min(min, i + 1 - left);
      sum -= nums[left];
      left++
    }
  }
  return (min !== Number.MAX_VALUE ? min : 0);
}