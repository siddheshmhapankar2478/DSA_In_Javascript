var minimumSum = function (num) {
  let arr = [];
  while (num > 0) {
    let lastDigit = num % 10;
    arr.push(lastDigit);
    num = Math.floor(num / 10);
  }
  arr.sort();
  const num1 = arr[0] * 10 + arr[2];
  const num2 = arr[1] * 10 + arr[3];
  return num1 + num2;
};
console.log("Answer =", minimumSum(2548));

