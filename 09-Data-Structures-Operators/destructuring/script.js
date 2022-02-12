/*const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (categoriesIndex, mainIndex) {
    return [this.categories[categoriesIndex], this.mainMenu[mainIndex]];
  },
};

let [first, , second] = restaurant.categories;
console.log(first, second);
const temp = first;
first = second;
second = temp;
console.log(first, second);

let [firstEl, secondEl] = restaurant.starterMenu;
console.log(firstEl, secondEl);
const tempOne = firstEl;
firstEl = secondEl;
secondEl = tempOne;
console.log(firstEl, secondEl);

console.log(restaurant.order(3, 1));

const [categories, mainMenu] = restaurant.order(2, 2);
console.log(categories, mainMenu);

const nested = [2, [5, 6]];
const [i, ,j] = nested;
console.log(i, j);

const [i, [j, k]] = nested;
console.log(i, j, k);
*/
////////////////////////////////////////Repeat array destructuring//////////////////////////////////////////
/*

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

let [first, , second] = restaurant.categories;
console.log(first, second);

let [firstEl, , secondEl] = restaurant.categories;
console.log(firstEl, secondEl);

const temp = firstEl;
firstEl = secondEl;
secondEl = temp;

console.log(firstEl, secondEl);

const nested = [2, [5, 3]];

const [i, j] = nested;
console.log(i, j);

const [x, [y, z]] = nested;
console.log(x, y, z);

console.log(restaurant.order(2, 1));
const [firstElement, secondElement] = restaurant.order(1, 2);
console.log(firstElement, secondElement);

*/
/*////////////////////////////////////Object Destructuring//////////////////////////////////////////////////*/
/*
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};

const { starterMenu, mainMenu } = restaurant;
console.log(starterMenu, mainMenu);

const { categories, mainMenu, starterMenu } = restaurant;
console.log(categories, mainMenu, starterMenu);

const {
  categories: option,
  mainMenu: food,
  starterMenu: junkFood,
} = restaurant;
console.log(option, food, junkFood);

const { menu = [], mainMenu: food2 = [] } = restaurant;

console.log(menu, food2);

let a = 213;
let b = 214;
const obj = { a: 13, b: 14 };
({ a, b } = obj);
console.log(a, b);

let i = 111;
let j = 112;
const obj1 = { i: 110, j: 120 };
({ i, j } = obj1);
console.log(i, j);

const nested = [starterMenu];
const [x] = nested;
console.log(x);
*/
/*//////////////////////////////////The Spread Operator///////////////////////////////////////////////////////*/
/*
const array = [1, 2, 3, 4, 5];
const badArray = [0, -1, array[0], array[1], array[2], array[3], array[4]];
console.log(badArray);
const goodArray = [0, -1, ...array];
console.log(goodArray);

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
  orderPasta: function (ingredients1, ingredients2, ingredients3) {
  console.log(
  `here is your delicious pasta with ${ingredients1}, ${ingredients2},${ingredients3}`
  );
  },
};

const categories = ["Italian", "Pizzeria", "Vegetarian", "Organic"];
const newCategories = [...categories, "canadian", "Indian"];
console.log(newCategories);

const ingredients = [
prompt("let's make a pasta ingredients! ingredients1?"),
prompt("ingredients2?"),
prompt("ingredients3?"),
];
restaurant.orderPasta(...ingredients);
*/
/*///////////////////////////////////Rest Pattern And ParaMeters////////////////////////////////////////////*/
/*
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 8, 2, 6, 4, 6);
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
*/
/*/////////////// onion is mainIngredient and olives is other ingredient/////////////////////////////////////*/
//restaurant.orderPizza("onion", "olives");
/*
const rest1 = {
  name: "taj",
  numberOfGuest: 20,
};

const rest2 = {
  name: "Ramada",
  owner: "sachin",
};

rest1.numberOfGuest = rest1.numberOfGuest || 10;
rest2.numberOfGuest = rest2.numberOfGuest || 10;
rest1.numberOfGuest ||= 10;
rest2.numberOfGuest ||= 10;

console.log(rest1, rest2);

rest1.numberOfGuest ??= 10;
rest2.numberOfGuest ??= 10;
console.log(rest1, rest2);
*/
/*
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const playersFinal = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(playersFinal);

const { team1 } = game.odds;
const { x: draw } = game.odds;
const { team2 } = game.odds;

console.log(team1, draw, team2);

const printGoal = function (...players) {
  console.log(`${players.length} Goal were scored`);
};

printGoal("Davies", "Muller", "Lewandowski", "Kimmich");
printGoal("Davies", "Muller");
printGoal(...game.scored);

team1 < team2 && console.log("team1 likely to win the match ");
team2 < team1 && console.log("team2 likely to win the match ");

//////////////////////////////////Looping array with for or of loop //////////////////////////////////////////
/*
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

const variety = [...restaurant.categories];
for (const variety1 of variety) console.log(variety1);

const firstMenu = [...restaurant.starterMenu];
for (const menuFirst of firstMenu) console.log(menuFirst);

for (const menuFirst of firstMenu.entries()) {
  console.log(menuFirst);
}
*/
//////////////////////////////Challange --2 //////////////////////////////////////////////////////////////
/*
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (const [i, player] of game.scored.entries())
  console.log(`goal ${i + 1}: ${player}`);

const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : "victory ${game[team]}";
  console.log(`odd of ${teamStr} ${odd}`);
}
*/
/*////////////////////////////challange -1 pratice /////////////////////////////////////////////////////////*/
/*
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
const [gk2, ...fieldPlayers2] = players2;
console.log(gk2, fieldPlayers2);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const newTeamOne = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(newTeamOne);

//const odd = `${team1.odds}, ${x.odds}, ${team2.odds}`;
//console.log(odd);

const { team1 } = game.odds;
console.log(team1);
const { x: draw } = game.odds;
console.log(draw);
const { team2 } = game.odds;
console.log(team1, draw, team2);

let printGoal = function (...players) {
  console.log(` ${players.length} Goal were scored `);
};
printGoal("Davies", "Muller", "Lewandowski", "Kimmich");
printGoal("Davies", "Muller");
printGoal(...game.scored);

team1 < team2 && console.log("Team1 win the match");
team2 < team1 && console.log("Team2 win the match");
*/

/*////////////////////////////////////////uncomplete challange///////////////////////////////////////////////*
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (const [i, player] of game.scored.entries()) {
  console.log(`goal ${i + 1} : ${player}`);

  const odds = object.values(game.odds);
  let average = 0;
  for (const odd of odds) average += odd;
  average /= odds.length;
  console.log(average);
}
*/
/*/////////////////////////////////////////// sets //////////////////////////////////////////////////////////*/
/////////////////////////sets only chose  unique elements /////////////////////////////////////////////////
/*
const ordersSet = new Set(["pizza", "pizza", "momes", "pasta", "pasta"]);

console.log(ordersSet);

console.log(new Set("sachin"));
////////////////////////////// true or false statement //////////////////////////////////////////////////////
console.log(ordersSet.has("momes"));

console.log(ordersSet.has("chowmin"));

console.log(ordersSet.add("chowmin"));
console.log(ordersSet.delete("pasta"));

for (const order of ordersSet) console.log(order);

const staff = ["waiter", "manager", "chef", "manager", "waiter"];
const uniquestaff = new Set(staff);
console.log(uniquestaff);

console.log(new Set(["pizza", "pizza", "momes", "pasta", "pasta"]).size);

console.log(new Set("sachin").size);

const brand = new Map();
brand.set("name", "Ramada");
brand.set(1, "Gurugram");

brand
  .set("categories", ["italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("we are open At, 11")
  .set("we are closed at, 10")
  .set(true, "we are open")
  .set(false, "we are closed")
  .set("open", 11)
  .set("close", 10);

console.log(brand.get(true));
console.log(brand.get(false));
console.log(brand.get("open"));
console.log(brand.get("close"));

console.log(brand.has("categories"));
console.log(brand.delete("open"));
console.log(brand.size);

const question = new Map([
  ["question", "what is the best progarmming language in the world"],
  [1, "c"],
  [2, "java"],
  [3, "javascript"],
  ["correct", 3],
  [(true, "correct")],
  [false, "tryagain!"],
]);
console.log(question);
////////////////////////////////////////////quiz game ////////////////////////////////////////////////////////
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "Number") console.log(`answer ${key} : ${value}`);
}
//const answer = Number(prompt("your answer"));
//console.log(answer);

//console.log(question.get(question.get("correct") === answer));

/////////////////////////convert map to array ///////////////////////////////////////////////////////////////
console.log([...question]);
*/
/////////////////////////////////////challange -3 ///////////////////////////////////////////////////////////
/*
const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "� Substitution"],
  [47, "⚽ GOAL"],
  [61, "� Substitution"],
  [64, "� Yellow card"],
  [69, "� Red card"],
  [70, "� Substitution"],
  [72, "� Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "� Yellow card"],
  [92, "� Blue card"],
]);

// first point

const events = new Set(gameEvents.values());
console.log(events);

//secoud point
gameEvents.get(64);

// third point

const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened on average, every ${90 / gameEvents.size} minutes`
);

//forth point

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "first" : "secound";
  console.log(`[${half}half] ${min} : ${event}`);
}


*/

////////////////////////////////////////pratice challange /////////////////////////////////////////////////////
/*
const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "� Substitution"],
  [47, "⚽ GOAL"],
  [61, "� Substitution"],
  [64, "� Yellow card"],
  [69, "� Red card"],
  [70, "� Substitution"],
  [72, "� Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "� Yellow card"],
  [92, "� Blue card"],
]);
// 1
const events = new Set([...gameEvents.values()]);
console.log(events);

// 2
gameEvents.delete(64);

// 3
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened on average every ${90 / gameEvents.size} minutes`
);

//4
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "first Half" : "secound Half";
  console.log(`${half} Half, ${min}:${event}`);
}
*/
/*
const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "� Substitution"],
  [47, "⚽ GOAL"],
  [61, "� Substitution"],
  [64, "� Yellow card"],
  [69, "� Red card"],
  [70, "� Substitution"],
  [72, "� Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "� Yellow card"],
  [92, "� Blue card"],
]);

const events = new Set([...gameEvents.values()]);
console.log(events);

gameEvents.delete(64);

const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened on average, every ${90 / gameEvents.size} minutes`
);

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "firsthalf" : "secoundhalf";
  console.log(`${half}, ${min} : ${event}`);
}
*/

//const airline = "air India";
//const plane = "A001";

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(plane[3]);

// console.log(airline.length);
//  console.log(airline.indexOf("India"));
//  console.log(airline.indexOf("ir"));
//  console.log(airline.lastIndexOf("i"));

// console.log(airline.slice(4, 9));
// console.log(airline.slice(0, 3));
// console.log(airline.slice(0, airline.indexOf(" ")));
//  console.log(airline.slice(airline.lastIndexOf(" ") + 1));
//  console.log(airline.slice(0, -2));

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === "B" || s === "E") console.log("you got the  middle seat");
//   else console.log("you got lucky");
// };
// checkMiddleSeat("11B");
// checkMiddleSeat("11E");
// checkMiddleSeat("34F");
///////////////////////////////fixing name ///////////////////////////////////////////////////////////////////
// const passenger = "SaCHin";
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

////////////////////////////compairing email //////////////////////////////////////////////////////////////////
// const email = "sachingolu1998gmail.com";
// const loginEmail = "sachingolu1998GOlU.com";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);
// ///////////////////////////////////2nd way ///////////////////////////////////////////////////////////////////

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);

// const priceGB = 1000;
// const priceUS = priceRupees.replace('', "$");
// console.log(priceUS);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const announcement =
//   "all the passenger come to boarding door 23 boarding door23!";

// console.log(announcement.replace("door", "gate"));
// console.log(announcement.replaceAll("door", "gate"));

// const plane = "Airbus A320neo";
// console.log(plane.includes("A320"));
// console.log(plane.includes("A321"));
// console.log(plane.startsWith("Airbus"));
// console.log(plane.startsWith("A320neo"));

// if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
//   console.log("Part of the new airbus family");
// }

// const checkbaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes("knife") || baggage.includes("gun")) {
//     console.log("you are not allowed on plane");
//   } else {
//     console.log("welcome to plane");
//   }
// };

// checkbaggage("i carry somefood and pocket knife with me ");
// checkbaggage("i take my laptop with me on a plane ");
// checkbaggage("i have a gun");

// //////////////////////////////////split and join //////////////////////////////////////////////////////////////

// console.log("A+very+nice+string".split("+"));
// console.log("sachin kashyap".split(" "));

// const [firstName, lastName] = "sachin kashyap".split(" ");
// console.log(firstName, lastName);

// const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
// console.log(newName);

// const capitalizeName = function (name) {
//   const Name = name.split("");
//   const namesUpper = [];

//   for (const name of Name) {
//     namesUpper.push(name[0].toUpperCase() + name.slice(1));
//   }
//   console.log(namesUpper.join(""));
// };

// capitalizeName("sachin and kashyap");
// capitalizeName("sachin kashyap");

// const message = "go to the gate 23!";
// console.log(message.padStart(25, "+").padEnd(30, "+"));
// console.log("sachin".padStart(20, "+").padEnd(40, "+"));

// /////////////////////////////////////card number padding  application //////////////////////////////////////

// const MaskCreditCard = (number) => {
//   const str = number + "";
//   const last = str.slice(-4);
//   return last.padStart(str.length, "*");
// };

// console.log(MaskCreditCard(333322211120));
// console.log(MaskCreditCard("333322"));
// console.log(MaskCreditCard(3333222555555555));

// /////////////////////////////////////////repeat//////////////////////////////////////////////////////////////

// const message1 = "bad weather in panipat , ";
// console.log(message1.repeat(5));

// const planeinline = (n) => {
//   console.log(`There are ${n} planes in line `);
// };
// planeinline(12);
// planeinline(20);
// planeinline(15);
// planeinline(10);

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));

// document.querySelector("button").addEventListener("click", () => {
//   const text = document.querySelector("textarea").value;

//   const rows = text.split("\n");
//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split("_");
//     console.log(row, first, second);

//     const output = `${first} ${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
//   }
// });
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", () => {
  const text = document.querySelector("textarea").value;

  const row = text.split("_");
  for (const [i, rows] of row.entries()) {
    const [first, second] = rows.toLowerCase().trim().split("_");
    console.log(rows, first, second);
    const output = `${first} ${second.replace(
      second[0],second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});
