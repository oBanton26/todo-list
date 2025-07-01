import { allLists, defaultList } from "./applogic";

export function populateLocalStorage (){
    let itemName = "item0";
    let itemCount = 0;
    function incrementItemName(){
        ++itemCount;
        itemName = "item" + itemCount;
    };

    for (let list of allLists.array){
        if (list == defaultList){
            // code to look if the

            for (let todo of list.array){

            }
        } else {

        };
    }
};