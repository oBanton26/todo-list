import "./styles.css";
import { createTodo , createList} from "./applogic";
import { initialDisplay } from "./DOMlogic.js";
import { setUpButtons } from "./buttonsLogic.js";

const firstTodo = createTodo("work", "i just need to work duh", new Date(2000, 5, 26), 1);
const firstList = createList("My first list");
firstList.addTodo(createTodo("Wash my clothes", "it's self explanatory", new Date(), 2));
createTodo("Test the default list", "it's self explanatory again", new Date(), 2);
createTodo("Prout");
firstList.addTodo(firstTodo);
firstList.addTodo(createTodo("Another todo to test"))

setUpButtons();
initialDisplay();