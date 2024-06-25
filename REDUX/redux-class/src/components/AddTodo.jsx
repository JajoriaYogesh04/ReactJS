import { useState } from "react"

export default function AddTodo(){
    let [task, setTask]= useState("");

    let handleInputChange=(event)=>{
        // console.log(event.target.value);
        setTask(event.target.value);
    }

    let handleSubmit=(event)=>{
        event.preventDefault();
        console.log(task);
        setTask("");
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={task} onChange={handleInputChange} placeholder="Add Task..." style={{height:"2rem", width:"25rem", fontSize:"1.25rem"}}/><br /><br />
                <button type="submit">Add Task</button>
            </form>
        </>
    )
}