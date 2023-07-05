class Vehicle {
    protected honk(): void {
        console.log("beep beep");
    }
};

const vehicle = new Vehicle();
// vehicle.honk();

class Car extends Vehicle {
    private drive(): void {
        console.log("go car go");
    }
    startDriving(): void {
        this.drive();
        this.honk();
    }

};

const car = new Car();
car.startDriving();