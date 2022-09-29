
// COMPLETED
// const name = "John"
// const age = 101

function runForLoop(pets) {
    var petObjects = []
    for (var i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

// runForLoop(["cat", "dog"])

//_______________________________________________________________________________________________________________________________________________
// COMPLETED
// ### **Task 1**
// Re-write this `.map()` using an arrow function:
// Be aware that if JavaScript sees a `{` directly after the `=>` it will think it's starting a function, and not starting an object, so the `:` will be an unexpected symbol.


const carrots = ["bright orange", "ripe", "rotten"]

let mapVegetables = (arr) =>{
    return arr.map((carrot) => { 
        return { type: "carrot", name: carrot }
    })
}
// console.log(mapVegetables(carrots))

//______________________________________________________________________________________________________________________________________________________
// COMPLETED
// // ### **Task 2**
// // Re-write this `.filter()` ’s callback function using an arrow function:
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]
const friendlyPerson = people.filter(name => name.friendly = "true")
// console.log(friendlyPerson)

//_____________________________________________________________________________________________________________________________________________________________
//  COMPLETED
// // ### **Task 3**
// // Re-write the following functions to be arrow functions:
(a) => {
    return a + b
}

var produceProduct = (a) => {
    return a * b
}


//_________________________________________________________________________________________________________________________________________________________________
// //COMPLETED (I think I did this right?)
// // // ### **Task 4**
// // // Write a `printString` function that takes `firstName`, `lastName`, and `age` as parameters and returns a string like the following:
// // //`firstName` should default to `"Jane"lastName` should default to `"Doe"age` should default to `100`
// // Hi Kat Stark, how does it feel to be 40?
let firstName = "Kat"
let lastName = "Stark"
let age = 100

// console.log(`Hi ${firstName} ${lastName}, how does it feel to be ${age}?`)


//__________________________________________________________________________________________________________________________________________________________________
// COMPLETED
// // // ### **Task 5**
// // // Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 filterforDogs = arr => { return arr.filter((animal) => {return animal.type === "dog"}) }
//  console.log(filterforDogs(animals))

//_________________________________________________________________________________________________________________________________________________________________________
// //COMPLETED 
// // //  Using template literals, write a function that takes location and name parameters and outputs a message formatted like this:
let firstName = "Janice"
let location = "Hawaii"
console.log(`Hi ${firstName}! Welcome to ${location}. I hope you enjoy your stay. Please ask the president of Hawaii if you need anything`)
// Hi Janice!

