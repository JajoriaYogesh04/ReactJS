import { addListener } from "@reduxjs/toolkit";
import { useSelector } from "react-redux"

export default function Todo(){
    const todos= useSelector((state)=>state.todos);
    console.log(todos);
    return(
        <>
            <h2>TODO List App</h2>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>{todo.task}</li>
                ))}
            </ul>
        </>
    )
}