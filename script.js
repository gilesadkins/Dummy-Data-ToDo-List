// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.



const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then( (response) => response.json())
  .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
  console.log(arrayOfTodos)
}

const populateTodos = () => {

var i;

for (i = 0; i < 25; i++) {

const listOl = document.getElementById("todo-list")
const element = document.createElement("li")
const content = document.createTextNode(arrayOfTodos[i].title)
listOl.appendChild(element)
element.appendChild(content)
console.log (listOl)
}
}
