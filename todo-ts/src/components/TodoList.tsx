import axios from "axios";
import React, { useState } from "react";
import { endpoint, initialTodo } from "../consts/consts";
import { Task } from "../interfaces/Interfaces";

interface Props {
  todos: Array<Task>;
  setTodos: React.Dispatch<React.SetStateAction<Task[]>>;
  deleteTodo: any; //used any cos' idk what else I could put here :/
}

const TodoList: React.FC<Props> = ({ todos, setTodos, deleteTodo}) => {
  const [showEdit, setShowEdit] = useState<number>();
  const [updated, setUpdate] = useState(initialTodo);

  const editTodo = (u: React.FormEvent) => {
    u.preventDefault();
    if (updated) {
      const taskToEdit =endpoint + `/${updated.id}`
      axios.put(taskToEdit, {
        title: updated.title,
        body: updated.body,
      })
      setUpdate(initialTodo);
    }
  } 

  return (
    <div>
      {todos.map((todo) => (
        <div>
          <li>
            title: {todo.title} body: {todo.body}
            <span> </span>
            <button onClick={() => setShowEdit(todo.id)}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>❌</button>
          </li>

          {showEdit === todo.id ? (
            
              <div>
                <form onSubmit={editTodo}>
                new title:
                <input
                  type="text"
                  value={updated.title}
                  onChange={(e) =>
                    setUpdate({ ...updated, title: e.target.value })
                  }
                />
                new body:
                <input
                  type="text"
                  value={updated.body}
                  onChange={(e) =>
                    setUpdate({ ...updated, body: e.target.value })
                  }
                />
                <button
                  type="submit" onClick={() => (setUpdate({...updated, id : todo.id}))} 
                >
                  Update
                </button>
                </form>
              </div>
            
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
