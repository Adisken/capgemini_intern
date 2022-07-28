import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import "./App.css";
import Inputform from "./components/inputform";
import TodoList from "./components/TodoList";
import { endpoint, initialTodo } from "./consts/consts";
import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Catpic from "./components/Catpic";
import { Context, defaultRole } from "./context";
import Header from "./components/header/Header";
import { reducer } from "./store/reducer";
import { initialState } from "./store/state";
import { Task } from "./store/types";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get(endpoint).then((r) => {
      dispatch({ type: "get-todos", payload: r.data });
    });
  }, []);

  // const createTodo = (c: React.FormEvent) => {
  //   c.preventDefault();
  //   if (todo) {
  //     todo.id = Date.now();
  //     axios.post(endpoint, todo).catch((error) => {
  //       console.log(error);
  //     });
  //     setTodo(initialTodo);
  //   }
  // };

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route
            path="/todo"
            element={
              <>
                <Inputform />
                <TodoList />
              </>
            }
          />
          <Route path="/catpic" element={<Catpic />}></Route>
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
