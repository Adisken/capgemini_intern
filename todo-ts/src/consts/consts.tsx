import { Task } from "../store/types";


const initialTodo : Task = {
    id: 123,
    title: "",
    body: "",
   }

const endpoint: string = "http://localhost:3000/tasks";
// const endpoint: string = "http://nestapi-env.eba-9kgvuxij.eu-central-1.elasticbeanstalk.com/todos";

export {initialTodo, endpoint};