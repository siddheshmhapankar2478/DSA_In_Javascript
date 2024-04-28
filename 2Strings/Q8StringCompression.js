var compress = function (chars) {
  let obj = {};
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] in obj) {
      obj[chars[i]]++;
    } else {
      obj[chars[i]] = 1;
    }
  }
  chars = "";
  Object.entries(obj).map(([key, value]) => {
    if (value === 1) {
      chars = chars + key;
    } else {
      chars = chars + key + value;
    }
  });
  chars;
  return chars.length;
};
compress(["a", "a", "b", "b", "c", "c", "c"]);
