var header = document.querySelector("#header")
header.innerHTML = "Java Script Made This!! <br/><span id='madison'>Madison</span> wrote this Java Script"
header.style.fontSize ="50px"
var madison =document.getElementById('madison')
madison.style.color = "blue"

//This is bronze
const messages = document.getElementsByClassName("message");
messages[0].textContent = "you're cool";
messages[1].textContent = "thank you!";
messages[2].textContent = "you're welcome";
messages[3].textContent = "I think that you're cool, too";

var clearbtn = document.getElementById("clear-button");
let input = document.querySelector(".messages")
    
clearbtn.addEventListener("click", () => {
    input.textContent = ""
})


console.log(select.theme-drop-down.value)

//This is silver (still getting it to work)
//document.getElementById("theme-one");
//document.style.color = blue / brown

//document.getElementById("theme-two")
//document.style.color = red / black

/* I'm pretty sure this is the wrong function
function changeColor(){
    var color = document.getElementById('colorChanger').value; 
}
*/

let selection = document.querySelector('select');
let result = document.querySelector('theme-two')

selection.addEventListener('theme-two', () => {
    result.innerText = selection.style.backgroundColor = red / black;
})
//I think there needs to be an if/else function here. Not too sure though. 


//This is gold.


const form = document.form;

form.addEventListener("submit", (event) => {
    event.preventDefault()

})
    
    const typeHere = form.typeHere.value;
    form.typeHere.value = "";

const div = document.createElement("div") 
div.textContext = typeHere + " "
document.getElementsByClassName("messages")[4].append(div)
