import {configureStore} from '@reduxjs/toolkit'
import authReducer from './reducers/authReducer';
import taskReducer from './reducers/taskReducer';
const store = configureStore({
    reducer:{
        auth: authReducer.reducer,
        task: taskReducer.reducer
    }
})

export default store;