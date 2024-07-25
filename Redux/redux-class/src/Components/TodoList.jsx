import { useSelector} from "react-redux";
import AddForm from "./AddForm2.jsx";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice.js";

export default function Todo(){

    const dispatch = useDispatch();
  const todos= useSelector((state)=>state.todos);
  console.log(todos);  
let clickHandler =(id)=>{
console.log(id)
dispatch(deleteTodo(id));


}
  return(
        <div>
             <AddForm/>
            <h3>Todo List App</h3>
            <ul>
                {todos.map((todo)=><li key={todo.id}>{todo.task} <button onClick={()=>clickHandler(todo.id)}>Delete</button></li>)}
            </ul>
        </div>
    )
}