// //Preliminaries:

for (var i = 0; i <= 9; i++){
    console.log(i)
}

//I can't get this to go all the way down to 0
for (var i = 9; i >= 0; i--){
    console.log(i)
}

const fruit = ["banana", "orange", "apple", "kiwi"]
for (let i = 0; i < fruit.length; i++)
console.log(fruit[i])

//Bronze:

//Write a for loop that will push the numbers 0 through 9 to an array.
var num = [];
num.push(1,2,3,4,5,6,7,8,9)
console.log(num)

//Write a for loop that prints to the console only even numbers 0 through 100
for (var i = 0; i <= 100; i+= 2){
    console.log(i)
}

//Write a for loop that will push every other fruit to an array.
const rfruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
for (let i = 0; i < rfruit.length; i+= 2)
console.log(rfruit[i])


//Silver Medal:

//Write a loop that will print out all the names of the people of the people array
// Write a loop that pushes the names into a `names` array, and the occupations into an `occupations` array.
// Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to *another* array starting with, in this case, "Singer".


const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  
  
 for(let i = 0; i < peopleArray.length; i++){
    console.log(peopleArray[i].name)
 }

 const nameArr = []
 for (let i = 0; i < peopleArray.length; i++){
    nameArr.push(peopleArray[i].name)
 }
 console.log(nameArr)

 const occArr = []
 for(let i = 0; i < peopleArray.length; i++){
    occArr(peopleArray[i].occupation)
 }
 console.log(occArr)

 const otherName = []
 for(let i = 0; i < peopleArray.length; i+= 2){
    otherName.push(peopleArray[i].name)
 }
 console.log(otherName)

 const newOcc = []
 for(let i = 1; i < peopleArray.length; i+= 2){
    newOcc.push(peopleArray[i].occupation)
 }
 console.log(newOcc)

 //Gold Medal - Nesting
 //Create an array that mimics a grid like the following using nested for loops:

var arrayOfArrays = [
[0, 0, 0],
[0, 0, 0],
[0, 0, 0]
]
for(var i = 0; i <arrayOfArrays.length; i++){
    console.log(arrayOfArrays[i])
}

//Create an array that mimics a grid like the following using nested for loops:
var arrayOfArrays = [
[0, 0, 0],
[1, 1, 1],
[2, 2, 2]
]
for(var i = 0; i <arrayOfArrays.length; i++){
    console.log(arrayOfArrays[i])
}

//Create an array that mimics a grid like the following using nested for loops:
var arrayOfArrays = [
[0, 1, 2],
[0, 1, 2],
[0, 1, 2]
    ]
    for(var i = 0; i <arrayOfArrays.length; i++){
        console.log(arrayOfArrays[i])
    }
    

//Given a grid like the previous ones, write a nested for loop that would change every number to an x. (For some reason this isn't returning the way I want it to)
var arrayOfArrays = [
    [0, 1, 2],
    [0, 1, 2],
    [0, 1, 2]
        ]
        for(var i = 0; i <arrayOfArrays.length; i++){
            for(var j = 0; j < arrayOfArrays[0].length; j++){
                console.log(arrayOfArrays[j][0])
            }  
        }
        