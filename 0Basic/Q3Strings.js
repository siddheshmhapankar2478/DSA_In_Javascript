//Length of a String
let firstName = "Siddhesh";
console.log(firstName.length);

//Access String Element
console.log(firstName.charAt(2)); // i
console.log(firstName[2]); // i
console.log(firstName.charCodeAt(2)); //ascii value

//Check Presence of Character
console.log(firstName.includes("r"));
console.log(firstName.indexOf("i")); // (not present it return -1)
console.log(firstName.lastIndexOf("i")); // 7

//Compare Two Strings
let anotherName = "Raj";
console.log(firstName.localeCompare(anotherName)); // -1 or 1 (strings are equal return 0)
console.log(firstName === anotherName);

// Replace Substring
const str = "Hi Siddhesh. Siddhesh is Best Frontend 9876543210";
console.log(str.replace("Siddhesh", "Sujit"));
console.log(str.replace("/Siddhesh/g", "Sujit"));
console.log(str.replaceAll("Siddhesh", "Sujit"));

// Substring of a String
console.log(str.substring(6, 30));
console.log(str.slice(-9, -1));

// Split and Join
const subString = str.split(" ");
console.log(subString);
console.log(subString.join(" "));
console.log(subString.join());

// String Start and End and Search
console.log(str.startsWith("Siddhesh"));
console.log(str.endsWith("10"));
console.log(str.search("Siddhesh"));

// Trim and Case Conversion
const trimStr = str.trim();
const trimStrStart = str.trimStart();
const trimStrEnd = str.trimEnd();
console.log(trimStr, trimStr.length);
console.log(str.toLowerCase());
console.log(str.toLocaleLowerCase());

console.log(str.toUpperCase());

// Convert Number and Object to String
const num = 123;
console.log(num, num.toString());

const obj = {
  name: "Siddhesh",
  course: "DSA with Siddhesh",
  roll: 27,
};
console.log(obj);
console.log(JSON.stringify(obj));

// Concatenate Strings
const lastName = "Mhapankar";
console.log(firstName + lastName);
console.log(`${firstName} ${lastName} is a Best Developer`);
console.log(firstName.concat(lastName, " is a", " Best"));
