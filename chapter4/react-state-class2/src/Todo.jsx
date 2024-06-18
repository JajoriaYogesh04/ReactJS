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
        setTodos((prevTodo)=>{
            return [...prevTodo, {task: newTodo, id: uuidv4()}]
        });
        setNewtodo("");
    }

    function deleteTodo(id){
        // console.log(id);
        // let copy= todos.filter((todo)=> todo.id != id)
        // console.log(copy)
        setTodos((prevTodo)=>{
            return prevTodo.filter((todo)=> todo.id != id);
        })
    }

    function upperCaseAll(){
        // console.log("Updating all");
        // let copy= todos.map((todo)=>({...todo, task: todo.task.toUpperCase()}))
        // console.log(copy);
        setTodos((prevTodo)=>{
            return(
                prevTodo.map((todo)=>({...todo, task: todo.task.toUpperCase()}))
            ) 
        })
    }

    return(
        <>
            <h2>TO-DO List</h2>
            <input type="text" placeholder="I will do..." onChange={updateNewtodo} value={newTodo} style={{width: "20rem", height: "3rem", borderRadius: "15px", fontSize: "20px", paddingLeft: "3rem"}}/>
            <br /><br />
            <button onClick={updateTodo}>Add Task</button>
            <br />
            <ul>
                {
                    todos.map((todo)=>{
                        return(
                            <li key={todo.id}>
                                <span>
                                    {todo.task}&nbsp;&nbsp;
                                    <button onClick={()=>{deleteTodo(todo.id)}} style={{marginBottom:"0.5rem", fontSize:"12px", marginLeft:"1rem", borderRadius:"20px"}}>Delete</button>
                                </span>
                            </li>
                        ) 
                    })
                }
            </ul>
            <br />
            <button onClick={upperCaseAll} style={{fontSize:"15px", borderRadius:"0px"}}>To UPPERCASE</button>
        </>
    )
}

export default Todo;