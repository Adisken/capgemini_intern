import { configureStore} from "@reduxjs/toolkit";
import { customerSlice } from "../features/custoremSlice";
import { reservationsSlice } from "../features/reservationSlice";


export const store = configureStore({
    reducer: {
        reservations: reservationsSlice.reducer,
        customers: customerSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;