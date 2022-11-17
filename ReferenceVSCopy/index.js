// starts with strings, numbers and booleans
// let age = 100;
// let age2 = age;
// console.log(age, age2);
// age = 200;
// console.log(age, age2);

// let name = "shunnu";
// let name2 = name;
// console.log(name, name2);
// name = "Sunil";
// console.log(name, name2);

// Lets play with arrays
const players = ["Virat", "Rahul", "Rohit"];
// make copy of them
const team = players;
console.log(players, team);

// now update the second one
// team[3] = "Rishab";
console.log(players, team);

// so how do we fix this?
const team2 = players.slice();

const team3 = [].concat(players);

const team4 = [...players];
team4[3] = "hey";
console.log(team);

const team5 = Array.from(players);

// with Objects
const person = {
  name: "Sunil Kumar ",
  age: 19,
};

// and think we make a copy:
// const captain = person;
// captain.number = 99;

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(cap2);

const shunnu = {
  name: "Sunil",
  age: 100,
  social: {
    twitter: "@Cook_c0de",
    instagram: "@Sunil.herez",
  },
};

console.clear();
console.log(shunnu);

const dev = Object.assign({}, shunnu);

const dev2 = JSON.parse(JSON.stringify(shunnu));
