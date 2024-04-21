var mySqrt = function (x) {
  const ans = Math.floor(Math.sqrt(x));
  return ans;
};

var mySqrt1 = function (x) {
  let ans = 0;
  for (let i = 1; i * i <= x; i++) {
    const square = i * i;
    if (square <= x) {
      ans = i;
    }
  }
  return ans;
};

var mySqrt2 = function (x) {
  let ans = 0;
  let start = 0,
    end = x;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const square = mid * mid;
    if (square === x) {
      start = mid + 1;
      ans = mid;
    } else {
      end = mid - 1;
    }
  }
  return ans;
};
console.log("Using Inbuilt Function= ", mySqrt(8));
console.log("Using Linear Search= ", mySqrt1(8));
console.log("Using Binary Search= ", mySqrt2(8));
