import {
    REQUEST_REGISTER,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    REQUEST_LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
} from './types';

import AuthServices from "../../services/AuthServices";

export const register = (name, email, password, c_password) => (dispatch) => {
    dispatch({
        type: REQUEST_REGISTER,
    });
    return AuthServices.register(name, email, password, c_password).then(
        (response) => {
            dispatch({
                type: REGISTER_SUCCESS,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });
            return Promise.resolve();
        },
        (error) => {
            const message = (error.response && error.response.data && error.response.data.message);
            dispatch({
                type: REGISTER_FAIL,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            })
            return Promise.reject();
        }
    )
}

export const login = (email, password) => (dispatch) => {
    dispatch({
        type: REQUEST_LOGIN,
    });
    return AuthServices.login(email, password).then(
        (data) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: data },
            });
            return Promise.resolve();
        },
        (error) => {
            const message = (error.response && error.response.data && error.response.data.message);
            dispatch({
                type: LOGIN_FAIL,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();
        }
    )
}

export const logout = () => (dispatch) => {
    AuthServices.logout();
    dispatch({
        type: LOGOUT,
    })
}