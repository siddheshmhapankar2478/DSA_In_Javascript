var kidsWithCandies = function (candies, extraCandies) {
  let max = candies[0];
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > max) {
      max = candies[i];
    }
  }
  return candies.map((candy) => (candy + extraCandies >= max ? true : false));
};
var kidsWithCandies1 = function (candies, extraCandies) {
  let max = candies[0];
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > max) {
      max = candies[i];
    }
  }
  const result = [];
  for (let i = 0; i < candies.length; i++) {
    result.push(candies[i] + extraCandies >= max);
  }
  return result;
};
var kidsWithCandies2 = function (candies, extraCandies) {
  let max = Math.max(...candies);
  const result = [];
  for (let i = 0; i < candies.length; i++) {
    result.push(candies[i] + extraCandies >= max);
  }
  return result;
};
kidsWithCandies([2, 3, 5, 1, 3], 3);
kidsWithCandies1([2, 3, 5, 1, 3], 3);
kidsWithCandies2([2, 3, 5, 1, 3], 3);
