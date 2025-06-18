export class Todo {
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    };

    toggleCompleted(){
        this.completed = this.completed? false: true;
    };
};

export class List {
    constructor(name){
        this.name = name;
        this.array = [];
    };

    addTodo(todo){
        this.array.push(todo);
    };

    removeTodo(todo){
        const todoIndex = this.array.indexOf(todo);
        this.array.splice(todoIndex, 1);
    };
};

// The purpose of the defaultList is to contain all the Todos that don't fit 
// inside a specific list. It is NOT the generalList which is for displaying 
// all of the Todos (from defaultList and other specified lists)
export const defaultList = new List("Default List");

export function createTodo(title, description = "", dueDate = new Date(), priority = 3, list = defaultList){
    const newTodo = new Todo(title, description, dueDate, priority);
    list.addTodo(newTodo);
};