import { createSlice } from '@reduxjs/toolkit';


const userInitialState = {
    isAuthenticated: false,
    user: null,
    error: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState: userInitialState,
    reducers: {
        setUser(state, action){
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.error = null;
        },
        clearUser(state){
            state.isAuthenticated = false;
            state.user = null;
            state.error = null;
        },
        setError(state, action){
            state.error = action.payload.error;
        }
    }
});

export const userActions = userSlice.actions;

export default userSlice.reducer;