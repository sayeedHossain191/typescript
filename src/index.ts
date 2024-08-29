const course: string = 'Next Level Web Dev with TS'

console.log(course)

let playerName = 'Sayeed'

//playerName = 32

console.log(playerName)

let fruits = ['apple', 'pineApple']

let mixed = []

mixed.push('sayeed', 19)

let a: string
let b: (number | string)[] = []
let c: object
let d: {
    name: string,
    age: number,
    adult: boolean
}

a = 'hossain'
b.push(2, 'sagor')


let myFunc: Function

myFunc = () => {
    console.log('hello')
}


let add: (x: number, y: number) => number

//Class
class Player {
    name: string;
    age: number;
    country: string;

    constructor(n: string, a: number, c: string) {
        this.name = n
        this.age = a
        this.country = c
    }

    play() {
        console.log(`${this.name} from ${this.country} is playing`)
    }
}

const sakib = new Player('sakib', 38, 'BD')
const players: Player[] = []

players.push(sakib)