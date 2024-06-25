
import { useSelector } from "react-redux"
import AddTodo from "./AddTodo";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
import { markasDone } from "../features/todo/todoSlice";

export default function Todo(){
    const todos= useSelector((state)=>state.todos);
    const dispatch= useDispatch();
    // console.log(todos);

    let handleDelete=(id)=>{
        // console.log(id);
        dispatch(deleteTodo(id));
    }

    let handleDone=(id)=>{
        dispatch(markasDone(id));
    }

    return(
        <>
            <h2>TODO List App</h2>
            <AddTodo></AddTodo>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id} style={todo.isDone ? {backgroundColor:"green"}: {backgroundColor:"red"}}>{todo.task}&nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={()=>handleDelete(todo.id)} style={{backgroundColor:"red", border:"2px solid black", borderRadius:"0px", margin:"0.5rem"}}>Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={()=>handleDone(todo.id)} style={{backgroundColor:"blue", border:"2px solid black", borderRadius:"0px", margin:"0.5rem"}}>Done</button>
                    </li>
                ))}
            </ul>
        </>
    )
}