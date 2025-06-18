import "./styles.css";
import { createTodo, defaultList, createList} from "./applogic";

const firstTodo = createTodo("work", "i just need to work duh", new Date(2000, 5, 26), 1);
const firstList = createList("My first list");
createTodo("Wash my clothes", "it's self explanatory", new Date(), 2);
createTodo("Test the default list", "it's self explanatory again", new Date(), 2);
createTodo("Prout");
firstList.addTodo(firstTodo);
console.log(defaultList);
console.log(firstList);