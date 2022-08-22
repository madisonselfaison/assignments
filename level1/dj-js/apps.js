document.body.style.backgroundColor = "grey"

let header = document.getElementById("header");
header.style.textAlign = "center";
header.style.fontSize = "100px";

let container = document.getElementById("container");
container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(5, auto)";
container.style.gridTemplateRows = "100px";
container.style.gap = "40px";
container.style.marginBottom = "900px"; 
container.style.backgroundColor = "grey";

let blueSquare = document.getElementById("blueSquare");
blueSquare.style.border = "2px solid black";
blueSquare.style.grid.column = "1 / 2";
blueSquare.style.padding = "5px";

blueSquare.addEventListener("mouseover", () =>
blueSquare.style.backgroundColor = "blue");

blueSquare.addEventListener("mouseleave", () =>
blueSquare.style.backgroundColor = "grey");

let redSquare = document.getElementById("redSquare");
redSquare.style.border = "2px solid black";
redSquare.style.grid.column = "2 / 3";
redSquare.style.padding = "5px";

redSquare.addEventListener("mousedown", () =>
redSquare.style.backgroundColor = "red");

redSquare.addEventListener("mouseleave", () =>
redSquare.style.backgroundColor = "grey");

let yellowSquare = document.getElementById("yellowSquare");
yellowSquare.style.border = "2px solid black";
yellowSquare.style.grid.column = "3 / 4";
yellowSquare.style.padding = "5px";

yellowSquare.addEventListener("mouseup", () =>
yellowSquare.style.backgroundColor = "yellow");

yellowSquare.addEventListener("mouseleave", () =>
yellowSquare.style.backgroundColor = "grey");

let greenSquare = document.getElementById("greenSquare");
greenSquare.style.border = "2px solid black";
greenSquare.style.grid.column = "4 / 5"
greenSquare.style.padding = "5px"

greenSquare.addEventListener("dblclick", () =>
greenSquare.style.backgroundColor = "green");

greenSquare.addEventListener("mouseleave", () =>
greenSquare.style.backgroundColor = "grey");

let orangeSquare = document.getElementById("orangeSquare");
orangeSquare.style.border = "2px solid black";
orangeSquare.style.grid.column = "5 / 6";
orangeSquare.style.padding = "5px";

window.addEventListener("wheel", () =>
orangeSquare.style.backgroundColor = "orange");

orangeSquare.addEventListener("mouseenter", () =>
orangeSquare.style.backgroundColor = "grey");



window.addEventListener("keydown", pressKey);
window.addEventListener("keyup", releaseKey);

function pressKey(key){
  if(key.keyCode === 66){
    blueSquare.style.backgroundColor = "blue";
  } else if(key.keyCode === 82){
    redSquare.style.backgroundColor = "red";
  } else if(key.keyCode === 89){
    yellowSquare.style.backgroundColor = "yellow";
  } else if(key.keyCode === 71){
    greenSquare.style.backgroundColor = "green";
  } else if(key.keyCode === 79){
    orangeSquare.style.backgroundColor = "orange";
  }
}



function releaseKey(key){
  if(key.keyCode === 66 && (blueSquare.style.backgroundColor ="blue")){
    blueSquare.style.backgroundColor ="grey"
  } else if(key.keyCode === 82 && (redSquare.style.backgroundColor ="red")){
    redSquare.style.backgroundColor ="grey"
  } else if(key.keyCode === 89 && (yellowSquare.style.backgroundColor ="yellow")){
    yellowSquare.style.backgroundColor ="grey"
  } else if(key.keyCode === 71 && (greenSquare.style.backgroundColor ="green")){
    greenSquare.style.backgroundColor = "grey"
  } else if(key.keyCode === 79 && (orangeSquare.style.backgroundColor ="orange")){
    orangeSquare.style.backgroundColor ="grey"
  }
} 

