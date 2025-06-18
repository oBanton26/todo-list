import "./styles.css";
import { Todo, List, createTodo, defaultList} from "./applogic";

const firstTodo = new Todo("work", "i just need to work duh", new Date(2000,5,26), 1);
const firstList = new List("My first list");
createTodo("Wash my clothes", "it's self explanatory", new Date(), 2, firstList);
createTodo("Test the default list", "it's self explanatory again", new Date(), 2);
firstList.addTodo(firstTodo);
console.log(defaultList);
console.log(firstList.array);