const carMakers = ['ford', 'toyota', 'chevy'];
const date = [[new Date()], [new Date()]];

const carsByMake: string[][] = [];

// help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
carMakers.push(100);

// Help with .map
carMakers.map((car: string): string => {
    return car.toUpperCase();
});

// flexible types
const importantDates: (Date | string)[] = [new Date(), '10-10-2030'];
importantDates.push('10-12-2030');
importantDates.push(new Date());
importantDates.push(100);