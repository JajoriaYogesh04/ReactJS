
import { useSelector } from "react-redux"
import AddTodo from "./AddTodo";

export default function Todo(){
    const todos= useSelector((state)=>state.todos);
    console.log(todos);
    return(
        <>
            <h2>TODO List App</h2>
            <AddTodo></AddTodo>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>{todo.task}</li>
                ))}
            </ul>
        </>
    )
}