var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};




var check = function (str1, str2) {
  let n = str1.length;
  for (let i = 0; i < n; i++) {
    const ch1 = str1.charAt(i);
    const ch2 = str2.charAt(i);
    if (ch1 !== ch2) return false;
  }
  return true;
};

var strStr = function (haystack, needle) {
  const n = haystack.length;
  const nl = needle.length;
  if (nl > n) return -1;
  let k = 0;
  for (let i = 0; i < n; i++) {
    const ch = haystack.charAt(i);
    const nh = needle.charAt(0);
    if (ch === nh && i + nl <= n) {
      const subStr = haystack.substring(i, i + nl);
      if (check(subStr, needle)) return i;
    }
  }
  return -1;
};
