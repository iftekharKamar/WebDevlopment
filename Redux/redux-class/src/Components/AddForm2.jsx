import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm(){

    let [task,setTask] =useState("");
    const dispatch = useDispatch();

    const submitHandle =(e)=>{
        e.preventDefault();
        console.log(task);
        dispatch(addTodo(task));
    }
        return(
        <div>
            <form onSubmit={submitHandle}>
                <input type="text"  onChange={(e)=>setTask(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    )
}