import { createTodo , createList } from "./applogic";
import { display } from "./DOMlogic";

export function setUpButtons(){
    const newTodoBtn = document.querySelector("#new-todo-btn");
    const newTodoDialog = document.querySelector("#new-todo-dlg");
    const newTodoForm = document.querySelector("#new-todo-form")
    const newListBtn = document.querySelector("#new-list-btn");
    
    newTodoBtn.addEventListener("click", ()=>{
        newTodoDialog.showModal();
    });

    newTodoForm.addEventListener("submit", e=>{
        e.preventDefault();
        let formData = new FormData(e.target);
        let titleInputed = formData.get("title");
        let descriptionInputed = formData.get("description");
        let dueDateInputed = formData.get("dueDate");
        let priorityInputed = formData.get("priority");

        createTodo(titleInputed, descriptionInputed, dueDateInputed, priorityInputed);
        display();

        newTodoForm.reset();
        newTodoDialog.close();
    });
}