import ToDoComponent from "./components/ToDoComponent";
import { useEffect, useState } from "react";
import { addtodo, getalltodo, updateToDo, deleteToDo} from "./utils/HandleAPI";
function App() {

const [todo, setToDo]= useState([]);
const [text,setText]= useState("");
const [isupDating, setIsUpDating] = useState(false);
const[toDoId, setToDoId] = useState("");

useEffect(() => {
  getalltodo(setToDo);
}, []);

const updateMode = (_id, text) => {
  setIsUpDating(true);
  setText(text);
  setToDoId(_id);
}

  return (
    <div className="App">
      <div className="container">
        <h1>Todo App</h1>

        <div className="top">
          <input type="text" placeholder="Add a new task..." 
          value={text}
          onChange={(e) => setText(e.target.value)} />

          <div className="add" onClick={ isupDating?
          ()=>updateToDo(toDoId,text,setToDo,setText,setIsUpDating)
          :()=> addtodo(text,setText,setToDo)}>
          {isupDating ? "Update" : "Add"}

          </div>
        </div>

        <div className="list">
          {todo.map((item) => <ToDoComponent
          key={item._id} text={item.text}
          updateMode={()=>updateMode(item._id,item.text)} 
          deleteToDoComponent={()=>deleteToDo(item._id,setToDo)}
          />)}

           

        </div>
      </div>

    </div>
  );
}


export default App;
