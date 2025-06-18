import { defaultList , createTodo } from "./applogic";

function createTodoEl(todo){
    const todoEl = document.createElement("div")
    todoEl.className = "todo";
    todoEl.textContent = todo.title + " " + todo.dueDate.getFullYear();
    return todoEl;
}

export function initialDisplay(){
    const todoListContainer = document.querySelector("#todo-list-container");
    for(let todo of defaultList.array){
        todoListContainer.appendChild(createTodoEl(todo));
    };
};
