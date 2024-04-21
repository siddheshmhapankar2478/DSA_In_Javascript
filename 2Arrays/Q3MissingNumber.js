var missingNumber = function (nums) {
  const n = nums.length;
  let sum = 0;
  const actualSum = nums.reduce((acc, num) => acc + num);
  const sumOfN = (n * (n + 1)) / 2;
  return sumOfN - actualSum;
};

var missingNumber1 = function (nums) {
  const n = nums.length;
  const ans = nums.reduce((acc, num, index) => acc ^ num ^ index, n);
  return ans;
};

console.log("Answer= ", missingNumber([2, 0, 1]));
console.log("Using XOR= ", missingNumber1([2, 0, 1]));
