import { defaultList , createTodo } from "./applogic";

function createTodoEl(todo){
    const todoEl = document.createElement("div")
    todoEl.className = "todo";
    todoEl.textContent = todo.title + " " + todo.dueDate.getFullYear();
    return todoEl;
}

export function initialDisplay(){
    const todoListContainer = document.querySelector("#todo-list-container");
    const defautlListEl = document.createElement("div");
    defautlListEl.className = "default-list list";
    for (let todo of defaultList.array){
        defautlListEl.appendChild(createTodoEl(todo));
    };
    todoListContainer.appendChild(defautlListEl);
};

export function cleanDisplay(){
    const todoListContainer = document.querySelector("#todo-list-container");
    todoListContainer.textContent = "";
};
