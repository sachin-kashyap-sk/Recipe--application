///////////////////////////////slice remove only selected area /////////////////////////////////////////////

// let arr = ["a", "b", "c", "d", "e"];
// console.log(arr.slice(2));
// console.log(arr.slice(1, 4));
// console.log(arr.slice(0, -1));
// console.log(arr.slice());
// console.log([...arr]);

//////////////////////////////////splice delete the whole array /////////////////////////////////////////////

// console.log(arr.splice(1));
// console.log(arr.splice(0, 3));
// console.log(arr.splice(3));
// console.log(arr.splice());
// arr.splice(-1);
// console.log(arr);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////reverse/////////////////////////////////////////////////////

// let arr0 = ["a", "b", "c", "d"];
// let arr1 = ["h", "g", "f", "e"];

////////////////////Reverse never allow to again correct the array or  reverse the array//////////////////

// console.log(arr0.reverse());
// console.log(arr0);
// console.log(arr1.reverse());

//////////////////////////////////concat method //////////////////////////////////////////////////////////////

// const letters = arr0.concat(arr1);
// console.log(letters);
// console.log([...arr0, ...arr1]);

//////////////////////////////////////// Join ///////////////////////////////////////////////////////////////

// console.log(letters.join(" - "));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const arr2 = [11, 22, 33, 44];
// console.log(arr2[0]);
// console.log(arr2.at(0));

///////////////////////////////Getting last elements ///////////////////////////////////////////////////////

// console.log(arr2[arr.length - 1]);
///2nd method
// console.log(arr2.slice(-1)[0]);
/// 3rd method
// console.log(arr2.at(-2));
/// 4th method

/// Also Apply ON Strings///

// console.log("sachin".at(0));
// console.log("sachin".at(-1));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////Bank--TranSection//////////////////////////////////////////////////////

// const movements = [400, -200, -300, 100, 400, -500, 200, 1000, -1000];
// /// For of loop taking index first  and element second
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement : ${i + 1} You Deposit ${movement}`);
//   } else {
//     console.log(`Movement : ${i + 1} You WithDrew ${Math.abs(movement)}`);
//   }
// }
// console.log("-----forEach ------");
// /// for Each taking element first and index on second
// movements.forEach(function (movement, i) {
//   if (movement > 0) {
//     console.log(`Movement : ${i + 1} You Deposit ${movement}`);
//   } else {
//     console.log(`Movement : ${i + 1} You WithDrew ${Math.abs(movement)}`);
//   }
// });

// /// forEach with Maps////////////////////////////////////////////////////////////////////////////////////////
// const currencies = new Map([
//   ["USD", "United State Dollar "],
//   ["EUR", "Euro"],
//   ["GBP", "pound sterling"],
// ]);
// currencies.forEach(function (value, key, Map) {
//   console.log(`${key} : ${value}`);
// });

// /// for Each with  setS ////////////////////////////////////////

// const currenciesUnique = new Set(["USD", "EUR", "GBP"]);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, key, Map) {
//   console.log(`${key} : ${value}`);
// });
/////////////////////////////////////////////challenge -1 ///////////////////////////////////////////////////

// const juliaDog = [3, 5, 2, 12, 7];
// const kateDog = [4, 1, 15, 8, 3];

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);
//   console.log(dogsJuliaCorrected);
//   const dogs = dogsJuliaCorrected.concat(dogsKate);
//   console.log(dogs);
//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is  an adult and is ${dog} years old `);
//     } else {
//       console.log(`Dog number ${i + 1} is  an puppy and is ${dog} years old`);
//     }
//   });
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

/////////////////////////////////////////////challenge practice////////////////////////////////////////////

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);
//   console.log(dogsJuliaCorrected);
//   const dogs = dogsJuliaCorrected.concat(dogsKate);
//   console.log(dogs);
//   dogs.forEach(function (dogs, i) {
//     if (dogs >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${dogs} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is an puppy, and is ${dogs} years old`);
//     }
//   });
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);



