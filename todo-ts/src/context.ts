import React from 'react'
import { initialState } from './store/state';
import { Actions } from './store/types';

export const defaultRole = "admin";

const defaultContext = {
    state: initialState,
    dispatch: (r:Actions) => {},
};

export const Context = React.createContext(defaultContext);
export {}