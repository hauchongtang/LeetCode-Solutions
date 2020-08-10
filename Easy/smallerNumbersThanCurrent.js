const smallerNumbersThanCurrent = (nums) => {
  var i;
  var j;
  var ans = [];
  var counter = 0;
  for (i = 0; i < nums.length; i++) {
    for (j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i] && i !== j) {
        counter ++
      }
    }
    ans[i] = counter;
    counter = 0;
  }
  return ans;
}
