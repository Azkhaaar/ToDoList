const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');

addTodoBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', function(event) {
	if (event.key === 'Enter') {
		addTodo();
	}
});

function addTodo() {
	const todoText = todoInput.value.trim();
	if (todoText !== '') {
		const todoListItem = document.createElement('li');
		const editBtn = document.createElement('button');
		const deleteBtn = document.createElement('button');

		editBtn.textContent = 'Edit';
		editBtn.classList.add('edit-btn');
		deleteBtn.textContent = 'Delete';
		deleteBtn.classList.add('delete-btn');

		todoListItem.textContent = todoText;
		todoListItem.appendChild(editBtn);
		todoListItem.appendChild(deleteBtn);
		todoList.appendChild(todoListItem);
		todoInput.value = '';

		editBtn.addEventListener('click', function() {
			const newTodoText = prompt('Edit your todo:', todoText);
			if (newTodoText !== null && newTodoText.trim() !== '') {
				todoListItem.firstChild.nodeValue = newTodoText; // Update the todo text
			}
		});
	}
}

todoList.addEventListener('click', function(event) {
	if (event.target.tagName === 'LI') {
		event.target.classList.toggle('completed');
	} else if (event.target.tagName === 'BUTTON' && event.target.classList.contains('delete-btn')) {
		const todoListItem = event.target.parentNode;
		todoList.removeChild(todoListItem);
	}
});