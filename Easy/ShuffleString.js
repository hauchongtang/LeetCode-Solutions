const restoreString = (s, indices) => {
  var strArr = s.split("");
  var ansArr = [];
  var ans;
  var i = 0;
  for (i = 0; i < indices.length; i++) {
    ansArr[indices[i]] = strArr[i];
  }
  ans = ansArr.join("");
  return ans;
}
