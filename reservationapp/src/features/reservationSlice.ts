import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface reservationState {
    value: string[]
}

const initialState: reservationState = {
    value: []
}

export const reservationsSlice = createSlice({
    name: "reservation",
    initialState,
    reducers: {
        addReservation: (state, action: PayloadAction<string>) => {
            state.value.push(action.payload)
        },
        removeReseravtion: (state, action: PayloadAction<number>) => {
            state.value.splice(action.payload, 1)
        }
    }
})

export const { addReservation, removeReseravtion} = reservationsSlice.actions;
export default reservationsSlice.reducer;