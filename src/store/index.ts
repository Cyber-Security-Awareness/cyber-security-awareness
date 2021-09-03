import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userStoreReducer from "./user";

export const store = configureStore({
    reducer: {
        user: userStoreReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
