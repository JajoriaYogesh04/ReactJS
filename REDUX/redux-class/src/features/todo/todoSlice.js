import { Tuple, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState= {
    todos: [{
        id: "123",
        task: "Task",
        isDone: false,
    }]
}

export const todoSlice= createSlice({
    name: "todoSlice",
    initialState,
    reducers: {
        addTodo: (state, action)=>{
            let newTodo={
                id: nanoid(),
                task: action.payload,
                isDone: true,
            }
            state.todos.push(newTodo);
        },
        deleteTodo: (state, action)=>{
            state.todos.filter((todo)=> todo.id !== action.payload )
        },
        markasDone: (state, action)=>{
            state.todos.map((todo)=>{
                if(todo.id === action.payload){
                    todo.isDone = true;
                }
            })
        }
    }
})

