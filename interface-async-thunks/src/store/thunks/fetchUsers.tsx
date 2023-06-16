import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
    "users/fetch",
    async (_, thunkAPI) => {
        try {
            // Perform an async operation here (e.g., API request)
            const response = await axios.get("http://localhost:3005/users");
            return response.data;
        } catch (error: any) {
            // Handle errors
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
