import {
    REQUEST_RETRIEVE_USERS,
    RETRIEVE_USERS,
    RETRIEVE_USERS_FAIL,
    CURRENT_USER,
    CURRENT_USER_FAIL,
    CHANGE_EMAIL_SUCCESS,
    CHANGE_EMAIL_FAIL,
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_FAIL,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,
    DELETE_ACCOUNT_SUCCESS,
    DELETE_ACCOUNT_FAIL,
} from "./types";

import UsersServices from "../../services/UsersServices";
import AuthServices from "../../services/AuthServices";
import { SET_MESSAGE } from "../auth/types";

export const retrieveUsers = () => async (dispatch) => {
    dispatch({
        type: REQUEST_RETRIEVE_USERS,
    });
    try {
        const res = await UsersServices.getAllUser();
        dispatch({
            type: RETRIEVE_USERS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: RETRIEVE_USERS_FAIL
        });
    }
}

export const currentUser = () => async (dispatch) => {
    try {
        const res = await AuthServices.currentUser()
        dispatch({
            type: CURRENT_USER,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: CURRENT_USER_FAIL
        });
    }
}

export const changeEmail = (email) => async (dispatch) => {
    return UsersServices.changeEmail(email).then(
        (response) => {
            console.log("From action", response.data.message);
            dispatch({
                type: CHANGE_EMAIL_SUCCESS,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });
            return Promise.resolve();
        },
        (error) => {
            const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString());
            dispatch({
                type: CHANGE_EMAIL_FAIL,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();
        }
    )
}


export const changePassword = (old_password, new_password, confir_password) => (dispatch) => {
    return UsersServices.changePassword(old_password, new_password, confir_password).then(
        (response) => {
            dispatch({
                type: CHANGE_PASSWORD_SUCCESS,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });
            return Promise.resolve();
        },
        (error) => {
            const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString());
            dispatch({
                type: CHANGE_PASSWORD_FAIL,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();
        }
    )
}

export const updateProfile = (name) => (dispatch) => {
    return UsersServices.updateProfile(name).then(
        (response) => {
            dispatch({
                type: UPDATE_PROFILE_SUCCESS,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });
            return Promise.resolve();
        },
        (error) => {
            const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString());
            dispatch({
                type: UPDATE_PROFILE_FAIL,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();
        }
    )
}

export const deleteAccount = () => (dispatch) => {
    return UsersServices.deleteAccount().then(
        (response) => {
            dispatch({
                type: DELETE_ACCOUNT_SUCCESS,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });
            return Promise.resolve();
        },
        (error) => {
            const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString());
            dispatch({
                type: DELETE_ACCOUNT_FAIL,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();
        }
    )
}