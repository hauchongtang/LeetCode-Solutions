const numJewelsInStones = (J, S) => {
  var i;
  var j;
  var counter = 0;
  for (i = 0; i < J.length; i++) {
    for (j = 0; j < S.length; j++) {
      if (J[i] === S[j]) {
        counter ++;
      }
    }
  }
  return counter;
}
