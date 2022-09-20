const button = document.getElementById("button")
console.log(button)
const countDisplay = document.createElement("h2")
document.body.append(countDisplay)
let count = 0
const numberOfClicks = button.addEventListener("click", function(){
   count += 1;
   console.log(count)
   countDisplay.textContent = count
})

var remainingTime = 30;
var isStopped = true;

const countContainer = document.getElementById("countdown number");

const renderTime = () => {
   remainingTime -= 1;
   countContainer.innerHTML = remainingTime;
   if (remainingTime === 0){
      isStopped = true;
      clearInterval(timer);
      remainingTime = 30;
   }
};

const startTimer = () => {
   if (isStopped) {
      isStopped = false;
      countContainer.innerHTML = remainingTime;
      timer = setInterval(renderTime, 30000)
   }
};

const stopTimer = () => {
   isStopped = true;
   if (timer) {
      clearInterval(timer);
   }
};

const resetTimer = () => {
   isStopped = true;
   clearInterval(timer);
   remainingTime = 30;
   countContainer.innerHTML = remainingTime;
}




