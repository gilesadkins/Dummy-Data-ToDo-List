// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.



const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then( (response) => response.json())
  .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
  console.log(arrayOfTodos)
}
const listOl = document.getElementById("todo-list")

const populateTodos = () => {
for (let i = 0; i < arrayOfTodos.length; i++) {
  const element = document.createElement("li")
  const content = document.createTextNode(arrayOfTodos[i].title)
  listOl.appendChild(element)
  element.appendChild(content)
  // console.log(element)
  }
}

const filterByUserId = () => {
  let FilteredArray = arrayOfTodos.filter(Todo => Todo.userId == document.getElementById("userID").value)
  document.getElementById("todo-list").innerHTML = "";
  for (let i = 0; i <FilteredArray.length; i++) {
    const element = document.createElement("li")
    const content = document.createTextNode(FilteredArray[i].title)
    listOl.appendChild(element)
    element.appendChild(content)
  }
}

const clearTodos = () => {
  document.getElementById("todo-list").innerHTML = "";
}

const filterTrue = () => {
  let StatusArray = arrayOfTodos.filter(Todo => Todo.completed == true)
  document.getElementById("todo-list").innerHTML = "";
  for (let i = 0; i <StatusArray.length; i++) {
    const element = document.createElement("li")
    const content = document.createTextNode(StatusArray[i].title)
    listOl.appendChild(element)
    element.appendChild(content)
  }
}

const filterFalse = () => {
  let StatusArray = arrayOfTodos.filter(Todo => Todo.completed == false)
  document.getElementById("todo-list").innerHTML = "";
  for (let i = 0; i <StatusArray.length; i++) {
    const element = document.createElement("li")
    const content = document.createTextNode(StatusArray[i].title)
    listOl.appendChild(element)
    element.appendChild(content)
  }
}

