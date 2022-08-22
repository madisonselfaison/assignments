const form = document.addItem;
console.log(form);

form.addEventListener("submit", function(e){
    e.preventDefault()

    const title = form.title.value
    const list = document.createElement("li")
    form.title.value = ""
    list.textContent = title
    document.getElementsByTagName("ul")[0].append(list)

    let delBtn = document.createElement("button")
    delBtn.textContent = "X"
    list.append(delBtn)
    delBtn.addEventListener("click", () => {
        list.remove(list)
    })
})

