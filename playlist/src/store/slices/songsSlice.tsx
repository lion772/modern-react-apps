import { createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
    name: "songs",
    initialState: [],
    reducers: {
        addSong(state: string[], action: { payload: string }) {
            console.log(action.payload);

            state.push(action.payload);
        },
        removeSong(state: string[], action: { payload: string }) {
            const indexFound = state.indexOf(action.payload);
            //Remove 1 element at index found by indexOf
            state.splice(indexFound, 1);
        },
    },
});

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
