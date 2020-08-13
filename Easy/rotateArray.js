const rotate = (nums, k) => {
  // Reverse thrice 0 to nums.length - 1 ,0 to k - 1, k to nums.length - 1
  // [1, 2, 3, 4, 5, 6, 7] => [7, 6, 5, 4, 3, 2, 1] => [5, 6, 7, 4, 3, 2, 1] => [5, 6, 7, 1, 2, 3, 4]

  // Define a reverse array function
  const reverse = (start, end, arr) => {
    var temp = [];
    while (start < end) {
      temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++
      end--
    }
  }

  // Remember to account for negative integers
  if (k > nums.length) {
    k = k % nums.length;
  }

  // Start to reverse as shown in second comment
  reverse(0, nums.length - 1, nums);
  reverse(0, k - 1, nums);
  reverse(k, nums.length - 1, nums);
}