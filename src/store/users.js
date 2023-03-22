import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        userEmail: '',
        userPassword: ''
    },
    reducers: {
        addUser: (state, action) => {
            state.userEmail = action.payload.email;
            state.userPassword = action.payload.password;
        },
        removeUser: (state, action) => {
            state.userEmail = '';
            state.userPassword = '';
        }
    }
});

export const addUser = usersSlice.actions.addUser;
export const removeUser = usersSlice.actions.removeUser;
export default usersSlice.reducer;