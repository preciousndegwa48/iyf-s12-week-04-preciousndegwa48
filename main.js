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

function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day";
    }
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}

let loopCount = 0;
while (loopCount < 5) {
    console.log(loopCount);
    loopCount++;
}

const myColors = ["pink", "blue", "purple"];
for (const color of myColors) {
    console.log(color);
}

console.log("--- Numbers 1-100 ---");
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

console.log("--- Even numbers 1-50 ---");
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("--- FizzBuzz ---");
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

console.log("--- Triangle of stars ---");
for (let i = 1; i <= 5; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}

function addCalc(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiplyCalc(a, b) {
    return a * b;
}

function divideCalc(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

function modulus(a, b) {
    return a % b;
}

function power(a, b) {
    return a ** b;
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return addCalc(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiplyCalc(num1, num2);
        case "/":
            return divideCalc(num1, num2);
        case "%":
            return modulus(num1, num2);
        case "**":
            return power(num1, num2);
        default:
            return "Invalid operator";
    }
}

console.log(calculate(10, "+", 5));
console.log(calculate(10, "-", 5));
console.log(calculate(10, "*", 5));
console.log(calculate(10, "/", 5));
console.log(calculate(10, "/", 0));
console.log(calculate(10, "%", 3));
console.log(calculate(2, "**", 3));
console.log(getGrade(85));
console.log(getDayName(3));

const fruits = ["mango", "strawberry", "watermelon"];
const myNumbers = [20, 2006, 5, 10, 15];
const mixed = ["Precious", 20, true, null];

console.log(fruits[0]);
console.log(fruits.length);

fruits.push("pineapple");
fruits.unshift("banana");
console.log(fruits);
fruits.pop();
fruits.shift();
console.log(fruits);

const numbers = [1, 2, 3, 4, 5, 20, 2006];

numbers.forEach(num => console.log(num * 2));

const doubled = numbers.map(num => num * 2);
console.log(doubled);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven);

const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);

console.log(numbers.includes(3));

const sampleArray = [2, -3, 5, -10, 12, 20, -1];

const doubleAll = sampleArray.map(num => num * 2);
console.log("Doubled:", doubleAll);

const noNegatives = sampleArray.filter(num => num >= 0);
console.log("No negatives:", noNegatives);

const firstGreaterThan10 = sampleArray.find(num => num > 10);
console.log("First > 10:", firstGreaterThan10);

const product = sampleArray.reduce((total, num) => total * num, 1);
console.log("Product:", product);

const favColors = ["pink", "blue", "purple"];
const upperColors = favColors.map(color => color.toUpperCase());
console.log(upperColors);

const colorsWithP = favColors.filter(color => color.includes("p"));
console.log(colorsWithP);

const person = {
    firstName: "Precious",
    lastName: "Ndegwa",
    age: 20,
    isStudent: true,
    hobbies: ["reading", "coding", "music"],
    favoriteColors: ["pink", "blue", "purple"],
    address: {
        city: "Nairobi",
        country: "Kenya"
    },
    birthYear: 2006
};

console.log(person.firstName);
console.log(person["lastName"]);
console.log(person.address.city);

person.age = 21;
person.phone = "0712 345 678";
person.email = "precious.ndegwa@example.com";
delete person.isStudent;
console.log(person);

const calculatorObj = {
    add: function(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply: (a, b) => a * b,
    divide(a, b) {
        if (b === 0) return "Cannot divide by zero";
        return a / b;
    }
};

console.log(calculatorObj.add(5, 3));
console.log(calculatorObj.subtract(10, 4));

const scores = {
    math: 95,
    english: 88,
    science: 92,
    javascript: 90
};

console.log(Object.keys(scores));
console.log(Object.values(scores));
console.log(Object.entries(scores));

for (const [subject, score] of Object.entries(scores)) {
    console.log(`${subject}: ${score}`);
}

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

const students = [
    { name: "Precious Ndegwa", age: 20, grade: 88, major: "Software Engineering" },
    { name: "Brian Otieno", age: 22, grade: 72, major: "Math" },
    { name: "Faith Wanjiku", age: 21, grade: 90, major: "Software Engineering" },
    { name: "Kevin Mwangi", age: 23, grade: 85, major: "Physics" },
    { name: "Linda Achieng", age: 20, grade: 95, major: "Software Engineering" }
];

const names = students.map(student => student.name);
console.log(names);

const highAchievers = students.filter(student => student.grade > 80);
console.log(highAchievers);

const charlie = students.find(student => student.name.includes("Faith"));
console.log(charlie);

const avgGrade = students.reduce((total, student) => total + student.grade, 0) / students.length;
console.log("Average grade:", avgGrade);

const csMajors = students.filter(student => student.major === "Software Engineering");
console.log(csMajors);

const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
console.log(sortedByGrade);

const hasTopStudent = students.some(student => student.grade > 90);
console.log(hasTopStudent);

const allPassing = students.every(student => student.grade >= 60);
console.log(allPassing);

const myProfile = {
    name: "Precious Ndegwa",
    age: 20,
    country: "Kenya",
    birthYear: 2006,
    greet() {
        return `Hi, I am ${this.name} from ${this.country}`;
    }
};
console.log(myProfile.greet());
