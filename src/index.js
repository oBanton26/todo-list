import "./styles.css";
import { Todo, List} from "./applogic";

const firstTodo = new Todo("work", "i just need to work duh", new Date(2000,5,26), 1);

const firstList = new List;
firstList.addTodo(firstTodo);
console.log(firstList.array);
firstList.removeTodo(firstTodo);
console.log(firstList.array);