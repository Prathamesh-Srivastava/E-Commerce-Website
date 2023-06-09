import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
        users: [],
        currentUser: null,
        isFetching: false,
        error: false,
        success: false
    },
    reducers: {
        loginStart: (state) =>{
            state.isFetching = true;
        },
        loginSuccess: (state,action) =>{
            state.isFetching =false;
            state.currentUser = action.payload;
            state.success = true;
        },
        loginFailure: (state) =>{
            state.isFetching = false;
            state.error = true;
        },

        registerStart: (state) =>{
            state.isFetching = true;
        },
        registerSuccess: (state,action) =>{
            state.isFetching =false;
            state.users.push(action.payload);
        },
        registerFailure: (state) =>{
            state.isFetching = false;
            state.error = true;
        }
    }
});

export const {loginStart,loginSuccess,loginFailure,registerStart,registerSuccess,registerFailure} = userSlice.actions;
export default userSlice.reducer;
