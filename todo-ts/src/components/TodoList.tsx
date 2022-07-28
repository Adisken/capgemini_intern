import axios from "axios";
import React, { useContext, useState } from "react";
import { endpoint, initialTodo } from "../consts/consts";
import { Context } from "../context";
import { Task } from "../store/types";


const TodoList: React.FC = () => {
  const [showEdit, setShowEdit] = useState(-1);
  const [updated, setUpdate] = useState(initialTodo);

  const { state, dispatch } = useContext(Context);

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
      {state.todos && state.todos.map((todo) => (
        <div>
          <li>
            title: {todo.title} body: {todo.body}
            <span> </span>
            
            {state.role === 'admin' ? <button onClick={() => setShowEdit(todo.id)}>Edit</button> : ("")}
            {state.role === 'admin' ? <button onClick={() => dispatch({type: 'delete-todo', payload: todo.id})}>❌</button> : ("")}
            
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
                   onClick={() => {setUpdate({...updated, id : todo.id})}} 
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
