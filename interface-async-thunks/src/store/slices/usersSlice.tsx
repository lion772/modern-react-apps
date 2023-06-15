import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";

// Define the interface for the initial state
interface UserState {
    data: [] | null;
    isLoading: boolean;
    error: any;
}

const initialState: UserState = {
    data: [],
    isLoading: false,
    error: null,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Handle the pending state
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
        });

        // Handle the fulfilled state
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });

        // Handle the rejected state
        builder.addCase(fetchUsers.rejected, (state: any, action: any) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const usersReducer = usersSlice.reducer;
