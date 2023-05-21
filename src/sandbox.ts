const character = 'ehsan';

console.log(character);

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    console.log(input);
});

const circ = (d: number) => {
    return d * Math.PI;
};

console.log(circ(3));

let arr: string[] = [];

let testArr: (string | number)[] = [];

let obj: object = {};
obj = { name: 'ehsan' };

let objTest: {
    name: string;
    age: number;
};

objTest = {
    name: 'ehsan',
    age: 39,
};
objTest.name = 'asal';

let hello: Function;

let add = (a: number, b: number, c?: number | string) => {
    console.log(a + b, c);
};

add(1, 2);

let minus = (a: number, b: number): number => {
    return a - b;
};

type StringOrNum = string | number;

let topics: StringOrNum = 'test';
topics = 12;

let greet: (a: string, b: string) => void;
greet = (name: string, word: string) => {
    console.log(`${name} says ${word}`);
};
greet('ehsan', 'hello');

let calc: (x: number, y: number, z: string) => number;

calc = (x: number, y: number, action: string) => {
    if (action === 'add') return x + y;
    return x - y;
};

let logDetails: (obj: { name: string; age: number }) => void;

logDetails = (person: { name: string; age: number }) => {
    console.log(person.name);
};
