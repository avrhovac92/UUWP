var input = document.getElementById('todoInput');
var addButton = document.getElementById('todoButton');
var container = document.getElementById('todoContainer');
var removeIcon = document.getElementById('removeTodo');

//This function Creates todo element we triggered by pressing button
const createTodoItem = (task) => {
    var div = document.createElement('div');
    div.className = 'todo-item';
    div.innerHTML = task + '<i class="fa fa-times icon" onclick="removeTodo(event)" />';
    return div;
}
//This function removes todo Element we wanted to remove by pressing "X" icon
const removeTodo = (event) => {
    const target = event.target;
    const parent = target.parentNode;
    container.removeChild(parent);
}

addButton.onclick = () => {
    if (input.value) {
        //innerHTML would overwrite the old content inside a div and write a new one
        //appendChild() adds more content at the end of the div, in this case our todoContainer
        container.appendChild(createTodoItem(input.value));
    }
}