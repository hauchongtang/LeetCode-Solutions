const checkPossibility = (nums) => {
  const n = nums.length;
  let modify = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] > nums[i + 1]) {
      if (nums[i - 1] > nums[i + 1]) {
        nums[i + 1] = nums[i]
      }
      modify++;
    }
    if (modify > 1) return false;
  }
  return true;
}
