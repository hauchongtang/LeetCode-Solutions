const arrayPairSum = (nums) => {
  // Sort in ascending order
  nums.sort((a, b) => a - b);
  var ans = [];
  // Traverse in twos
  for (let i = 0; i < nums.length; i += 2) {
    ans += nums[i];
  }
  return nums;
}