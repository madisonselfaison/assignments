const formA = document["my-form-a"];
formA.addEventListener("submit", function(event){
    event.preventDefault()
    const num1 = formA.num1.value
    const num2 = formA.num2.value
    const h1 = document.createElement('h1')
        formA.num1.value = ""
        formA.num2.value = ""

    function add(num1, num2){
        return parseInt(num1) + Number (num2)
    }
    h1.textContent = num1 + " + " + num2 + " " + "= " + add(num1,num2)
    formA.append(h1)
})

const formB = document["my-form-b"];
formB.addEventListener("submit", function(event){
    event.preventDefault()
    const bNum1 = formB.bNum1.value
    const bNum2 = formB.bNum2.value
    const h1 = document.createElement('h1')
        formB.bNum1.value = ""
        formB.bNum2.value = ""

    function subtraction(bNum1,bNum2){
        return parseInt(bNum1) - Number (bNum2)
    }
    h1.textContent = bNum1 + " - " + bNum2 + " " + "= " + subtraction(bNum1,bNum2)
    formB.append(h1)
})

const formC = document["my-form-c"];
formC.addEventListener("submit", function(event){
    event.preventDefault()
    const cNum1 = formC.cNum1.value
    const cNum2 = formC.cNum2.value
    const h1 = document.createElement('h1')
        formC.cNum1.value = ""
        formC.cNum2.value = ""

    function multiplication(cNum1,cNum2){
        return parseInt(cNum1) * Number (cNum2)
    }
    h1.textContent = cNum1 + " * " + cNum2 + " " + "= " + multiplication(cNum1,cNum2)
    formC.append(h1)
})


