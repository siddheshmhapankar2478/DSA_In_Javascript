var reverseWords = function (s) {
  s = s.trim();
  let arr = s.split(" ");
  arr = arr.filter((ele) => ele !== "");
  let start = 0,
    end = arr.length - 1;
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }
  s = arr.join(" ");
  return s;
};

var reverseWords1 = function (s) {
  s = s.trim();
  let arr = s.split(" ");
  arr = arr.filter((ele) => ele !== "");

  arr.reverse();
  s = arr.join(" ");
  return s;
};

reverseWords("a good   example");
reverseWords1("a good   example");
