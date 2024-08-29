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
let add;
//Class
class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}
const sakib = new Player('sakib', 38, 'BD');
const players = [];
players.push(sakib);
