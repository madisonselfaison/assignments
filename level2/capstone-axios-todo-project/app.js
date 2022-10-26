const todoForm = document["mainForm"]
//console.log(mainForm)

function getData(){
    axios.get("https://api.vschool.io/madisonselfaison/todo/")
    .then(response => listData(response.data))
    .catch(error => error)
}
getData()

function listData(arr){
    clearList()
    for(let i = 0; i < arr.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = arr[i].title
        document.getElementById("todoList").appendChild(h1)

    const delBtn = document.createElement("button")
    delBtn.textContent = "Delete To-Do"
    h1.appendChild(delBtn)
    delBtn.addEventListener("click", ()=>{
        axios.delete("https://api.vschool.io/madisonselfaison/todo/" + arr[i]._id)
        .then(getData)
    })
    const doneBtn = document.createElement("button")
    doneBtn.textContent = "Done"
    h1.appendChild(doneBtn)

    const updates = {
        completed: !arr[i].completed
    }
  
    doneBtn.addEventListener('click', ()=> {
            axios.put("https://api.vschool.io/madisonselfaison/todo/" + arr[i]._id, updates)
            .then(getData)
            .catch(error => console.log(error))
        }) 
    
    const descriptionh2 = document.createElement('h2')
    descriptionh2.textContent = arr[i].description
    document.getElementById("todoList").appendChild(descriptionh2)
    const img = document.createElement('img')
    img.src = arr[i].imgUrl
    img.style.width = '90px'
    img.style.height = '90px'
    document.getElementById("todoList").appendChild(img)
    
    const priceh2 = document.createElement('h2')
    priceh2.textContent = arr[i].price
    document.getElementById("todoList").appendChild(priceh2)
    
    if (arr[i].completed === true){
    h1.style.textDecoration = 'line-through';
    descriptionh2.style.textDecoration = 'line-through';
    priceh2.style.textDecoration = 'line-through';
    }
    }
}

function clearList (){
    const el = document.getElementById("todoList")
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}

todoForm.addEventListener("submit", function(e){
    e.preventDefault()
    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        price: todoForm.price.value,
        imgUrl: todoForm.imgUrl.value
    }

    todoForm.title.value=""
    todoForm.description.value=""
    todoForm.price.value=""
    todoForm.imgUrl.value=""
    axios.post("https://api.vschool.io/madisonselfaison/todo/", newTodo)
        .then(getData)
        .catch(error => console.log(error))
})