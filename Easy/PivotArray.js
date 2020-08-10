const pivotIndex = (nums) => {
  if (nums.length === 0) {
    return -1
  }
  var total = 0
  nums.forEach((element) => total += element)
  var leftSum = 0
  var rightSum = total
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      leftSum = 0
      rightSum = total - nums[i]
    } else {
      leftSum += nums[i - 1]
      rightSum -= nums[i]
    }
    if (leftSum === rightSum) {
      return i
    }
  }
  return -1
}
