
import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';


function App() {
  const initialToDo = { title: "", body: "" };
  const [state, setState] = useState(initialToDo); //current state of form
  const [tasks, setTasks] = useState([]);
  const endpoint = "http://localhost:3000/tasks";

  useEffect(() => {
    axios.get(endpoint).then((r) => {
      setTasks(r.data);
    });
  }, []);
  
  function createTask(e) {
    e.preventDefault();
    if (!state) {
      alert("Please enter task.")
      return;
    }

    const task = {
      id: Math.floor(Math.random() * 1000),
      title: state.title,
      body: state.body,
    };
    axios.post(endpoint, task);
    axios.get(endpoint).then((r) => {
      console.log(r)
      setTasks(r.data);
    })
    // setTasks(oldlist => [...oldlist, task]);
    setState(initialToDo);

  }

  function deleteTask(id) {
    const taskToDel = endpoint + `/${id}`;
    axios.delete(taskToDel);

    axios.get(endpoint).then((r) => {
      setTasks(r.data);
    });
  }

  function editTask(id,) {
    const curentTask = tasks.filter(task => task.id == id);


  }

  return (
    <div className="App">
      <header className="">
        <form>
          Title:<br />
          <input type="text" id="taskTitle" value={state.title} onChange={(e) => setState({ ...state, title: e.target.value })} /> <br />
          Body:<br />
          <input type="text" id="taskBody" value={state.body} onChange={(e) => setState({ ...state, body: e.target.value })} /> <br />
          <button
            type="submit"
            id="taskSubmit"
            value="Add Task"
            onClick={(e) => { e.preventDefault(); createTask(e) }}>Add Task</button>
        </form>

      </header>
      <main>
        {tasks.map(task => {
          return (
            <div key={task.id}>
              <b>Title: </b> {task.title} <br />
              Body: {task.body} <br />
              <button onClick={() => editTask(task.id)}>Edit</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>

            </div>
          )
        })}
      </main>
    </div>
  );
}

export default App;
