export default interface State {
  role: string;
  todos: Task[];
}

export interface Task {
  id: number;
  title: string;
  body: string;
}

type deleteTodoAction = { type: "delete-todo"; payload: number };
type createTodoAction = { type: "create-todo"; payload: Task };
type changeRoleAction = { type: "change-role"; payload: string };
type getTodosAction = { type: "get-todos"; payload: Task[] };

export type Actions =
  | deleteTodoAction
  | createTodoAction
  | changeRoleAction
  | getTodosAction;
