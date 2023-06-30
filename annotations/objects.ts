const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 10,
        lon: 20
    },
    setAge(age: number): void {
        this.age = age;
    } 
}

const { age }: {age: number} = profile;
const { coords: {lat, lon} }: {coords: {lat: number, lon: number}} = profile;