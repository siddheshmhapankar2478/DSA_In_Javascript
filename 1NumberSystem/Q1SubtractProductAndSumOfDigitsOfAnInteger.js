var subtractProductAndSum = function (n) {
  let product = 1,
    sum = 0;
  while (n > 0) {
    const lastDigit = n % 10;
    sum = sum + lastDigit;
    product = product * lastDigit;
    n = Math.floor(n / 10);
  }
  return product - sum;
};
console.log("Answer =", subtractProductAndSum(2548));
