import { ACTION } from "../../App.js";

const Todo = ({todo, dispatch}) => {
    return(
        <div>
            <p style={{color: todo.completed ? 'red' : 'blue'}}>{todo.name}</p>
            <button onClick={() => dispatch ({type: ACTION.TOGGLE_TODO , payload:  {id: todo.id}} )}> Completed </button>
            <button onClick={() => dispatch ({type: ACTION.DELETE_TODO , payload:  {id: todo.id}} )}> Deleted </button>

        </div>

    )
}

export {Todo};