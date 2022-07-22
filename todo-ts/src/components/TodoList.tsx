import React from 'react'
import { Task } from '../interfaces/Interfaces'

interface Props {
    todos: Array<Task>,
    setTodos: React.Dispatch<React.SetStateAction<Task[]>>
    deleteTodo: any; //used any cos' idk what else I could put here :/
}

const TodoList: React.FC<Props> = ({ todos, setTodos, deleteTodo }) => {
    return (
        <div>
            {todos.map(todo => (
                <li>title: {todo.title} body: {todo.body}<span>     </span>  
                    <button onClick={() => deleteTodo(todo.id)}>  ❌</button>
                </li>
            ))}
        </div>
    )
}

export default TodoList