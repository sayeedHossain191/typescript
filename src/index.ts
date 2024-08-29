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

const myFunc1 = (a: string, b: string, c?: string) => {
    console.log(`Hello ${a}${b}`)

    return a + b;
}

myFunc1('A', 'B', 'false')


type stringOrNum = string | number;
type userType = { name: string, age: number }


const userDetails = (id: stringOrNum,
    user: userType
) => {
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
}

const sayHello = (user: userType) => {
    console.log(`Hello ${user.age > 50 ? 'Sir' : 'Mr.'} ${user.name}`)
}