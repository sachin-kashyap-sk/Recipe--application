'use strict';

// const Bookings = [];
// const CreatBooking = (flightNumber, passenger = 0, seat = 400) => {
//   const Booking = {
//     flightNumber,
//     passenger,
//     seat,
//   };
//   console.log(Booking);
//   Bookings.push(Booking);
// };
// CreatBooking('sk123', '300', '400');
// CreatBooking('sk123');

///////////////Object value will be changed but primitives not changed their value in function///////////////

// const flight = 'sk123';
// const sachin = {
//   Name: 'sachin',
//   passportNumber: 123456789,
// };

// const checkIn = (flightNumber, passenger) => {
//   flightNumber = 'sk321';
//   passenger.Name = 'sachin Kashyap';

//   if (passenger.passportNumber === 123456789) {
//     alert('Checked in ');
//   } else {
//     ('checked out');
//   }
// };
// checkIn(flight, sachin);
// console.log(flight);
// console.log(sachin);

// const newPassport = function (person) {
//   person.passportNumber = Math.trunc(Math.random() * 10000000000);
// };
// newPassport(sachin);
// checkIn(flight, sachin);
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };
// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split('');
//   return [first.toUpperCase(), ...others].join('');
// };
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string : ${fn(str)}`);
//   console.log(`Transformed by : ${fn.name}`);
// };
// transformer(' javascript is the Best!', upperFirstWord);
// transformer(' javascript is the Best!', oneWord);

///////////////////////////////////  Function calling other function ////////////////////////////////////////
// const greet = function (greetings) {
//   return function (name) {
//     console.log(`${greetings},${name}`);
//   };
// };
// const greeterHey = greet('Hey');
// greeterHey('sachin');
// greeterHey('kashyap');

// const greet = function (greetings) {
//   return function (name) {
//     console.log(`${greetings} ${name}`);
//   };
// };
// const greeterHey = greet('Hello!');
// greeterHey('sachin');
// greeterHey('sachin');
// greet('hey')('sachin');

// const greetArr = greetings => name => console.log(`${greetings} ${name}`);
// greetArr('Hiii')('Kashyap');

// const wish = function (wishes) {
//   return function (wellWish) {
//     console.log(`${wishes} ${wellWish}`);
//   };
// };
// const goodWish = wish('hello!');
// goodWish('sk');

// wish('sachin')('kashyap');

// const wishArr = wishes => wellWish => console.log(`${wishes} ${wellWish}`);

// wishArr('Hello')('Sachin');

// const airIndia = {
//   airline: 'Air India',
//   code: 'BB',
//   booking: [],

//   book(flightNum, Name) {
//     console.log(
//       `${Name} booked a seat on ${this.airline} code ${this.code} ${flightNum}`
//     );
//     this.booking.push({ flight: `${this.code} ${flightNum}`, Name });
//   },
// };
// console.log(airIndia);
// airIndia.book(520, 'Sachin Kashyap');

// const tataAir = {
//   airline: 'Tata Air',
//   code: 'RT',
//   booking: [],
// };
// const book = airIndia.book;
// book.call(tataAir, 111, 'sachin Kashyap');

// const swiss = {
//   airline: 'swissAirLine',
//   code: 'sk',
//   booking: [],
// };
// book.call(swiss, 500, 'Marry Cooper');

// ///// apply method /////
// const flightData = [600, 'Tarun'];
// book.apply(swiss, flightData);

// ////////////////////////////in modren  js ////////////////////////////////////////////////////////////////////

// book.call(swiss, ...flightData);
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ///////////////////////////////////////////bind method //////////////////////////////////////////////////////

// const bookTA = book.bind(tataAir);
// const bookAI = book.bind(airIndia);

// bookTA(50000, 'kashyapsachin');
// const bookEE = book.bind(airIndia, 11);
// bookEE('Golukashyap');
// bookEE('sachin123');
// ////////////////////////////////////////////  with Event listeners  /////////////////////////////////////////
// airIndia.planes = 300;
// airIndia.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };
// document
//   .querySelector('.buy')
//   .addEventListener('click', airIndia.buyPlane.bind(airIndia));

// //partial application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(5000));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(1000));
// console.log(addVAT2(2000));

//////////////////////////// immediately invoked function //////////////////////////////////////////////////

// const runOnce = function () {
//   console.log('This will never run agin');
// };
// runOnce();

// (function () {
//   console.log('This will never Run again');
// })();

// (() => console.log('this Will Also never run'))();

/////////////////////////////////////////////closures/////////////////////////////////////////////////////////
// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passenger`);
//   };
// };
// const booker = secureBooking();

// booker();
// booker();
// booker();

// let f;
// const g = function () {
//   const a = 33;
//   f = function () {
//     console.log(a * 2);
//   };
// };
// g();
// f();
//////////////////////////////////////function connection with the parent function //////////////////////////
// let f;
// const g = function () {
//   const a = 33;
//   f = function () {
//     console.log(a * 2);
//   };
// };
// g();
// f();

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };
// h();
// f();

// const boardPassenger = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We Are know Boarding All ${n} passengers`);
//     console.log(`There Are 3 Group All with ${perGroup} Passengers`);
//   });
//   console.log(`We Will Start Boarding At ${wait} second`);
// };

// const perGroup = 1000;
// boardPassenger(180, 3);

// const boardPassenger = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`we are Know boarding all ${n} passenger `);
//     console.log(`There Are 3 Groups All with ${perGroup} passenger`);
//   }),
//     console.log(`We are start Boarding at ${wait} second`);
// };
// const perGroup = 1000;
// boardPassenger(270, 10);
