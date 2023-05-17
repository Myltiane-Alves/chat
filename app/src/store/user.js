import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "users",
    initialState:{},
    reducers: {
        addUser: (state, action) => {
            user.name = action.payload.name;
            user.id = Math.random() * 100 + 1;
        }
    }
});

export const { addUser } = slice.actions;
export default slice.reducer;