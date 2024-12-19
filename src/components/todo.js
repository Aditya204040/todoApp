import { useSelector,useDispatch } from "react-redux";
import { removeTodo } from "../redux/features/todo";
import AddTodo from "./addTodo";
function Todo(){
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    return(
        <div className="flex-column py-20">
        <h1 className="font-bold text-indigo-500 text-2xl underline border-black">Todos</h1>
        {todos.map((todo)=>(
            <li key = {todo.id} className="text-xl font-semibold py-2">
                {todo.text}
                <button 
                className="text-sm border-2 border-slate-400 p-1 px-2 mx-4 hover:bg-red-300"
                onClick={()=> dispatch(removeTodo(todo.id))}>
                X
                </button>
            </li>
        ))}
        <AddTodo></AddTodo>
        </div>
    )
}

export default Todo;