submit.addEventListener("click", (e) => { 
    // e.preventDefault()
    let key = JSON.stringify(todo.value)
    let value = JSON.stringify(val.value)
    localStorage.setItem(key,value)
    console.log(e)
    inside_container.innerHTML = `
    <div class="inside">
    <h2>${todo.value}</h2>
    <p>${val.value}</p>
    </div>
    `
    todo.value = ""
    val.value = ""
})
// JSON.stringfy(keys), JSON.stringfy(values)