import "./styles.css";
import { Todo } from "./applogic";

const firstTodo = new Todo("work", "i just need to work duh", new Date(2000,5,26), 1);
firstTodo.toggleCompleted();
console.log(firstTodo);