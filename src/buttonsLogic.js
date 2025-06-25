import { createTodo , createList } from "./applogic";
import { display } from "./DOMlogic";

export function setUpButtons(){
    // Todo part
    const newTodoBtn = document.querySelector("#new-todo-btn");
    const newTodoDialog = document.querySelector("#new-todo-dlg");
    const newTodoForm = document.querySelector("#new-todo-form");

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
    

    // List part
    const newListBtn = document.querySelector("#new-list-btn");
    const newListDialog = document.querySelector("#new-list-dlg");
    const newListForm = document.querySelector("#new-list-form");

    newListBtn.addEventListener("click", ()=>{
        newListDialog.showModal();
    });

    newListForm.addEventListener("submit", e=>{
        e.preventDefault();
        let formData = new FormData(e.target);
        let nameInputed = formData.get("name");

        createList(nameInputed);
        display();

        newListForm.reset();
        newListDialog.close();
    });


};