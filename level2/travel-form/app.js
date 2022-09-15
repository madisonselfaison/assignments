const form = document["my-form"]

form.addEventListener("submit", e =>{
    e.preventDefault()
    let firstName = form.firstName.value
    let lastName = form.lastName.value
    let age = form.age.value
    let gender = form.gender.value
    let location = form.location.value
    const diet = []
    const dietBoxes = form.querySelectorAll("input[name=diet]:checked")

    for(let i = 0; i < dietBoxes.length; i++){
        diet.push(dietBoxes[i].value)
    }
    alert("Name: " + firstName + " " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nDestination: " + location + "\nDiet Restrictions: " + diet
    )
    form.firstName.value = ""
    form.lastName.value = ""
    form.age.value = ""
    form.gender.value = ""
    form.location.value = ""
})
