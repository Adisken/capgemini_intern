import React from 'react'
import { Task } from '../interfaces/Interfaces';



interface Props {
  todo: Task,
  setTodo: React.Dispatch<React.SetStateAction<Task>>,
  createTodo: (e: React.FormEvent) => void;
}

const Inputform = ({ todo, setTodo, createTodo }: Props) => {
  return (
    <form onSubmit={createTodo}>
      <input type="input" value={todo.title} onChange={(e) => setTodo({...todo, title: e.target.value})} placeholder='Enter Title'></input>
      <input type="input" value={todo.body} onChange={(e) => setTodo({...todo, body: e.target.value})} placeholder='Enter Body'></input>
      <button type="submit" >Add Task</button>
    </form>
  )
}

export default Inputform;