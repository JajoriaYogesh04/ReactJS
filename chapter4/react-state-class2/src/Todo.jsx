import { useState } from "react";

function Todo(){
    let [todos, setTodos]= useState(["sample"]);
    let [newTodo, setNewtodo]= useState("");

    function updateNewtodo(event){
        // console.log(event.target.value);
        setNewtodo(event.target.value);
    }

    function updateTodo(){
        // console.log("Adding new Task")
        setTodos([...todos, newTodo]);
        setNewtodo("");
    }

    return(
        <>
            <input type="text" placeholder="I will do..." onChange={updateNewtodo} value={newTodo} style={{width: "20rem", height: "3rem", borderRadius: "15px", fontSize: "20px", paddingLeft: "3rem"}}/>
            <br /><br />
            <button onClick={updateTodo}>Add Task</button>
            <br />
            <h2>TO-DO List</h2>
            <div>
                <ul>
                    {
                        todos.map((todo)=>{
                            return <li>{todo}</li>
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default Todo;