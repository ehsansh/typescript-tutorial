"use strict";
const character = 'ehsan';
console.log(character);
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    console.log(input);
});
const circ = (d) => {
    return d * Math.PI;
};
console.log(circ(3));
let arr = [];
let testArr = [];
let obj = {};
obj = { name: 'ehsan' };
let objTest;
objTest = {
    name: 'ehsan',
    age: 39,
};
objTest.name = 'asal';
let hello;
let add = (a, b, c) => {
    console.log(a + b, c);
};
add(1, 2);
let minus = (a, b) => {
    return a - b;
};
let topics = 'test';
topics = 12;
let greet;
greet = (name, word) => {
    console.log(`${name} says ${word}`);
};
greet('ehsan', 'hello');
let calc;
calc = (x, y, action) => {
    if (action === 'add')
        return x + y;
    return x - y;
};
let logDetails;
logDetails = (person) => {
    console.log(person.name);
};
