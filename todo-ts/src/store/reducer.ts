import State, { Actions } from "./types";

export function reducer(state: State, action: Actions): State {
  switch (action.type) {
    case "delete-todo":
      return {
        ...state,
        todos: state.todos.filter((e) => e.id !== action.payload),
      };
    case "create-todo":
      return { ...state, todos: [...state.todos, action.payload] };
    case "get-todos":
      return { ...state, todos: action.payload };
    case "change-role":
      return { ...state, role: action.payload };

    default:
      throw new Error();
  }
}
