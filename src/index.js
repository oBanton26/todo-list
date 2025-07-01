import "./styles.css";
import { createTodo , createList} from "./applogic";
import { display } from "./DOMlogic.js";
import { setUpButtons } from "./buttonsLogic.js";
import { populateStorage, retrieveStorage } from "./localStorageLogic.js";



retrieveStorage();
setUpButtons();
display();