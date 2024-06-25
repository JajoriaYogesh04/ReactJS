import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    todo: [{
        id: "123",
        task: "Task",
        isDone: false,
    }]
}

export const todoSlice= createSlice({
    name: "todoSlice",
    initialState,
    reducers: {}
})