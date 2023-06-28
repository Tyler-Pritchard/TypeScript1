// primative
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

//falsy
let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in objects
let now: Date = new Date();

//object literals
let colors: string[] = ['red', 'green', 'blue'];
let myNumber: number[] = [1, 2, 3];
let myBooleans: boolean[] = [true, false, true];

//classes
class Car{

};

let car: Car = new Car();

let point: {
    'x':number; 
    'y':number
} = {
    'x': 10,
    'y': 20
}

// function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}