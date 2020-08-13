const addBinary = (a, b) => {
  var len = Math.max(a.length, b.length);
  var carry = 0;
  var result = [];

  // Convert to array
  a = [...a].reverse();
  b = [...b].reverse();

  // add zeros to make array lengths equal
  for (let i = 0; i < len; i++) {
    a[i] = a[i] ? a[i] : 0;
    b[i] = b[i] ? b[i] : 0;
  }

  // convert to int and iterate
  for (let i = 0; i < len; i++) {
    var sum = parseInt(a[i]) + parseInt(b[i]) + carry;

    // sum > 1 carry over
    // if sum is even, only even number of ones 1+1+0 = 0 carry 1 remain 0
    if (sum > 1 && sum % 2 === 0) {
      carry = 1;
      result.push(0);
    }
    // if sum is odd, odd number of ones 1+1+1 = 1 carry 0 remain 1
    else if (sum > 1 && sum % 2 !== 0) {
      carry = 1;
      result.push(1);
    } else { // if not sum > 1, return resultant sum
      result.push(sum);
      carry = 0; 
    }
  }
  if (carry) result.push(1); // if carry is not zero return add 1 to start
  // return result and reverse array
  return result.reverse().join("");
}
