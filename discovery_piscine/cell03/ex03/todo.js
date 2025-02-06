// Function to load stored todos from cookies
function loadTodos() {
    let ftList = document.getElementById("ft_list");
    let savedTodos = getCookie("todos");

    if (savedTodos) {
        let todos = JSON.parse(savedTodos);
        todos.reverse().forEach(todo => addTodoElement(todo));
    }
}

// Function to add a new To-Do
function addTodo() {
    let task = prompt("Enter a new TO DO:");
    if (task) {
        addTodoElement(task);
        saveTodos();
    }
}

// Function to add a To-Do element to the DOM
function addTodoElement(task) {
    let ftList = document.getElementById("ft_list");
    let div = document.createElement("div");

    div.className = "todo";
    div.textContent = task;
    div.onclick = function () {
        if (confirm(`Do you want to remove: "${task}"?`)) {
            div.remove();
            saveTodos();
        }
    };

    ftList.insertBefore(div, ftList.firstChild);
}

// Function to save the To-Do list in cookies
function saveTodos() {
    let todos = [];
    document.querySelectorAll(".todo").forEach(todo => {
        todos.push(todo.textContent);
    });
    setCookie("todos", JSON.stringify(todos), 7);
}

// Function to set a cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

// Function to get a cookie
function getCookie(name) {
    let nameEQ = name + "=";
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim();
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
    }
    return null;
}

// Load todos when the page loads
window.onload = loadTodos;
