import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface customerState {
    value: string[]
    food: string[]
}

const initialState:customerState = {
    value: [],
    food: []
}

export const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<string>) => {
            state.value.push(action.payload)
        },
        addFood: (state, action: PayloadAction<string>) => {
            state.food.push(action.payload)
        }
    }
})

export const {addCustomer, addFood} = customerSlice.actions;
export default customerSlice.reducer;