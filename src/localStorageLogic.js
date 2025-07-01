import { allLists, defaultList } from "./applogic";

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
    }
};