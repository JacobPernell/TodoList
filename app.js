(function () {
    const form = document.querySelector('.form');
    const textInput = document.querySelector('#todo-add');
    const todoList = document.querySelector('.todo-list');
    textInput.focus();

    function addTodoItem(e) {
        e.preventDefault();

        const newTodoDiv = document.createElement('div');
        newTodoDiv.classList.add('todo-item-container');

        const newTodo = document.createElement('li');
        newTodo.classList.add('todo-item');
        newTodo.innerText = textInput.value;

        const todoDeleteBtn = document.createElement('button');
        todoDeleteBtn.classList.add('todo-delete-btn');
        todoDeleteBtn.innerText = 'X';
        todoDeleteBtn.addEventListener('click', deleteTodoItem);

        newTodoDiv.appendChild(newTodo);
        newTodoDiv.appendChild(todoDeleteBtn);
        todoList.appendChild(newTodoDiv);

        textInput.value = '';
        textInput.focus();
    }

    function deleteTodoItem(e) {
        todoList.removeChild(e.target.parentElement);
    }

    form.addEventListener('submit', addTodoItem);
})();
