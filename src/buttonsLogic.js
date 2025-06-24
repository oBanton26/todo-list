export function setUpButtons(){
    const newTodoBtn = document.querySelector("#new-todo-btn");
    const newListBtn = document.querySelector("#new-list-btn");
    const todoDialog = document.querySelector("#new-todo-dlg");
    
    newTodoBtn.addEventListener("click", ()=>{
        todoDialog.showModal();
    });
}