import {
    REQUEST_REGISTER,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    REQUEST_LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
} from "../../actions/auth/types";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user ? {
    isLoading: false,
    isLoggedIn: true,
    user
} : {
    isLoading: false,
    isLoggedIn: false,
    user: null
}

const authReducers = (state = initialState, action)=> {
    const { type, payload } = action;
    switch (type) {
        case REQUEST_REGISTER:
            return {
                ...state,
                isLoading: true,
                isLoggedIn: false,
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false
            };
        case REGISTER_FAIL:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false,
            };
        case REQUEST_LOGIN:
            return {
                ...state,
                isLoading: true,
                isLoggedIn: false,
                user: null,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                user: payload.user,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false,
                user: null
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null
            };
        default:
            return state;
    }
}

export default authReducers;

