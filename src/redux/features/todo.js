import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id:1,text:"Do Nothing"}]
}

export const todo = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addTodo: (state,action)=>{
            const todo = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
    }
})

export const {addTodo,removeTodo} = todo.actions

export default todo.reducer