var reverseVowels = function (s) {
  let temp = "";
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) temp = temp + s[i];
  }
  let k = temp.length - 1;
  let reverse = "";
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) reverse = reverse + temp[k--];
    else reverse = reverse + s[i];
  }
  console.log(reverse);
  return reverse;
};
reverseVowels("hello");
