import { useState } from "react";
import {useDispatch} from 'react-redux';
import {addTodo} from "../redux/features/todo";

function AddTodo(){
    const [input,setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e)=> {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }
    return(
        <form onSubmit={addTodoHandler} className="">
            <input type="text" 
            className="border-2 border-slate-200 p-2"
            placeholder="Enter a Todo..." 
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            ></input>
            <button 
            type="submit"
            className="text-lg font-semibold border-2 border-slate-400 p-1 px-2 mx-4 hover:bg-green-300">
            Add Todo
            </button>
        </form>
    )
}

export default AddTodo;