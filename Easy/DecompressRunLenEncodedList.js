const decompressRLElist = (nums) => {
  var ans = [];
  for (let i = 0; i < nums.length; i++) {
    var freq = nums[2 * i];
    var val = nums[2 * i + 1];
    while (freq -- > 0) {
      ans.push(val);
    }
  }
  return ans;
}
