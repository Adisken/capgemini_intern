import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form>
          Title:<br />
          <input type="text" id="taskTitle" value="taskTitle" /> <br />
          Body:<br/>
          <input type="text" id="taskBody" value="taskBody" /> <br />
          <input 
          type="submit" 
          id="taskSubmit" 
          value="Add Task"
          onSubmit={CreateTask("ddd", "ss")} />
        </form>
      </header>
    </div>
  );
}

function CreateTask(t,b) {
  console.log(t,b);
  return (
    <div className="task">
      <input id="taskTitle" value={t} /> <br />      
      <input id="taskBody" value={b}/> <br />
      <button id="editButton"> </button>
      <button id="deleteButton"> </button>
    </div>
    

  );


}

export default App;
