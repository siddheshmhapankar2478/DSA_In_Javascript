var isPowerOfTwo = function (n) {
  if (n === 1) return true;
  if (n % 2 != 0 || n <= 0) return false;
  return isPowerOfTwo(Math.floor(n / 2));
};
var isPowerOfTwo1 = function (n) {
  return n === 0 || n === -2147483648 ? false : (n & (n - 1)) === 0;
};
console.log("Using REcursion= ", isPowerOfTwo(8));
console.log("Using Bit Manipulation= ", isPowerOfTwo1(8));
