class Vehicle {
    drive(): void {
        console.log('vroom vroom');
    }
    honk(): void {
        console.log("beep beep");
    }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();