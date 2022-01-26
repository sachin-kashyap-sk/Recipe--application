const arr = [
  "Ist Element",
  "2nd Element",
  "3rd Element",
  "4th Element",
  "5th Element",
  "6th Element",
  "7th Element",
  "8th Element",
  "9th  Element",
  "10th  Element",
];
// console.log("=================================")
// arr.push("12th Element");
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

arr.splice(2, 1);
// console.log("=================================");

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
arr[2] = "11th Element";
console.log(arr[2]);
