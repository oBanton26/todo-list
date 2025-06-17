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
}