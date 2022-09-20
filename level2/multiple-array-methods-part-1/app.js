// // 1) return a list of everyone older than 18 (.filter???)
// const peopleArray = [
//     {
//         firstName: "Sarah",
//         lastName: "Palin",
//         age: 47
//     },
//     {
//         firstName: "Frank",
//         lastName: "Zappa",
//         age: 12
//     },
//     {
//         firstName: "Rick",
//         lastName: "Sanchez",
//         age: 78
//     },
//     {
//         firstName: "Morty",
//         lastName: "Smith",
//         age: 29
//     },
//     {
//         firstName: "Kyle",
//         lastName: "Mooney",
//         age: 27
//     },
//     {
//         firstName: "Pasha",
//         lastName: "Datsyuk",
//         age: 13
//     },
//     {
//         firstName: "Lev",
//         lastName: "Tolstoy",
//         age: 82
//     }
// ]

// let oldMovie = peopleArray.map(a => {
//     if(a.age >= 18){
//         return `${a.firstName} is old enough.`
//     }
//     else {
//         return `${a.firstName} is not old enough!!!`
//     }
// })
// console.log(oldMovie)




// // 2) sort alphabetically by last name 
// let arr = peopleArray.sort((a, b) => {
// 	const nameA = a.lastName.toUpperCase();
// 	const nameB = b.lastName.toUpperCase();
// 	if(nameA < nameB){
// 		return -1
// 	}
// 	if (nameA > nameB){
// 		return 1;
// 	}
// })

// console.log(arr)



// // 3) each name and age is embeddd in a string that looks like an html element 
// const arr = [{
//     name: "Kyle Mooney",
//     age: 27
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
//     name: "Kanye West",
//     age: 16
// },
// {
//     name: "Bob Ziroll",
//     age: 100
// }]
// function readyToAddToDom(arr){
//     return arr.map((result) => {
//         return "<li>".concat(result.name).concat(" is ", result.age).concat("</li>")
//     })
// }
// console.log(readyToAddToDom([
//     {
//         name: "Kyle Mooney",
//         age: 27
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kanye West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));

 

