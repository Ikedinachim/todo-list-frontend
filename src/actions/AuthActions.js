import axios from "axios";
import { authActions } from "../reducers/authReducer";

const baseUrl = "http://localhost:4000";

export const registerUser = (data) => async (dispatch) => {
    try{
        dispatch(authActions.userRegistrationRequest());
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        
        const response = await axios.post(`${baseUrl}/todo/user/register`, data, config);
        console.log(response)
        if(response.success){
            dispatch(authActions.userRegistrationSuccess(
                response.data.data
            ));
            localStorage.setItem('USER_TOKEN', response.data.data.token);
        }else{
            dispatch(authActions.userRegistrationFailure( 
                response.data.message
            ));
        }

      
    }catch(error){
        dispatch(authActions.userRegistrationFailure(
            error.response.data.message || 'Login Unsuccessful'
        ));
    }
}


export const login = (data) => async (dispatch) => {
    try{
        dispatch(authActions.loginRequest());
        
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        
        const response = await axios.post(`${baseUrl}/todo/user/login`, data, config);
        console.log(response.data)
        if(response.data.success){
            console.log(response);
            dispatch(authActions.loginSuccess(
               response.data,
            ));
           localStorage.setItem('USER_TOKEN', response.data.token);
        }else{
            dispatch(authActions.loginFailure( 
                response.data.message
            ));
        }

      
        }catch(error){
        dispatch(authActions.loginFailure(
            error.message || 'Login Unsuccessful'
        ));
    }
}

export const  logoutUser = ()  =>  (dispatch) =>  {
    dispatch(authActions.logoutUser())
    }