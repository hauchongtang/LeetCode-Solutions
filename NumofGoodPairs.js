const numIdenticalPairs = (nums) => {
  var i;
  var j;
  var counter = 0;
  for (i = 0; i < nums.length; i++) {
    for (j = 0; j < nums.length; j++) {
      if (nums[i] == nums[j] && (i < j)) {
        counter++
      }
    }
  }
  return counter;
}
