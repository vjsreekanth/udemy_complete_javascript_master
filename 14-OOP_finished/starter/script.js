'use strict';

// const Car = function(make, speed){
//     this.make = make;
//     this.speed = speed;

// }

// Car.prototype.accelerate = function(){
//     this.speed += 10;
//     console.log(this.speed);
// }

// Car.prototype.brake = function(){
//     this.speed -= 5;
//     console.log(this.speed);
// }

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes',95);




class CarCl{
    constructor(make, speed){
        this.make = make;
        this.speed = speed;

    }

    accelerate(){
        this.speed += 10;
        console.log(this.speed);
    }
    brake(){
        this.speed -= 5;
        console.log(this.speed);
        return this;
    }

    get speedUs(){
        return this.speed / 1.6
        
    }

    set speedUs(speed){
      this.speed = speed * 1.6;

    }

}



// const ford = new Car('ford', 120);
// console.log(ford);

// ford.speedUs = 50;
// console.log(ford);


// const EV = function(make, speed, charge){
//     Car.call(this, make, speed);
//     this.charge = charge;

// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function(chargeTo){
//     this.charge = chargeTo;
// };
// EV.prototype.accelerate = function(){
//     this.speed += 20;
//     this.charge--;
//     console.log(`${this.make} going at a speed of ${this.speed}, with a charge of ${this.charge} `)
// };




// EV.prototype.constructor = EV;

// const Tesla = new EV('tesla', 120, 23);


// console.log(Tesla);

// Tesla.accelerate();
// Tesla.chargeBattery(90);
// console.log(Tesla);
// Tesla.brake();

// car1.accelerate();


class EVCl extends CarCl{
    #charge;
 constructor(make, speed, charge){
     super(make, speed);
     this.#charge = charge;
 }
 chargeBattery(chargeTo){
    this.#charge = chargeTo;
    return this;
 }
 accelerate(){
    this.speed += 20;
    this.#charge--;
    console.log(`${this.make} going at a speed of ${this.speed}, with a charge of ${this.#charge} `);
    return this;
 }

}

const Rivian = new EVCl('Rivian', 120, 23);
console.log(Rivian);

Rivian.chargeBattery(90).accelerate().brake().accelerate();