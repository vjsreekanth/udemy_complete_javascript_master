// let massMark = 95;
// let heightMark = 1.88;

// let massJohn = 85;
// let heightJohn = 1.76;

// let markHigherBMI;


// const markBMI = massMark / heightMark ** 2;
// const johnBMI = massJohn/ heightJohn ** 2;
// if(markBMI > johnBMI){
//     console.log(`MArk's BMI (${markBMI}) is greater than John's BMI (${johnBMI})`)
// }else{
//     console.log(`John's BMI (${johnBMI}) is greater than Mark's BMI (${markBMI})`)

// }


// console.log(markBMI);
// console.log(johnBMI);
// // console.log(markHigherBMI)

// // Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// // m tall.

// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// GOOD LUCK

// const day = "thursday";
// if(day === "monday"){
//     console.log("its monday hooo")
// }else if(day === "tuesday"){
//     console.log("its tuesday hiii")
// }else if(day === "wednesday" || day === "thursday"){
//     console.log("its two day program")
// }

// The Complete JavaScript Course 8
// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 😉
// GOOD LUCK 😀


// const billValue = 275;
// let tipPercentage;
// let tip = billValue >= 50 && billValue <= 300 ? billValue * .15 : billValue * 0.2
// console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${billValue + tip}`)

// const calcTip = function(billValue){
//     return  billValue >= 50 && billValue <= 300 ? billValue * .15 : billValue * 0.2
// }
// Coding Challenge #4
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays 😉
// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array
// GOOD LUCK 😀

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

for(let i = 0; i < bills.length; i++){
    tips.push(bills[i] >= 50 && bills[i] <= 300 ? bills[i] * .15 : bills[i] * 0.2);
    totals.push(bills[i] + tips[i])

}

function calcAverage(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

   console.log((sum / arr.length)) ;
}


console.log(tips, totals);

calcAverage(totals);