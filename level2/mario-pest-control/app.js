const form = document.getElementById("badGuyForm");

const goombaInput = document.getElementById("goombas")
const bombInput = document.getElementById("bobombs")
const cheepInput = document.getElementById("cheepcheeps")

function addAll(num1, num2, num3) {
    return Number(num1 * 5) + (num2 * 7) + (num3 * 11)
}

form.addEventListener("submit", e => {
    e.preventDefault();

    let entry1 = goombaInput.value
    let entry2 = bombInput.value
    let entry3 = cheepInput.value

    let result = addAll(entry1, entry2, entry3)
    let ele = document.getElementById("total")
    let node = document.createTextNode(`Your total amount is ${result} coins.`)
    ele.appendChild(node);

    // alert(`Your total amount is\n ${result} coins.`)

    form.goombas.value = "";
    form.bobombs.value = "";
    form.cheepcheeps.value = "";

    
    
})

