import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  isAuthenticated: false,
  data: null,
  error: false,

};
const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userRegistrationRequest(state) {
      state.loading = true;
      console.log('register request')
      state.error = false;
    },
    userRegistrationSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.data = action.payload;
      state.error = false;
    },
    userRegistrationFailure(state, action) {
      state.loading = false;
      state.isAuthenticated = false;
       state.error = action.payload;
    },
   
    loginRequest(state) {
      state.loading = true;
      console.log('login request')
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.error = false;
      state.data = action.payload;
      state.isAuthenticated = true;
      console.log('login success')
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
      console.log(state.error);
      console.log('login failed')

    },
    logoutUser(state){
      state.isAuthenticated = false;

      console.log('logout')
    },
   
  },
});


export default authReducer;
export const authActions = authReducer.actions;