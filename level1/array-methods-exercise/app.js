var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

//Remove the last item from the vegetable array.
vegetables.pop()
console.log(vegetables)


//Remove the first item from the fruit array.
fruit.shift()
console.log(fruit)

//Find the index of "orange."
 var orangeIndex = fruit.indexOf("orange")
 console.log(orangeIndex)

 //Add that number to the end of the fruit array.
 fruit.push("1")
 console.log(fruit)

 //Use the length property to find the length of the vegetable array.
 let length = vegetables.length;
 console.log(vegetables.length)

//Add that number to the end of the vegetable array.
vegetables.push("3")
console.log(vegetables)

//Put the two arrays together into one array. Fruit first. Call the new Array "food".
var food = fruit.concat(vegetables)
console.log(food)

//Remove 2 elements from your new array starting at index 4 with one method.
var newArr = food.slice(4, 6)
console.log(newArr)

//Reverse your array.
food.reverse();
console.log(food)

//Turn the array into a string and return it.  
let allAtOnce = food.toString()
console.log(allAtOnce)
