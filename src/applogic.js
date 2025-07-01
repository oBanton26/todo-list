class Todo {
    constructor(title, description, dueDate, priority, listName){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
        this.listName = listName;
    };

    toggleCompleted(){
        this.completed = this.completed? false: true;
    };
};

class List {
    constructor(name){
        this.name = name;
        this.array = [];
    };

    addTodo(todo){
        this.array.push(todo);
    };

    removeTodo(todo){
        const todoIndex = this.array.indexOf(todo);
        if (todoIndex !== -1){
            this.array.splice(todoIndex, 1);
        };
    };
};

// allLists is the top level list which contains every lists: defaultList and
// all the other lists created with createList()
export const allLists = new List("All lists");

// The purpose of the defaultList is to contain all the Todos. If you want to
// to add a Todo to another List, you need to use the List.addTodo() method,
// which will duplicate it.
export const defaultList = createList("Default List");


export function createTodo(title, description = "", dueDate = new Date(), priority = 3, listName = "Default List"){
    const newTodo = new Todo(title, description, dueDate, priority, listName);
    defaultList.addTodo(newTodo);
    return newTodo;
};

export function createList(name){
    const newList = new List(name);
    allLists.addTodo(newList);
    return newList;
};

export function getListFromAllLists(objectName){
    function isList(object){
        return object.name === objectName;
    };
    return allLists.array.find(isList);
};