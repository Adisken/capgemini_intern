import { Task } from "../interfaces/Interfaces";

const initialTodo : Task = {
    title: "",
    body: "",
   }

const endpoint: string = "http://localhost:3000/tasks";

export {initialTodo, endpoint};