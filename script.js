'use strict';
// ***********************************************************************
// _______________________ DEFAULT PARAMATERS ____________________________
// ***********************************************************************
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking(`LH123`);
// createBooking(`LH123`, 2, 800);
// createBooking(`LH123`, 2);
// createBooking(`LH123`, 5);

// // How to skip a paramater
// createBooking(`LH123`, undefined, 1000);
// ***********************************************************************
// _______________________ ARGUMENTS: VALUE VS REFERENCE ____________________________
// ***********************************************************************
// const flight = `LH234`;
// const davut = {
//   name: `Davut Simsek`,
//   passport: 24739479284,
// };
// const checkIn = function (flightNum, passenger) {
//   flightNum = `LH999`;
//   passenger.name = `Mr.` + passenger.name;

//   if (passenger.passport === 24739479284) {
//     alert(`Checked in`);
//   } else {
//     alert(`Wrong passport!`);
//   }
// };

// // checkIn(flight, davut);
// // console.log(flight);
// // console.log(davut);

// // Example
// const newPassport = function (person) {
//   person.passport = Math.ceil(Math.random() * 1000000);
// };
// newPassport(davut);
// checkIn(flight, davut);
// console.log(davut.passport);
// ***********************************************************************
// _______________________ (HOF)FUNCTIONS ACCEPTING CALLBACK FUNCTIONS ____________________________
// ***********************************************************************
// const oneWord = function (str) {
//   return str.replaceAll(` `, ``).toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(` `);
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer(`JavaScript is the best!`, upperFirstWord);
// transformer(`JavaScript is the best!`, oneWord);

// // Simple callback functions
// const high5 = function () {
//   console.log(`👋`);
// };
// document.addEventListener(`click`, high5);

// [`davut`, `simsek`, `thunder`].forEach(high5);
// ***********************************************************************
// _______________________ (HOF)FUNCTIONS RETURNING FUNCTIONS(HOF) ____________________________
// ***********************************************************************
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greeterHey = greet(`Hey`);
// greeterHey(`Davut`);
// greeterHey(`Thunder`);
// greet(`Hey`)(`Davut`);

// const greetArr = greeting => name => console.log(`${greeting} ${name}`);
// greetArr(`Hi`)(`Dav`);
// ***********************************************************************
// _______________________ CALL AND APPLY METHODS ____________________________
// ***********************************************************************
// const lufthansa = {
//   airline: `Lufhansa`,
//   iataCode: `LH`,
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, `Davut Simsek`);
// lufthansa.book(239, `John Smith`);

// const eurowings = {
//   airline: `Eurowings`,
//   iataCode: `EW`,
//   bookings: [],
// };

// const book = lufthansa.book;

// // Does not work
// // book(23, `Sarah Williams`);

// // Call Method
// book.call(eurowings, 23, `Sarah Williams`);
// console.log(eurowings.bookings);

// book.call(lufthansa, 239, `Marry Chooper`);
// console.log(lufthansa.bookings);

// const swiss = {
//   airline: `Swiss Air Lines`,
//   iataCode: `LX`,
//   bookings: [],
// };

// book.call(swiss, 583, `Davut Thunder`);
// console.log(swiss.bookings);

// // Apply Method (Same with the Call method but takes argument from an array)
// const flightData = [583, `George Cooper`];
// book.apply(swiss, flightData);
// // In Modern JS we do the same with Call method with rest operator
// book.call(swiss, ...flightData);
// lufthansa.book.call(swiss, 111, `D DDDDD`);
// ***********************************************************************
// _______________________ BIND METHOD ____________________________
// ***********************************************************************
// const lufthansa = {
//   airline: `Lufhansa`,
//   iataCode: `LH`,
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };
// const eurowings = {
//   airline: `Eurowings`,
//   iataCode: `EW`,
//   bookings: [],
// };
// const swiss = {
//   airline: `Swiss Air Lines`,
//   iataCode: `LX`,
//   bookings: [],
// };

// const book = lufthansa.book;

// // BIND method, instead of immediately calling the functions, with bind we assign them to a variable
// // Creating functions for each airlines that they are taking their this context from lufthansa object
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(155, `Steven Willey`);

// // We can preset not only this context also arguments of functions
// const bookEW23 = book.bind(eurowings, 23);
// bookEW23(`Davut`);
// bookEW23(`Cooper`);
// // console.log(...eurowings.bookings);

// // Bind method with Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// lufthansa.buyPlane();
// document
//   .querySelector(`.buy`)
//   .addEventListener(`click`, lufthansa.buyPlane.bind(lufthansa));

// // Partial application(presetting arguments), (Creating a new specific function from a general function)
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23); // (JUST create a addTAX function with specific VAT for 23%)
// // const addVAt = (rate, value) => value + value * 0.23; ()
// console.log(addVAT(100));
// console.log(addVAT(10));

// // Example: Instead of bind we can also do it with HIGH ORDER FUNCTION
// const addTax2 = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const addVAT2 = addTax2(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(10));

// ***********************************************************************
// _______________________ CHALLENGE #1 ____________________________
// ***********************************************************************
// 1
const poll = {
  question: `What is your favorite programming language?`,
  options: [`0: JavaScript`, `1: Phyton`, `2: Rust`, `3: C++`],
  registerNewAnswer() {
    const answer = Number(
      prompt(`What is your favorite programming language?`)
    );
    if (typeof answer === `number` && answer === 0) this.answers[answer]++;
    if (typeof answer === `number` && answer === 1) this.answers[answer]++;
    if (typeof answer === `number` && answer === 2) this.answers[answer]++;
    if (typeof answer === `number` && answer === 3) this.answers[answer]++;
    displayResults(poll.answers);
  },
  answers: new Array(4).fill(0),
};

// 2
document
  .querySelector(`.poll`)
  .addEventListener(`click`, poll.registerNewAnswer.bind(poll));

// 3
const displayResults = function (type) {
  Array.isArray(type) && console.log(type);
  typeof type === `string` && console.log(`Poll results are ${type}`);
};

// bonus
const x = [5, 2, 3];
const y = [1, 5, 3, 9, 6, 1];
