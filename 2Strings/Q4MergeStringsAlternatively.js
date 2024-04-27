var mergeAlternately = function (word1, word2) {
  const n1 = word1.length;
  const n2 = word2.length;
  let str = "";
  let i1 = 0,
    i2 = 0;
  for (let i = 0; i1 < n1 && i2 < n2; i++) {
    if (i % 2 === 0) {
      str = str + word1.charAt(i1++);
    } else {
      str = str + word2.charAt(i2++);
    }
  }
  while (i1 < n1) {
    str = str + word1.charAt(i1++);
  }
  while (i2 < n2) {
    str = str + word2.charAt(i2++);
  }
  console.log(str);
  return str;
};
mergeAlternately("abcd", "pq");
