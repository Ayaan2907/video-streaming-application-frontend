import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user") || "{}");

const initialState = {
    user: user,
    error: null,
    success: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        resetState: (state) => {
            state.error = null;
            state.success = null;
        },

        login: (state, action) => {
            state.user = action.payload;
            state.error = null;
            state.success = null;
        },

    },
});

export const authReducer = userSlice.reducer;
export const { login } = userSlice.actions;
