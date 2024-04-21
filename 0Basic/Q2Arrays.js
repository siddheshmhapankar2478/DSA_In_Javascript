//Creating Array
const array = [
  1,
  7,
  true,
  "Siddhesh",
  { name: "Sidd", roll: 27, division: "A" },
  [8, 9, 10],
];
console.log(array);
const arr = new Array();

//Adding elements in Array
arr.push(1);
arr.push(3);
arr.push(4);
arr.push(2);
arr.push(5);
arr[7] = 24;
console.log(arr[6]);

//Removing last element of array
const arr1 = [1, 3, 4, 5, 7, 8, 9];
const lastElement = arr1.pop();
console.log(lastElement);

// adding element at the end of array
arr1.push(24);
console.log(arr1);

//Removing first element of array
const firstElement = arr1.shift();
console.log(firstElement);

// adding element at the start of array
arr1.unshift(0);
console.log(arr1);

//Traversing array
//Using for
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}
//Using foreach
arr1.forEach((ele, index) => {
  console.log(ele);
});
//Using forof
for (let ele of arr1) {
  console.log(ele);
}

const findElement = (arr, target) => {
  for (let ele of arr) {
    if (ele == target) return true;
  }
  return false;
};
console.log(findElement([1, 2, 9, 3, 7, 4, 5, 3, 6], 65));

//Array includes method
console.log([1, 2, 9, 3, 7, 4, 5, 3, 6].includes(5));

//Array Splice
//Add delete elements from specific index
//Orignal array is changed and deleted array of elements is returned in case of 0 elements []
const arr3 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(arr3);
arr3.splice(1, 3, 12, 15, 17, 18, 19);
console.log(arr3);

//Array Slice
//Takes specific subarray from an array
//Orignal array remains the same and dubarray is returned
console.log(arr3);
const tempArr = arr3.slice(1, 4);
console.log(tempArr);

//Shallow copy vs Deep copy
const shallowcopy = () => {
  const arrA = [1, 8, 9, 2, 7];
  const arrB = arrA;
  console.log(arrA, arrB);
  arrB.push(28);
  console.log(arrA, arrB);
};
shallowcopy();
const deepcopy = () => {
  const arrA = [1, 8, 9, 2, 7];
  const arrB = [...arrA];
  console.log(arrA, arrB);
  arrB.push(28);
  console.log(arrA, arrB);
};
deepcopy();
const deepcopy1 = () => {
  const arrA = [1, 8, 9, 2, 7];
  const arrB = Array.from(arrA);
  console.log(arrA, arrB);
  arrB.push(29);
  console.log(arrA, arrB);
};
deepcopy1();

const deepcopy2 = () => {
  const arrA = [1, 8, 9, 2, 7];
  const arrB = arrA.concat();
  console.log(arrA, arrB);
  arrB.push(30);
  console.log(arrA, arrB);
};
deepcopy2();

const concat2Array = () => {
  const arrA = [1, 8, 9, 2, 7];
  const arrB = [10, 20, 30, 40, 50];
  const newArray1 = [...arrA, ...arrB];
  const newArray2 = arrA.concat(arrB);

  console.log(newArray1);
  console.log(newArray2);
};
concat2Array();

//Check if array is equal or not
const isEqual = () => {
  const arrA = [1, 8, 9, 2, 7];
  const arrB = [1, 8, 9, 2, 7, 90];
  //Every every element should follow the condition
  const ans =
    arrA.length === arrB.length &&
    arrA.every((ele, index) => arrA[index] === arrB[index]);
  console.log(ans);
};
isEqual();

const reverseArr = (arr) => {
  console.log(arr.reverse());
};

reverseArr([9, 6, 3, 11, 15, -8]);

const sortArr = (arr) => {
  arr.sort((a, b) => a - b); //Ascending
  arr.sort((a, b) => b - a); //Descending

  console.log(arr);
};

sortArr([9, 6, 3, 11, 15, -8]);

//Map
const mapExample = () => {
  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = numbers.map((num) => num * 2);
  console.log(doubledNumbers);
};
mapExample();

//filter
const filterExample = () => {
  const numbers = [1, 2, 3, 4, 5];
  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  console.log(evenNumbers);
};
filterExample();

//reduce
const reduceExample = () => {
  const numbers = [1, 2, 3, 4, 5];
  const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  console.log(sum);
};
reduceExample();

const flatArrayExample = () => {
  const y = [1, 2, [4, 5, [6, 7]], 8, 9];
  const flattedArray = y.flat(2);
  console.log(flattedArray);
};
flatArrayExample();

const flattenArray = (arr) => {
  return arr.flatMap((element) => {
    return Array.isArray(element) ? flattenArray(element) : element;
  });
};
const flatArrayExample1 = () => {
  const y = [1, 2, [4, 5, [6, 7]], 8, 9];
  const flattedArray = flattenArray(y);
  console.log(flattedArray);
};
flatArrayExample1();
