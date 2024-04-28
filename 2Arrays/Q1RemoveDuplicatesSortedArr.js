var removeDuplicates = function (nums) {
  const n = nums.length;
  let k = 0;
  const ans = [];
  for (let i = 0; i < n; i++) {
    if (!ans.includes(nums[i])) {
      ans.push(nums[i]);
      nums[k++] = nums[i];
    }
  }
  return k;
};
var removeDuplicates1 = function (nums) {
  const n = nums.length;
  let k = 1;
  for (let i = 1; i < n; i++) {
    if (nums[i] != nums[i - 1]) {
      nums[k++] = nums[i];
    }
  }
  return k;
};

removeDuplicates([0, 1, 1, 1, 2, 2, 2, 2, 3, 4]);
removeDuplicates1([0, 1, 1, 1, 2, 2, 2, 2, 3, 4]);
