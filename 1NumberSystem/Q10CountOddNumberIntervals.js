var countOdds = function (low, high) {
  let count = 0;
  for (let i = low; i <= high; i++) {
    if (i % 2 === 1) {
      count++;
    }
  }
  return count;
};

var countOdds1 = function (low, high) {
  const diff = high - low + 1;
  if (diff % 2 === 1 && low % 2 === 1) {
    return Math.floor(diff / 2) + 1;
  }
  return Math.floor(diff / 2);
};

console.log("Answer= ", countOdds(3, 7));
console.log("Optmized= ", countOdds1(3, 7));
