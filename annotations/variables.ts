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

//when to use annotations
//1) When the 'any' type is returned
const json = '{"x": 10, "y": 20}';
const coordinates: {x: number; y: number} = JSON.parse(json);

//2 Declaring variable on one line and initializing it later
let words = ['red', 'blue', 'green'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] == 'green') {
        foundWord = true;
    }
}

//3 Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}