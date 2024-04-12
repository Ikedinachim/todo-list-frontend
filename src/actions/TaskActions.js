import axios from "axios";
import { taskActions } from "../reducers/taskReducer";




const baseUrl = "http://localhost:4000";
const token = localStorage?.getItem("USER_TOKEN");

export const getUserTasks = () => async (dispatch) => {
    const token = localStorage?.getItem("USER_TOKEN");
    try {
        dispatch(taskActions.getTasksRequest());

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await axios.get(`${baseUrl}/todo/task/get-tasks`, config);
        console.log(response);
        if (response.status == 200 || response.status == 201) {
            dispatch(taskActions.getTasksSuccess(
                response.data
            ));
            console.log(response.data);
            // localStorage.setItem('USER_TOKEN', response.data.data.access_token);
        } else {
            dispatch(taskActions.getTasksFailure(
                response.data.message
            ));
        }


    } catch (error) {
        dispatch(taskActions.getTasksFailure(
            error.response.data.message
        ));
    }
}

export const getUserTask = (id) => async (dispatch) => {
    const token = localStorage?.getItem("USER_TOKEN");
    try {
        dispatch(taskActions.getTaskRequest());

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await axios.get(`${baseUrl}/todo/task/get-tasks/:${id}`, config);
        console.log(response);
        if (response.status == 200 || response.status == 201) {
            dispatch(taskActions.getTaskSuccess(
                response.data
            ));
            console.log(response.data);
            // localStorage.setItem('USER_TOKEN', response.data.data.access_token);
        } else {
            dispatch(taskActions.getTaskFailure(
                response.data.message
            ));
        }


    } catch (error) {
        dispatch(taskActions.getTaskFailure(
            error.response.data.message
        ));
    }
}

export const updateUserTask = (id, data) => async (dispatch) => {
    const token = localStorage?.getItem("USER_TOKEN");
    try {
        dispatch(taskActions.updateTaskRequest());

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await axios.put(`${baseUrl}/todo/task/update-task/${id}`, data, config);
        console.log(response);
        if (response.status == 200 || response.status == 201) {
            dispatch(taskActions.updateTaskSuccess(
                response.data
            ));
            console.log(response.data);
            // localStorage.setItem('USER_TOKEN', response.data.data.access_token);
        } else {
            dispatch(taskActions.updateTaskFailure(
                response.data.message
            ));
        }


    } catch (error) {
        dispatch(taskActions.updateTaskFailure(
            error.response.data.message
        ));
    }
}

export const createTask = (data) => async (dispatch) => {
    const token = localStorage?.getItem("USER_TOKEN");
    try {
        dispatch(taskActions.createTaskRequest());

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        console.log(data);

        const response = await axios.post(`${baseUrl}/todo/task/create-task`, data, config);
        console.log(response);
        if (response.status == 200 || response.status == 201) {
            dispatch(taskActions.createTaskSuccess(
                response.data
            ));
            console.log(response.data);
            // localStorage.setItem('USER_TOKEN', response.data.data.access_token);
        } else {
            dispatch(taskActions.createTaskFailure(
                response.data.message
            ));
        }


    } catch (error) {
        dispatch(taskActions.createTaskFailure(
            error.response.data.message
        ));
    }
}

export const deleteTask = (id) => async (dispatch) => {
    const token = localStorage?.getItem("USER_TOKEN");
    try {
        dispatch(taskActions.deleteTaskRequest());

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await axios.delete(`${baseUrl}/todo/task/delete-task/${id}`, config);
        console.log(response);
        if (response.status == 200 || response.status == 201) {
            dispatch(taskActions.deleteTaskSuccess(
                response.data
            ));
            console.log(response.data);
            // localStorage.setItem('USER_TOKEN', response.data.data.access_token);
        } else {
            dispatch(taskActions.deleteTaskFailure(
                response.data.message
            ));
        }


    } catch (error) {
        dispatch(taskActions.deleteTaskFailure(
            error.response.data.message
        ));
    }
}

export const markTask = (id) => async (dispatch) => {
    const token = localStorage?.getItem("USER_TOKEN");
    try {
        dispatch(taskActions.markTaskRequest());

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await axios.post(`${baseUrl}/todo/task/mark-complete/${id}`, config);
        console.log(response);
        if (response.status == 200 || response.status == 201) {
            dispatch(taskActions.markTaskSuccess(
                response.data
            ));
            console.log(response.data);
            // localStorage.setItem('USER_TOKEN', response.data.data.access_token);
        } else {
            dispatch(taskActions.markTaskFailure(
                response.data.message
            ));
        }


    } catch (error) {
        dispatch(taskActions.markTaskFailure(
            error.response.data.message
        ));
    }
}

export const getQuoteOfDay = () => async (dispatch) => {
    const token = localStorage?.getItem("USER_TOKEN");
    try {
        dispatch(taskActions.generateQuoteRequest());

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await axios.get(`${baseUrl}/todo/task/quote-of-day`, config);
        console.log(response);
        if (response.status == 200 || response.status == 201) {
            dispatch(taskActions.generateQuoteSuccess(
                response.data
            ));
            console.log(response.data);
            // localStorage.setItem('USER_TOKEN', response.data.data.access_token);
        } else {
            dispatch(taskActions.generateQuoteFailure(
                response.data.message
            ));
        }


    } catch (error) {
        dispatch(taskActions.generateQuoteFailure(
            error.response.data.message
        ));
    }
}