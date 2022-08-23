/* This was from the lesson, but I'm not sure how I can fit the rest of my code in

const operator = readlinesync.keyIn("do you want to (a)dd, (s)ubract, (d)ivide, or (m)ultiply?")

if(){

}
*/

//Here is the code I patterned after a website that the lesson provided
const readline = require("readline-sync")
    choice = ['Add', 'Multiply', 'Divide', 'Subtract'],
    index = readlineSync.keyInSelect(choice,"Please enter the operation to perform");
console.log('Ok, ' + choice[index] + ' The result is ');

let num1 = readline.questionInt("Please enter your first number?")
let num2 = readline.questionInt("Please enter your second number?")

function add(x,y){
    return x + y
}
console.log(add(num1, num2))

function sub(x,y){
    return x - y 
}
console.log(add(num1, num2))

function mul(x,y){
    return x * y
}
console.log(mul(num1, num2))

function div(x,y){
    return x / y
}
console.log(div(num1, num2))

