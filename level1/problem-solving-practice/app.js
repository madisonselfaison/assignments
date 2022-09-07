//Write a function that takes an array of numbers and returns the largest (without using Math.max()
// const array = [6, 13, 250, 3];

// let max = array[0], min = array[0]
// for(let i = 0; i < array.length; i++) {
//     if (array[i] > max) { max = array[i]; }
//     if (array[i] < min) { min = array[i]; }
// }

// console.log("max = " + max);

// const array = [3, 5, 2, 8, 1];

// let max = array[0], min = array[0]
// for(let i = 0; i < array.length; i++) {
//     if (array[i] > max) { max = array[i]; }
//     if (array[i] < min) { min = array[i]; }
// }

// console.log("max = " + max);

// const array = [-13, 40, 3, 0, 19, 22];

// let max = array[0], min = array[0]
// for(let i = 0; i < array.length; i++) {
//     if (array[i] > max) { max = array[i]; }
//     if (array[i] < min) { min = array[i]; }
// }

// console.log("max = " + max);

//Write a function that takes an array of words and a character and returns each word that has that character present.

// test data
var array = ["$hello!", "%%^%%", "test!"]
function lettersWithStrings(arr, char){
    var newArray = []
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === char) {
                newArray.push(arr[i])
            }
        }
    }
    return newArray
}

console.log(lettersWithStrings(["$hello!", "%%^%%", "test!"], "$"))  // => ["$hello!"]
console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"))  // => ["C%4!", "Hey!"]
console.log(lettersWithStrings(["yellow", "green", "^up^", "down", "dog"], "h"))  // => []



//Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.
// test data

function isDivisible(num1, num2){
    if (num1 % num2 === 0) {
        console.log("is divisible")
    } else {
        console.log("is not divisible")
    }
}


isDivisible(4, 2) // => true
isDivisible(9, 3) // => true
isDivisible(15, 4) // => false