import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
// uuidv4();

function Todo(){
    let [todos, setTodos]= useState([{task: "TASK", id: uuidv4()}]);
    let [newTodo, setNewtodo]= useState("");

    function updateNewtodo(event){
        // console.log(event);
        // console.log(event.target.value);
        setNewtodo(event.target.value);
    }

    function updateTodo(){
        // console.log("Adding new Task")
        setTodos([...todos, {task: newTodo, id: uuidv4()}]);
        setNewtodo("");
    }

    return(
        <>
            <h2>TO-DO List</h2>
            <input type="text" placeholder="I will do..." onChange={updateNewtodo} value={newTodo} style={{width: "20rem", height: "3rem", borderRadius: "15px", fontSize: "20px", paddingLeft: "3rem"}}/>
            <br /><br />
            <button onClick={updateTodo}>Add Task</button>
            <br />
            <div>
                <ul>
                    {
                        todos.map((todo)=>{
                            return <li key={todo.id}>{todo.task}</li>
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default Todo;