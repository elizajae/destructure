/**
 * Question 1
    let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
    let {numPlanets, yearNeptuneDiscovered} = facts;

    console.log(numPlanets); // ?
    console.log(yearNeptuneDiscovered); // ?

    // Answer
    console.log(numPlanets); // 8
    console.log(yearNeptuneDiscovered); // 1846
 */

/**
 * Question 2
    let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
    };

    let {numPlanets, ...discoveryYears} = planetFacts;

    console.log(discoveryYears); // ?

    // Answer
    console.log(discoveryYears); // {yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659}
 */
/**
 * Question 3
    function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
    }

// Answer
    getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // Your name is Alejandro and you like purple
    getUserData({firstName: "Melissa"}) // Your name is Melissa and you like green
    getUserData({}) // Your name is undefined and you like green
    */

/**
 * Question 4
let [first, second, third] = ["Maya", "Marisa", "Chi"];


// Answer
    console.log(first); // "Maya"
    console.log(second); // "Marisa"
    console.log(third); // "Chi"
    */

/**
 * Question 5
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings"
]

// Answer

console.log(raindrops); // "Raindrops on roses",
console.log(whiskers); // "whiskers on kittens",
console.log(aFewOfMyFavoriteThings); //   ["Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings"]
    */

/**
 * Question 6
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]


// Answer
console.log(numbers) // [10, 30, 20]
    */

/**
 * Refactoring 1
 
var obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

var a = obj.numbers.a;
var b = obj.numbers.b;


// Answer

const {a, b} = obj.numbers;
    */

/**
 * Refactoring 2
 
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;


// Answer

[arr[0], arr[1]] = [arr[1], arr[0]]

    */

const raceResults = (arr) => {
  const [first, second, third, ...rest] = arr;
  return {
    first: first,
    second: second,
    third: third,
    rest: rest,
  };
};
