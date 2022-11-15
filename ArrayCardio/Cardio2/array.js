const people = [
  { name: "shunnu", year: 2003 },
  { name: "munna", year: 2002 },
  { name: "shub", year: 1999 },
  { name: "sahil", year: 2004 },
];
const comments = [
  { text: "amazing", id: 543423 },
  { text: "super good", id: 432543 },
  { text: "OMG I'm singing too good", id: 678594 },
  { text: "cool cool", id: 876545 },
  { text: "nice nice ", id: 987789 },
];

// 1. Some and Every Checks
// Array.some();

/* const isAdult = people.some(function (person) {
   const currentYear = new Date().getFullYear();
   if (currentYear - person.year >= 19) {
     return true;
  }
}); */

const isAdult = people.some(
  (person) => new Date().getFullYear() - person.year >= 19
);

console.log({ isAdult });

// 2.Array.every();

/* const isAdult = people.every(function (person) {
   const currentYear = new Date().getFullYear();
   if (currentYear - person.year >= 19) {
     return true;
  }
}); */

const allAdults = people.every(
  (person) => new Date().getFullYear() - person.year >= 19
);
console.log({ allAdults });

// 3. Array.find();
// Find is just like filter but instead returns just the one you looking for
// Find the comment with the ID 678594

// const comment = comments.find(function (comment) {
//   if (comment.id === 678594) {
//     return true;
//   }
// });

const comment = comments.find((comment) => (comment.id === 678594 ? 1 : 0));
console.log(comment);

// 4. Array.find();
// find the comment with this id
// delete the comment with the id of 678594

const index = comments.findIndex((comment) => (comment.id === 678594 ? 1 : 0));
console.log({ index });

comments.splice(index, 1);

// const newComments = [
//   ...comments.splice(0, index),
//   ...comments.splice(index + 1),
// ];
