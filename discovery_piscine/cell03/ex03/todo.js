function loadTodos() {
    let ftList = document.getElementById("ft_list");
    let savedTodos = getCookie("todos");

    if (savedTodos) {
        let todos = JSON.parse(savedTodos);
        todos.reverse().forEach(todo => addTodoElement(todo));
    }
}
function addTodo() {
    let task = prompt("Enter a new TO DO:");
    if (task) {
        addTodoElement(task);
        saveTodos();
    }
}
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
function saveTodos() {
    let todos = [];
    document.querySelectorAll(".todo").forEach(todo => {
        todos.push(todo.textContent);
    });
    setCookie("todos", JSON.stringify(todos), 7);
}
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}
function getCookie(name) {
    let nameEQ = name + "=";
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim();
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
    }
    return null;
}
window.onload = loadTodos;
