// const name = "John"
// const age = 101

// function runForLoop(pets) {
//     var petObjects = []
//     for (var i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])



// ### **Task 1**
// Re-write this `.map()` using an arrow function:
// Be aware that if JavaScript sees a `{` directly after the `=>` it will think it's starting a function, and not starting an object, so the `:` will be an unexpected symbol.


const carrots = ["bright orange", "ripe", "rotten"]

let mapVegetables = (arr) => {
    return arr.map(function(carrot) { //do i need to get rid of the word function here too??
        return { type: "carrot", name: carrot }
    })
}

// // ### **Task 2**
// // Re-write this `.filter()` ’s callback function using an arrow function:
// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// function filterForFriendly(arr) {
//     return arr.filter(function(person) {
//         return person.friendly
//     })
// }


// // ### **Task 3**
// // Re-write the following functions to be arrow functions:
// function doMathSum(a, b) {
//     return a + b
// }

// var produceProduct = function(a, b) {
//     return a * b
// }


// // ### **Task 4**
// // Write a `printString` function that takes `firstName`, `lastName`, and `age` as parameters and returns a string like the following:
// //`firstName` should default to `"Jane"lastName` should default to `"Doe"age` should default to `100`
// Hi Kat Stark, how does it feel to be 40?


// // ### **Task 5**
// // Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.
// const animals = [
//     {
//         type: "dog",
//         name: "theodore"
//     },
//     {
//         type: "cat",
//         name: "whiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
//     },
//     {
//         type: "dog",
//         name: "sparky"
//     }
//  ];
 
//  function filterForDogs(arr) {
//      return arr.filter(animal => {
//          if (animal.type === "dog") {
//              return true
//          } else {
//              return false
//          }
//      })
//  }
 

// //  Using template literals, write a function that takes location and name parameters and outputs a message formatted like this:
// Hi Janice!

// Welcome to Hawaii.

// I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.