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

        const todoEditBtn = document.createElement('button');
        todoEditBtn.classList.add('todo-edit-btn');
        todoEditBtn.innerText = 'Edit';
        todoEditBtn.addEventListener('click', editTodoItem);

        newTodoDiv.appendChild(newTodo);
        newTodoDiv.appendChild(todoDeleteBtn);
        newTodoDiv.appendChild(todoEditBtn);
        todoList.appendChild(newTodoDiv);

        textInput.value = '';
        textInput.focus();
    }

    function deleteTodoItem(e) {
        todoList.removeChild(e.target.parentElement);
    }

    function editTodoItem(e) {
        let selectedItem = e.target.previousSibling.previousSibling;

        const editedText = prompt(
            `Edit text from ${selectedItem.innerText} to:`,
            selectedItem.innerText
        );
        selectedItem.innerText = editedText;
    }

    form.addEventListener('submit', addTodoItem);
})();
