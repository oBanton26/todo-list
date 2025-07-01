import { allLists, createList, createTodo, defaultList, getListFromAllLists } from "./applogic";

export function populateStorage (){
    localStorage.clear();

    // Naming part
    let itemName = "item0";
    let itemCount = 0;
    function incrementItemName(){
        ++itemCount;
        itemName = "item" + itemCount;
    };

    // Setting part
    for (let list of allLists.array){
        if (list == defaultList){
            // Loop through defaultList and check if it is a defaultList todo
            for (let todo of list.array){
                if (todo.listName === "Default List"){
                    localStorage.setItem(itemName, JSON.stringify(todo));
                    incrementItemName();
                };
            }
        } else {
            // Loop throught every other lists to add the todo
            for (let todo of list.array){
                localStorage.setItem(itemName, JSON.stringify(todo));
                incrementItemName();
            }
        };
    };
};


export function retrieveStorage (){
    const storageLength = localStorage.length;
   
    for (let i=0 ; i<storageLength ; i++){
        function isDifferentList(currentvalue){
            return item.listName !== currentvalue.name;
        };

        let itemName = "item" + i;
        const item = JSON.parse(localStorage.getItem(itemName));

        // Creates a new List if no list of allLists have the item.listName
        if (allLists.array.every(isDifferentList)){
            createList(item.listName);
        };

        const listObject = getListFromAllLists(item.listName);
        const createdTodo = createTodo(item.title, item.description, item.dueDate, item.priority, item.listName);
        if (listObject !== defaultList) {
            listObject.addTodo(createdTodo);
        };
    };
};