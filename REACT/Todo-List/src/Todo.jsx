import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    let [todos,setTodos] =useState([{task:"sample-task",id:uuidv4()}]);
    let [newTodo,setNewTodo] = useState("");
    let addNewTask =()=>{
         setTodos((prevTodos)=>{
            return[...prevTodos,{task:newTodo,id:uuidv4()}];
         });
         setNewTodo("");
    }

    let updateNewTodo=(event)=>{
        setNewTodo(event.target.value);
    }

    let UpperCaseOne=(id)=>{

        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
                if(todo.id ==id){
                    return {
                        ...todo,task:todo.task.toUpperCase(),
                    };
                }else{
                    return todo;
                }
            })
        );
    }

    let UpperCaseAll =()=>{
        setTodos((todos)=>
            todos.map((todo)=>{
                return {
                    ...todo,task:todo.task.toUpperCase(),
                };
            })
        );
    }
    let deleteTodo=(id)=>{
     setTodos(todos.filter((todo)=>todo.id !=id))
    }
    return(
        <div>
            <input placeholder="add task" value={newTodo} onChange={updateNewTodo} />
            <button onClick={addNewTask}>Add Task</button>
            <br />
            <br />
            <br />
            <br />
            <h4>Tasks Todo</h4>
            <ul>
                {todos.map((todo)=>{
                   return( <li key={todo.id}>
                    <span>{todo.task}</span>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={()=>UpperCaseOne(todo.id)}>UpperCase</button>
                    </li>)
                })}
            </ul>

            <button onClick={UpperCaseAll}>Uppercase All</button>
        </div>
    )
}