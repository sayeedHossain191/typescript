"use strict";
const course = 'Next Level Web Dev with TS';
console.log(course);
let playerName = 'Sayeed';
//playerName = 32
console.log(playerName);
let fruits = ['apple', 'pineApple'];
let mixed = [];
mixed.push('sayeed', 19);
let a;
let b = [];
let c;
let d;
a = 'hossain';
b.push(2, 'sagor');
let myFunc;
myFunc = () => {
    console.log('hello');
};
const myFunc1 = (a, b, c) => {
    console.log(`Hello ${a}${b}`);
    return a + b;
};
myFunc1('A', 'B', 'false');
const userDetails = (id, user) => {
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
};
const sayHello = (user) => {
    console.log(`Hello ${user.age > 50 ? 'Sir' : 'Mr.'} ${user.name}`);
};
