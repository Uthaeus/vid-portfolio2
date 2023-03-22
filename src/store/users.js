import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: []
    },
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload.user);
        },
        removeUser: (state, action) => {
            state.users = [];
        }
    }
});

export const addUser = usersSlice.actions.addUser;
export const removeUser = usersSlice.actions.removeUser;
export default usersSlice.reducer;