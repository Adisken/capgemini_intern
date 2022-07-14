
import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';


function App() {
  const initialToDo = { title: "", body: "" };
  const [state, setState] = useState(initialToDo); //current state of form
  const [tasks, setTasks] = useState([]);
  const endpoint = "http://localhost:3000/tasks";

  const [showEdit, setShowEdit] = useState(-1);
  const [updated, setUpdate] = useState(initialToDo);
 
  function getTasks() {
    axios.get(endpoint).then((r) => {
      setTasks(r.data);
    });
  }

  useEffect(() => {
    getTasks();
  },[]);

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
    axios.post(endpoint, task).then(getTasks);
    setState(initialToDo);
  }

  function deleteTask(id) {
    const taskToDel = endpoint + `/${id}`;
    axios.delete(taskToDel).then(getTasks);
  }

  function editTask(id, t, b) {
    const taskToEdit = endpoint + `/${id}`;
    axios.put(taskToEdit, {
      title: t,
      body: b
    }).then(getTasks);
    
    setUpdate(initialToDo);
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
              <button onClick={() => setShowEdit(task.id)}>Edit</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>

              {showEdit === task.id ? (
                <div>
                  new title:<input type="text" value={updated.title} onChange={(e) => setUpdate({ ...updated, title: e.target.value })} />
                  new body:<input type="text" value={updated.body} onChange={(e) => setUpdate({ ...updated, body: e.target.value })} />
                  <button onClick={() => editTask(task.id, updated.title, updated.body)}>Update</button>
                </div>
              ) : null}

            </div>
          )
        })}
      </main>
    </div>
  );
}

export default App;
