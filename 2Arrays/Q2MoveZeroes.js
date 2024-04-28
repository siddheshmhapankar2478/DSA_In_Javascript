var moveZeroes = function (nums) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) nums[k++] = nums[i];
  }
  while (k < nums.length) nums[k++] = 0;
  nums
  return nums;
};
moveZeroes([0, 10, 3, 0, 12]);
