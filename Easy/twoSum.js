const twoSum = (numbers, target) => {
  var ans = [];
  var i = 0;
  var j = numbers.length - 1;
  while (i < j) {
    let sum = numbers[i] + numbers[j];
    if (sum === target) {
      ans.push(i + 1, j + 1);
    }
    if (sum < target) {
      i++
    }
    else j--
  }
  return ans;
}