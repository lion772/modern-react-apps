import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
    // Perform an async operation here (e.g., API request)
    const response = await axios.get("http://localhost:3005/users");
    return response.data;
});
