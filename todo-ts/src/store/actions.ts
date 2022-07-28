import { Actions } from "./types";

export function TodoActions(action:Actions):Actions {
    return {type: action.type, payload: action.payload} as Actions;
}
