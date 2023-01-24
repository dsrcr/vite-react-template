import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

export const exampleThunk = createAsyncThunk({});

export const exampleSlice = createSlice({
    name: "example",
    initialState,
    reducers: {
        example: (state, action) => {
            // example reducer
        },
    },
    extraReducers: (builder) => {
        // example builder case
    },
});

export default exampleSlice.reducer;
export const { example } = exampleSlice.actions;
