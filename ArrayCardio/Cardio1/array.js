const inventors = [
  { first: "Albert", last: "Einstein", year: "1879", passed: "1955" },
  { first: "Charlies", last: "Babbage", year: "1791", passed: "1871" },
  { first: "Isaac", last: "Newton", year: "1500", passed: "1727" },
  { first: "Abdul", last: "Kalam", year: "1560", passed: "2015" },
  { first: "Steve", last: "Jobs", year: "1955", passed: "2011" },
  { first: "Write", last: "Brothers", year: "1871", passed: "1948" },
  { first: "Thomas", last: "Edison", year: "1847", passed: "1931" },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.filter();
// 1. filter the list of inventors who are born in 1500's
const fifteen = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year <= 1600
);
console.table(fifteen);

// 2.Array.map();
//this function give us the first & last name of inventors Array.
const fullNames = inventors.map(
  (inventors) => `${inventors.first} ${inventors.last}`
);
console.table(fullNames);

// 3.Array.sort();
// this function sorted the inventors by birth date oldest to youngest

// const ordered = inventors.sort(function (a, b) {
//   if (a.year > b.year) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
console.table(ordered);

// 4. Array.reduce();
// how many years did all inventors live.
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);

// 5. Sort the inventors by years lived
const oldest = inventors.sort(function (a, b) {
  const lastguy = a.passed - a.year;
  const nextguy = b.passed - b.year;
  return lastguy > nextguy ? 1 : -1;
});
console.table(oldest);

// 7. Sort exercise
// sort the people alphabetically by last name.
const alpha = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(", ");
  const [bLast, bFirst] = nextOne.split(", ");
  return aLast > bLast ? 1 : -1;
});
