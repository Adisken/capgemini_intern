import React, { useContext, useState } from "react";
import { initialTodo } from "../consts/consts";
import { Context } from "../context";
import { Task } from "../store/types";

const Inputform = () => {
  const { state, dispatch } = useContext(Context);
  const [todo, setTodo] = useState<Task>(initialTodo);

  return (
    <form>
      <input
        type="input"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        placeholder="Enter Title"
      ></input>
      <input
        type="input"
        value={todo.body}
        onChange={(e) => setTodo({ ...todo, body: e.target.value })}
        placeholder="Enter Body"
      ></input>
      <button
        onClick={() => {
          todo.id = Date.now();
          console.log('!!1',state.todos)
          dispatch({ type: 'create-todo', payload: todo });
          console.log('!!2',state.todos)
          setTodo(initialTodo);
        }}
      >
        Add Task
      </button>
    </form>
  );
};

export default Inputform;
