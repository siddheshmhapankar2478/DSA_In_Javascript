const sumOfN = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
};
console.log("sum", sumOfN(5));

const sumOfDigit = (num) => {
  let sum = 0;
  while (num > 0) {
    let lastDigit = num % 10;
    sum = sum + lastDigit;
    num = Math.floor(num / 10);
  }
  return sum;
};
console.log("digitSum", sumOfDigit(5348));

const numberOfDigit = (digit) => {
  if (digit < 0) digit = -digit;
  let count = 0;
  while (digit > 0) {
    digit = Math.floor(digit / 10);
    count++;
  }
  return count;
};
console.log("numberOfDigit", numberOfDigit(218));
