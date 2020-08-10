const subtractProductAndSum = (n) => {
  const numStr = n.toString().split('')
  var product = numStr.reduce((a, b) => Number(a) * Number(b))
  var sum = numStr.reduce((a, b) => Number(a) + Number(b))
  return product - sum;
}
