// myAge represents my current age as a number.
const myAge = 23;

// earlyYears represents the first two years of a dog's life, which count as 10.5 dog years each.
let earlyYears = 2;

earlyYears *= 10.5;

// accounting for the first two years of a dog's life from myAge.
let laterYears = myAge - 2;

// calculate number of dog years accounted for by my later years.
laterYears *= 4;

console.log(earlyYears, laterYears);

// my age in dog years, using addition of earlyYears and laterYears.
let myAgeInDogYears = earlyYears + laterYears;

// new variable myName which uses built in method to convert name as string to all lower case.
let myName = 'Benye'.toLowerCase();

// print to the console a statement which uses three variables above to display my name, my age, and my age in dog years.
console.log(`My name is ${myName}. I am ${myAge} in human years which is ${myAgeInDogYears} years old in dog years.`);

