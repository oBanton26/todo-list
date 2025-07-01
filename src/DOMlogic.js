import { allLists } from "./applogic";
import { populateStorage } from "./localStorageLogic";

function createTodoEl(todo){
    const todoEl = document.createElement("div");
    function expandable(){
        const description = createSmallDiv(todo.description);
        description.className = "expandable";
        todoEl.appendChild(description);
        
        const priority = createSmallDiv(todo.priority);
        priority.className = "expandable";
        todoEl.appendChild(priority);
        

        // Delete button part
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", ()=>{
            for (let list of allLists.array){
                list.removeTodo(todo);
            };
            populateStorage();
            display();
        });
        deleteBtn.className = "expandable";
        todoEl.appendChild(deleteBtn);
        

        todoEl.classList.add("expanded");
        todoEl.addEventListener("click", shrinkable);
        todoEl.removeEventListener("click", expandable);
    };
    function shrinkable(){
        const expandedDivs = todoEl.querySelectorAll(".expandable");
        for (let div of expandedDivs){
            todoEl.removeChild(div);
        };
        todoEl.addEventListener("click", expandable);
        todoEl.removeEventListener("click", shrinkable);
    }

    todoEl.className = "todo";
    todoEl.appendChild(createSmallDiv(todo.title));
    todoEl.appendChild(createSmallDiv(todo.dueDate));
    todoEl.addEventListener("click", expandable);
    return todoEl;
};

function createSmallDiv(content){
    const div = document.createElement("div");
    div.textContent = content;
    return div;
}

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

function cleanDisplay(){
    const todoListContainer = document.querySelector("#todo-list-container");
    todoListContainer.textContent = "";
};

function updateTodoListSelect(){
    const listSelect = document.querySelector("#selected-list");
    listSelect.textContent = "";
    for (let list of allLists.array){
        const newOption = document.createElement("option");
        newOption.setAttribute("value", list.name);
        newOption.textContent = list.name;
        listSelect.appendChild(newOption);
    };
};

export function display(){
    updateTodoListSelect();
    displayAllLists();
};

