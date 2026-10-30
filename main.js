let myName = "Precious Ndegwa";
let myAge = 20;
let isStudent = true;
let favoriteColors = ["pink", "blue", "purple"];
let todayDate = new Date();

const birthYear = 2006;
const country = "Kenya";

console.log(typeof myName); 
console.log(typeof myAge); 
console.log(typeof isStudent); 
console.log(typeof favoriteColors);
console.log(typeof todayDate); 

let score = 100;
score = 150;
console.log("Updated score:", score);

const PI = 3.14159;

console.log("My name is:", myName);
console.log("I am", myAge, "years old");
console.log("Am I a student?", isStudent);
console.log("My favorite colors are:", favoriteColors);
console.log("Today's date is:", todayDate);
console.log("I was born in", birthYear, "in", country);

console.log("Welcome to Week 4 - JavaScript Basics!");

let a = 20;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

let count = 0;
count++;
console.log(count);
count--;
console.log(count);

let firstName = "Precious";
let lastName = "Ndegwa";

let fullName = firstName + " " + lastName;
let greeting = `Hello, ${firstName}!`;
let message = `${firstName} has ${firstName.length} letters.`;

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("Precious"));

console.log(5 > 3);
console.log(5 < 3);
console.log(5 === 5);
console.log(5 == "5");
console.log(5 !== 3);

console.log(true && true);
console.log(true || false);
console.log(!true);

let myCurrentAge = 20;
let ageInDays = myCurrentAge * 365;
let ageInHours = ageInDays * 24;
let birthYearCalc = 2006;
let yearTurn100 = birthYearCalc + 100;

console.log(`I am ${myCurrentAge} years old`);
console.log(`I am approximately ${ageInDays} days old`);
console.log(`I am approximately ${ageInHours} hours old`);
console.log(`I will turn 100 in year ${yearTurn100}`);

function greet(name) {
    return `Hello, ${name}!`;
}

const add = function(a, b) {
    return a + b;
};

const multiply = (a, b) => a * b;

const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

function calculateArea(width, height) {
    return width * height;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function isEven(number) {
    return number % 2 === 0;
}

function getInitials(fullName) {
    let parts = fullName.split(" ");
    let initials = parts[0][0] + parts[1][0];
    return initials.toUpperCase();
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

function greetDefault(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

function calculateTip(bill, tipPercent = 15) {
    return (bill * tipPercent) / 100;
}

console.log(greet("Precious"));
console.log(add(10, 5));
console.log(multiply(4, 6));
console.log(divide(10, 2));
console.log(calculateArea(10, 5));
console.log(celsiusToFahrenheit(25));
console.log(isEven(20));
console.log(getInitials("Precious Ndegwa"));
console.log(reverseString("Precious"));
console.log(greetDefault());
console.log(greetDefault("Precious Ndegwa"));
console.log(greetDefault("Precious Ndegwa", "Hi"));
console.log(calculateTip(1000));
console.log(calculateTip(1000, 20));
