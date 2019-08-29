const addTodo = document.querySelector('.add');
const todoList = document.querySelector('.todos');
const search = document.querySelector('.search input');

// generating html template
const generateTemplate = todo => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    todoList.innerHTML += html;
}

// adding new todo
addTodo.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addTodo.add.value.trim();
    
    if(todo.length){
        generateTemplate(todo);
        addTodo.reset();
    }
})

// deleting todo
todoList.addEventListener('click', e => {
    // console.log(e.target.parentElement);
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
    
})

const filterTodos = (term) => {
    Array.from(todoList.children)
        .filter((todo) =>!todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('filtered'));

    Array.from(todoList.children)
        .filter((todo) =>todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered'));
};

// keyup event
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});