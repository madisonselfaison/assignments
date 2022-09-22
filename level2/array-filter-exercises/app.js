// write a function (oneWordOnly) that takes an array of strings, and 
// returns an array of just the strings with one word in them


function oneWordOnly(words){
  const result = words.filter(function(word){
      let num = word.indexOf(" ")
      if(num === -1)
      return word
      // console.log(word)
      // console.log(num)
  })
  return result
}
 
console.log(oneWordOnly(["bird", "bird dog", "humming bird", "dog"])) //=>["bird", "dog"]
console.log(oneWordOnly(["house", "tiny mansion", "humming bird", "fish", "word"])) //=>["house", "fish", "word"]

// includes, contains (maybe)

// parameters and arguments in functions








// //1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
// const arr = [3, 6, 8, 2]

// const result = arr.filter(function(num){
//           if(num >= 4){
//               return num 
//           }})
//         console.log(result)



  

// // //2) Given an array of numbers, return a new array that only includes the even numbers.
//  const arr = [3, 6, 8, 2]

//     const result = arr.filter(function(num){
//         if(num % 2 === 0){
//             return num 
//         }
//     })
//     console.log(result)

  

// //   //3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
// const arr = ["dog", "wolf", "by", "family", "eaten", "camping"]

// const result = arr.filter(string => string.length <= 5)
// console.log(result)  



  
//   //4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
//   const peopleWhoBelongToTheIlluminati = [
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true }
//   ]
 
//   const clubMembers = peopleWhoBelongToTheIlluminati.filter(people => people.member === true)
//  console.log(clubMembers)
  



  //5) Make a filtered list of all the people who are old enough to see The Matrix (older than 18)
  let movieGoers = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]

const youngPeople = movieGoers.filter(person => person.age >= 18)
console.log(youngPeople)