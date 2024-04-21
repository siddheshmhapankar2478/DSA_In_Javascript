var fib = function (n) {
  if (n === 0 || n === 1) return n;
  return fib(n - 1) + fib(n - 2);
};

var fib1 = function (n) {
  const arr = [];
  arr.push(0);
  arr.push(1);
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];
};

var fib2 = function (n) {
  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    const c = a + b;
    a = b;
    b = c;
  }
  return n <= 1 ? n : b;
};
console.log("Recursive fib", fib(4));
console.log("Memoized fib", fib1(4));
console.log("Optimized fib", fib2(4));
