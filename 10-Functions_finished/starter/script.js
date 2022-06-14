// // 'use strict';

// // // greet arrow function

// // // const greet = greeting =>{
// // //     return name =>{
// // //         console.log(`${greeting} ${name}`)
// // //     }
// // // }

// // // const greetHey = greet('Hey');
// // // greetHey('Sree');

// // Coding Challenge #1
// // Let's build a simple poll app!
// // A poll has a question, an array of options from which people can choose, and an
// // array with the number of replies for each option. This data is stored in the starter
// // 'poll' object below.
// // Your tasks:
// // 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// // method does 2 things:
// // 1.1. Display a prompt window for the user to input the number of the
// // selected option. The prompt should look like this:
// // What is your favourite programming language?
// // 0: JavaScript
// // 1: Python
// // 2: Rust
// // 3: C++
// // (Write option number)
// // 1.2. Based on the input number, update the 'answers' array property. For
// // example, if the option is 3, increase the value at position 3 of the array by
// // 1. Make sure to check if the input is a number and if the number makes
// // sense (e.g. answer 52 wouldn't make sense, right?)
// // 2. Call this method whenever the user clicks the "Answer poll" button.
// // 3. Create a method 'displayResults' which displays the poll results. The
// // method takes a string as an input (called 'type'), which can be either 'string'
// // or 'array'. If type is 'array', simply display the results array as it is, using
// // console.log(). This should be the default option. If type is 'string', display a
// // string like "Poll results are 13, 2, 4, 1".
// // 4. Run the 'displayResults' method at the end of each
// // 'registerNewAnswer' method call.
// // 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
// // data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
// // object! So what should the this keyword look like in this situation?
// // The Complete JavaScript Course 21
// // Test data for bonus:
// // § Data 1: [5, 2, 3]
// // § Data 2: [1, 5, 3, 9, 6, 1]
// // Hints: Use many of the tools you learned about in this and the last section 😉
// // GOOD LUCK 😀




// // const poll = {
// //     question: "What is your favourite programming language?",
// //     options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
// //     // This generates [0, 0, 0, 0]. More in the next section!
// //     answers: new Array(4).fill(0),
// //         registerNewAnswer(){
// //         let answer = Number(prompt(`${this.question}\n
// //         ${this.options.join('\n')}\n Write option nunber`));
       
// //         if(answer < this.options.length && typeof answer === 'number'){
// //             this.answers[answer]++;
// //            this.displayResults();
// //            this.displayResults('string');
            
// //         }else{
// //             alert("Please enter a valid number")
// //         }
// //     },
// //     displayResults(type = "array"){
// //         if(type === 'array'){
// //             console.log(this.answers);

// //         }else if(type === 'string'){
// //             console.log(` The results are ${this.answers.join(', ')}`);

// //         }

// //     }
// // };

// // document.querySelector('.poll').addEventListener("click", poll.registerNewAnswer.bind(poll));
// // poll.displayResults.call({answers: [5, 2, 3]});



// // (function () {
// //     const header = document.querySelector('h1');
// //     header.style.color = 'red';
// //     })()





    
//     // Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
//     // about their dog's age, and stored the data into an array (one array for each). For
//     // now, they are just interested in knowing whether a dog is an adult or a puppy.
//     // A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
//     // old.
//     // Your tasks:
//     // Create a function 'checkDogs', which accepts 2 arrays of dog's ages
//     // ('dogsJulia' and 'dogsKate'), and does the following things:
//     // 1. Julia found out that the owners of the first and the last two dogs actually have
//     // cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
//     // ages from that copied array (because it's a bad practice to mutate function
//     // parameters)
//     // 2. Create an array with both Julia's (corrected) and Kate's data
//     // 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
//     // is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
//     // 🐶
//     // ")
//     // 4. Run the function for both test datasets
//     // Test data:
//     // § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
//     // § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

//     // let dogsJulia = [3, 5, 2, 12, 7];
//     // let dogsKate = [4, 1, 15, 8, 3];
    
//     // const checkDogs = function(dogsJulia, dogsKate){
//     //     let dogs = dogsJulia.slice(1,3).concat(dogsKate);
//     //     // console.log(realDogsArray);
//     //     dogs.forEach(function(dog,index){

//     //         dog >= 3 ? console.log(`Dog number ${index + 1} is an adult, and is ${dog} years old`)
//     //         : console.log(`Dog number ${index + 1} is still puppy`)
//     //     })
//     // };

//     // checkDogs(dogsJulia, dogsKate);


//     // Coding Challenge #2
//     // Let's go back to Julia and Kate's study about dogs. This time, they want to convert
//     // dog ages to human ages and calculate the average age of the dogs in their study.
//     // Your tasks:
//     // Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
//     // ages ('ages'), and does the following things in order:
//     // 1. Calculate the dog age in human years using the following formula: if the dog is
//     // <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
//     // humanAge = 16 + dogAge * 4
//     // 2. Exclude all dogs that are less than 18 human years old (which is the same as
//     // keeping dogs that are at least 18 years old)
//     // 3. Calculate the average human age of all adult dogs (you should already know
//     // from other challenges how we calculate averages 😉)
//     // 4. Run the function for both test datasets
//     // Test data:
//     // § Data 1: [5, 2, 4, 1, 15, 8, 3]
//     // § Data 2: [16, 6, 10, 5, 6, 1, 4]
//     // GOOD LUCK 😀
//     // Coding Challenge #3
//     // Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
//     // as an arrow function, and using chaining!
//     // Test data:
//     // § Data 1: [5, 2, 4, 1, 15, 8, 3]
//     // § Data 2: [16, 6, 10, 5, 6, 1, 4]
//     // GOOD LUCK


// //     const calcAverageHumanAge = function(ages){
// //         let humanAge = [];
      
// //         ages.forEach(age => {
// //             if (age <= 2){
// //                 humanAge.push(2 * age);
// //             }else if(age > 2){
// //                 humanAge.push((age * 4) + 16);
// //             }
        
// //         })
// //        const adultHumanAge = humanAge.filter(age =>{
// //             return age >= 18;
// //         })
// //         const avgHumanAge = adultHumanAge.reduce((acc, age)=>
// //             acc + age, 0) / adultHumanAge.length;
// //         return avgHumanAge;
// //     }

// // console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

// // const avgHumanAge = ages => ages.map(age => age <= 2 ? age * 2 : (age * 4) + 16)
    
// //     .filter(humanAge => humanAge >= 18)
   
// //     .reduce((acc, adultAge, index, adultArray) => acc + adultAge / adultArray.length, 0);


// // console.log(avgHumanAge([5, 2, 4, 1, 15, 8, 3]));

// Coding Challenge #4
// Julia and Kate are still studying dogs, and this time they are studying if dogs are
// eating too much or too little.
// Eating too much means the dog's current food portion is larger than the
// recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10%
// above and 10% below the recommended portion (see hint).
// Your tasks:
// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property. Do
// not create a new array, simply loop over the array. Forumla:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of
// food, and the weight needs to be in kg)
// 2. Find Sarah's dog and log to the console whether it's eating too much or too
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
// the owners array, and so this one is a bit tricky (on purpose) 🤓
// 3. Create an array containing all owners of dogs who eat too much
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
// ('ownersEatTooLittle').
// 4. Log a string to the console for each array created in 3., like this: "Matilda and
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
// too little!"


// 5. Log to the console whether there is any dog eating exactly the amount of food
// that is recommended (just true or false)
// 6. Log to the console whether there is any dog eating an okay amount of food
// (just true or false)
// 7. Create an array containing the dogs that are eating an okay amount of food (try
// to reuse the condition used in 6.)
// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food
// portion in an ascending order (keep in mind that the portions are inside the
// array's objects 😉)


// The Complete JavaScript Course 26
// Hints:
// § Use many different tools to solve these challenges, you can use the summary
// lecture to choose between them 😉
// § Being within a range 10% above and below the recommended portion means:
// current > (recommended * 0.90) && current < (recommended *
// 1.10). Basically, the current portion should be between 90% and 110% of the
// recommended portion.
// Test data:

// GOOD LUCK 😀

const dogs = [
{ weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
{ weight: 8, curFood: 200, owners: ['Matilda'] },
{ weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
{ weight: 32, curFood: 340, owners: ['Michael'] },
];



dogs.forEach(dog =>{
   const recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
   dog.recommendedFood = recommendedFood;
});




let dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));


if (dogSarah.curFood > dogSarah.recommendedFood * .90 && dogSarah.curFood < dogSarah.recommendedFood * 1.1 ){
    console.log("Its eating Ok");
}else if(dogSarah.curFood < dogSarah.recommendedFood * .90){
    console.log("Its eating too little");
}else if(dogSarah.curFood > dogSarah.recommendedFood * 1.1){
    console.log("Its eating too much")}

    let ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood * 1.1).flatMap(dog => dog.owners);
    let ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recommendedFood * .90).flatMap(dog => dog.owners);
    console.log(ownersEatTooMuch.join(' and ').concat(`'s dogs eat too much`));
    console.log(ownersEatTooLittle.join(' and ').concat(`'s dogs eat too little`));


   
   
   console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));
   console.log(dogs.some(dog => dog.curFood > dog.recommendedFood * .90 && dog.curFood < dog.recommendedFood * 1.1));

   const okEatingDogs = dogs.filter(dog => dog.curFood > dog.recommendedFood * .90 && dog.curFood < dog.recommendedFood * 1.1);
   console.log(okEatingDogs);

   const dogNew = dogs.slice().sort((a, b) =>
       a.recommendedFood - b.recommendedFood)


 