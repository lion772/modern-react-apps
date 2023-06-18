import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../components/User";

export const removeUser = createAsyncThunk(
    "users/remove",
    async (user: User) => {
        const response = await axios.post(
            `http://localhost:3005/users/${user.id}`
        );
        return response.data;
    }
);
