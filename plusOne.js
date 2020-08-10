const plusOne = (digits) => {
  position = digits.length - 1;
  while (position >= 0 && digits[pos] === 9) {
    digits[pos] = 0;
    pos --;
  }
  if (pos < 0) {
    digits.unshift(1);
  } else {
    digits[pos] += 1;
  }
  return digits;
}
