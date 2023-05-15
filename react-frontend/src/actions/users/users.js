import {
    REQUEST_RETRIEVE_USERS,
    RETRIEVE_USERS,
    RETRIEVE_USERS_FAIL,
    CURRENT_USER,
    CURRENT_USER_FAIL,
    REQUEST_CHANGE_EMAIL,
    CHANGE_EMAIL_SUCCESS,
    CHANGE_EMAIL_FAIL,
    REQUEST_CHANGE_PASSWORD,
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_FAIL,
    REQUEST_UPDATE_PROFILE,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,
    REQUEST_DELETE_ACCOUNT,
    DELETE_ACCOUNT_SUCCESS,
    DELETE_ACCOUNT_FAIL,
    REQUEST_CURRENT_USER,
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

export const getCurrentUser = () => async (dispatch) => {
    dispatch({
        type: REQUEST_CURRENT_USER,
    });
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
    dispatch({
        type: REQUEST_CHANGE_EMAIL,
    });
    return UsersServices.changeEmail(email).then(
        (response) => {
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
            const message = (error.response && error.response.data && error.response.data.message);
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
    dispatch({
        type: REQUEST_CHANGE_PASSWORD,
    });
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
            const message = (error.response && error.response.data && error.response.data.message);
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
    dispatch({
        type: REQUEST_UPDATE_PROFILE,
    });
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
            const message = (error.response && error.response.data && error.response.data.message);
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
    dispatch({
        type: REQUEST_DELETE_ACCOUNT,
    });
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
            const message = (error.response && error.response.data && error.response.data.message);
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