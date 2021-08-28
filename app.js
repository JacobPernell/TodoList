let todoArr = [];
const form = document.querySelector('.form');
const textInput = document.querySelector('#todo-add');
const todoList = document.querySelector('.todo-list');
textInput.focus();

function addTodoItem(e) {
    e.preventDefault();
    todoArr.push(textInput.value);
    // console.log(todoArr);

    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = textInput.value;
    newTodo.addEventListener('click', deleteTodoItem);
    todoList.appendChild(newTodo);

    textInput.value = '';
    textInput.focus();
}

function deleteTodoItem(e) {
    todoArr = todoArr.filter(item => {
        return item !== e.target.innerText;
    });

    todoList.removeChild(e.target);
}

form.addEventListener('submit', addTodoItem);
