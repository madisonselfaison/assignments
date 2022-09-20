// // 1. make an array of umbers that are doubles of the first array

// const arr  = [2, 5, 100];

// const result = arr.map(function(num){
//     return num * 2
// })

// console.log(result)




//   //2) Take an array of numbers and make them strings
//  const arrOfNum = [2, 5, 10];
//  const arrOfStr = arrOfNum.map(num => {
//     return String(num);
//  })
//   console.log(arrOfStr);





  
//   //3) Capitalize the first letter of each name and make the rest of the characters lowercase
//   function capitalizeNames(arr){
//         return arr.map(letter => {

//          let firstLetter = letter.slice(0,1).toUpperCase()
//          let otherLetters = letter.slice(1, 15).toLowerCase()
//          let nameResult = firstLetter.concat(otherLetters)
//          console.log(nameResult)

//     }) 
// }
  
  
//   console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
  
//   // Output:
//   // ["John", "Jacob", "Jingleheimer", "Schmidt"]




// //   4) Make an array of strings of the names
// const users = [{
//     name: "Angelina Jolie",
//     age: 80
// },
// {
//     name: "Eric Jones",
//     age: 2
// },
// {
//     name: "Paris Hilton",
//     age: 5
// },
// {
//     name: "Kayne West",
//     age: 16
// },
// {
//     name: "Bob Ziroll",
//     age: 100
// }]

// const result = users.map(function(user){
//     return user.name
// })

// console.log(result)

//   // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]






  
//   //5) Make an array of strings of the names saying whether or not they can go to The Matrix (HELP)

// const arr = [{
//     name: "Angelina Jolie",
//     age: 80
// },
// {
//     name: "Eric Jones",
//     age: 2
// },
// {
//     name: "Paris Hilton",
//     age: 5
// },
// {
//     name: "Kayne West",
//     age: 16
// },
// {
//     name: "Bob Ziroll",
//     age: 100
// }]

// let oldMovie = arr.map( a => {
//     if(a.age >= 18){
//         return `${a.name} is old enough to see the Matrix!`
//     }
//     else {
//         return `${a.name} is not old enough to see the Matrix!`
//     }
// })

// console.log(oldMovie)
// //   ["Angelina Jolie can go to The Matrix",
// //   "Eric Jones is under age!!",
// //   "Paris Hilton is under age!!",
// //   "Kayne West is under age!!",
// //   "Bob Ziroll can go to The Matrix"]
  






//   6) Make an array of the names in h1s, and the ages in h2s (??)
const arr = [{
    name: "Angelina Jolie",
    age: 80
},
{
    name: "Eric Jones",
    age: 2
},
{
    name: "Paris Hilton",
    age: 5
},
{
    name: "Kayne West",
    age: 16
},
{
    name: "Bob Ziroll",
    age: 100
}]

function readyToPutInTheDOM(arr){
    return arr.map((result) => {
        return "<h1>".concat(result.name).concat("</h1>").concat("<h2>").concat(result.age).concat("</h2>")
    })
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));













      
  // ["<h1>Angelina Jolie</h1><h2>80</h2>",
  // "<h1>Eric Jones</h1><h2>2</h2>",
  // "<h1>Paris Hilton</h1><h2>5</h2>",
  // "<h1>Kayne West</h1><h2>16</h2>",
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]