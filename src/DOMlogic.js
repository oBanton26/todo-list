import { defaultList , allLists, createTodo } from "./applogic";

function createTodoEl(todo){
    const todoEl = document.createElement("div")
    todoEl.className = "todo";
    todoEl.textContent = todo.title + " " + todo.dueDate;
    return todoEl;
};

function createListEl(list){
    const listEl = document.createElement("div");
    listEl.className = "list";
    const listName = document.createElement("div");
    listName.className = "list-name";
    listName.textContent = `${list.name}`;
    listEl.appendChild(listName);
    return listEl;
};

function displayTodosOfList(list, listEl){
    for (let todo of list.array){
        listEl.appendChild(createTodoEl(todo));
    };
};

function displayAllLists(){
    cleanDisplay();
    const todoListContainer = document.querySelector("#todo-list-container");
    for (let list of allLists.array) {
        const listEl = createListEl(list);
        displayTodosOfList(list, listEl);
        todoListContainer.appendChild(listEl)
    };
}

export function display(){
    displayAllLists();
};

function cleanDisplay(){
    const todoListContainer = document.querySelector("#todo-list-container");
    todoListContainer.textContent = "";
};
