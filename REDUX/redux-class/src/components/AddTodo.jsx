import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddTodo(){
    let [task, setTask]= useState("");
    let dispatch= useDispatch();

    let handleInputChange=(event)=>{
        // console.log(event.target.value);
        setTask(event.target.value);
    }

    let handleSubmit=(event)=>{
        event.preventDefault();
        // console.log(task);
        dispatch(addTodo(task))
        setTask("");
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={task} onChange={handleInputChange} placeholder="Add Task..." style={{height:"2rem", width:"25rem", fontSize:"1.25rem"}}/><br /><br />
                <button type="submit" style={{backgroundColor:"#006f3c", border:"2px solid black", borderRadius:"0px"}}>Add Task</button>
            </form>
        </>
    )
}