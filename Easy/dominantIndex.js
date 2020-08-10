const dominantIndex = (nums) => {
  var largest = nums[0];
  var index = 0;
  // Find largest int in array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i]
      index = i
    }
  }
  if (index === 0) return 0;
  for (let i = 0; i < nums.length; i++) {
    if (i === index) {
      continue;
    }
    if (largest < (nums[i] * 2)) {
      return -1
    }
  }
  return index
}
