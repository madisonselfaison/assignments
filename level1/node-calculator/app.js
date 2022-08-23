const readline = require("readline-sync")
let num1 = readline.question("Please enter your first number?")
let num2 = readline.question("Please enter your second number?")
operations = ['add', 'sub', 'mul', 'div'];
let userInput = readline.keyInSelect(operations,"Please enter the operation to perform")

function add(num1,num2){
    console.log("the result is: " + (Number(num1) + Number (num2)))
}
function sub(num1,num2){
    console.log("the result is: " + (Number(num1) - Number (num2)))
}
function mul(num1,num2){
    console.log("the result is: " + (Number(num1) * Number (num2)))
}
function div(num1,num2){
    console.log("the result is: " + (Number(num1) / Number (num2)))
}
if(userInput === 0){
    add(num1, num2);
}   else if(userInput === 1){
    sub(num1, num2)
}   else if(userInput === 2){
    mul(num1, num2)
}   else{
    div(num1, num2)
}