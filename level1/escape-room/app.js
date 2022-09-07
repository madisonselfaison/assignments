const readline = require("readline-sync");
const name = readline.question("What is your name? ");

const introMessage = 'Welcome!'
console.log(introMessage)

let playerLife = true; 
let foundKey = false;

const options = ["Put hand in hole", "Find the key", "Open the door"]


function askQuestion() {
    gameOptions = readline.keyInSelect(options, "What do you choose?")
    makeChoice()
}
function makeChoice() {
    if(gameOptions === 0) {
        console.log("you put your hand in the hole. That's bad. Game over")
        playerLife = false;
    } else if (gameOptions === 1){
        console.log("You found the key. Now get to the door")
        playerLife = true;
        console.log(`playerlife: ${playerLife}`)
        foundKey = true;
        askQuestion()
    } else if (gameOptions === 2 && foundKey){
        console.log("You have the key and found the door! Congrats! You won the game!")
        playerLife = true;
    } else {
        console.log("The door handle electrocuted you")
        playerLife = false;
        console.log(`playerlife:${playerLife}`)
    }
}

askQuestion()
