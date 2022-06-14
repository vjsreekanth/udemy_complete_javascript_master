"use strict";

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// function checkWinner(avgDolphins, avgKoalas){
//     if(avgDolphins >= avgKoalas * 2){
//         console.log(`Dolphins win(${avgDolphins}, ${avgKoalas})`)
//     }else if(avgKoalas >= avgDolphins * 2){
//         console.log(`Koalas win(${avgKoalas}, ${avgDolphins})`)
//     }else{
//         console.log("No team wins....")
//     }

// }

// const avgDolphins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);
// console.log(avgDolphins);
// console.log(avgKoalas);
// checkWinner(avgDolphins, avgKoalas);


// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array) 😉
// GOOD LUCK

// let billArray = [125, 555, 44];
// let tipArray = [];
// let totalArray = [];


// const calcTip = function(billValue){
//     return  billValue >= 50 && billValue <= 300 ? billValue * .15 : billValue * 0.2

// } 

// tipArray = [calcTip(billArray[0]), calcTip(billArray[1]), calcTip(billArray[2])];
    


// totalArray[0] = tipArray[0] + billArray[0];
// totalArray[1] = tipArray[1] + billArray[1];
// totalArray[2] = tipArray[2] + billArray[2];

// console.log(tipArray);
// console.log(totalArray);

// const jonas = {
//     firstName: "Jonas",
//     lastname: "scedman",
//     job: "teacher",
//     birthYear: 1991,
//     hasDriversLicense: true,
//     friends: ["michael", "steven", "tim"],
//     calcAge: function(){
//         this.age = 2037 - this.birthYear;
//         return this.age

//     }

// };

// console.log(`${jonas.firstName}is a ${jonas.calcAge()} year old ${jonas.job}. He ${jonas.hasDriversLicense ? "has" : "dont" } a drivers licens. `)

// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.
// GOOD LUCK 😀

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    },
};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    },
}

if(mark.calcBMI() > john.calcBMI()){
    console.log(`${mark.fullName}'s BMI(${mark.calcBMI()}) is higher than ${john.fullName}'s BMI(${john.calcBMI()}) `)
}else if(john.calcBMI > mark.calcBMI()){
    console.log(`${john.fullName}'s BMI(${john.calcBMI()}) is higher than ${mark.fullName}'s BMI(${mark.calcBMI()}) `)

}else if((john.calcBMI === mark.calcBMI())){
    console.log(`${john.fullName}'s BMI(${john.calcBMI()}) has same as  ${mark.fullName}'s BMI(${mark.calcBMI()}) `)


}