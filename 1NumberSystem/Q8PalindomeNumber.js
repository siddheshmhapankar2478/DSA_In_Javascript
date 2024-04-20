var isPalindrome = function (x) {
  if (x < 0) return false;
  let reverse = 0,
    temp = x;
  while (temp > 0) {
    let lastDigit = temp % 10;
    reverse = reverse * 10 + lastDigit;
    temp = Math.floor(temp / 10);
  }
  return reverse === x;
};
