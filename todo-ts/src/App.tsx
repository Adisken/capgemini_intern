import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Inputform from "./components/inputform";
import TodoList from "./components/TodoList";
import { endpoint, initialTodo } from "./consts/consts";
import { Task } from "./interfaces/Interfaces";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Catpic from "./components/Catpic";

function App() {
  const [todo, setTodo] = useState<Task>(initialTodo);
  const [todos, setTodos] = useState<Array<Task>>([]);

  useEffect(() => {
    axios.get(endpoint).then((r) => {
      setTodos(r.data);
    });
  }, [todos]);

  const createTodo = (c: React.FormEvent) => {
    c.preventDefault();
    if (todo) {
      axios.post(endpoint, todo);
      setTodo(initialTodo);
    }
  };

  function deleteTodo(id: number) {
    const taskToDel = endpoint + `/${id}`;
    axios.delete(taskToDel);
  }

  return (
    <div className="App">
      <div className="menu">
        <Link to="/">dashboard</Link>
      </div>
      <div className="menu">
        <Link to="/todo">Todos</Link>
      </div>
      <div className="menu">
        <Link to="/catpic">cat picture</Link>
      </div>

      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route
          path="/todo"
          element={
            <>
              <Inputform
                todo={todo}
                setTodo={setTodo}
                createTodo={createTodo}
              />
              <TodoList
                todos={todos}
                setTodos={setTodos}
                deleteTodo={deleteTodo}
              />
            </>
          }
        />

        <Route path="/catpic" element={<Catpic />}></Route>
      </Routes>
    </div>
  );
}

export default App;
